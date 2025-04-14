import styles from '../css/static.module.css'
import calculateWinRate from '../modules/calculateWinRate.js'
import ElemRankingStatic from '../components/ElemRankingStatic.js'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useLocation, useNavigate } from 'react-router-dom'

import { getElemListRanking } from '../apis/elem.js'

import { elemListRankingAtom } from '../store/jotai.js'

function Static() {
	const [ elemListRanking, setElemListRanking ] = useAtom(elemListRankingAtom)
	const location = useLocation() 
	const navigate = useNavigate()
	
	useEffect(() => {
		async function axios(){
			const result = await getElemListRanking(parseInt(location.state.genreId))
			const elemStatic = calculateWinRate(result.data)
			setElemListRanking(elemStatic)
		}
		axios()
	},[])
	
	return(
		<div className={styles.static}>
			<div className={styles.static__genreName}>
				{location.state.genreName}
			</div>
			<div className={styles.static__button_nav}>
				<div className={styles.static__home_button} onClick={()=>{navigate('/')}}>
					처음으로
				</div>
				<div className={styles.static__return_button} onClick={()=>{navigate(-1)}}>
					이전으로
				</div>
			</div>
			<div className={styles.static__elemRankingStatic_container}>
				{elemListRanking.map((elem, index) => {
					return <ElemRankingStatic id={index} elemName={elem.name} winCount={elem.win_count} winRate={elem.win_rate}/>
				})}
			</div>
		</div>
	)
}

export default Static
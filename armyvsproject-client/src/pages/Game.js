import styles from '../css/game.module.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useAtom } from 'jotai'

import Elem from '../components/Elem.js'

import { getRandomElemList } from '../apis/elem.js'
import { randomElemListAtom } from '../store/jotai.js'

function Game(){
	const [ randomElemList, setRandomElemList] = useAtom(randomElemListAtom)
	
	useEffect(() => {
		async function axios(){
			const result = await getRandomElemList(location.state.id)
			console.log(result)
		}
		axios()
	},[])
	
	const location = useLocation()
	return(
		<div className={styles.game}>
			<div className={styles.game__genre_name}>
				{ location.state.name }
			</div>
			<div className={styles.game__elem_wrapper}>
				<div className={styles.game__elem_container}>
					<Elem/>
					<Elem/>
				</div>
			</div>
		</div>
	)
}

export default Game
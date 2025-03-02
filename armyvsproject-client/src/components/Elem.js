import styles from '../css/elem.module.css'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import selectElem from '../modules/selectElem.js'
import differentiateElem from '../modules/differentiateElem.js'
import { gameElemAtom, selectionWinRateAtom, gameProgressAtom, gameIsFinishedAtom, isButtonActiveAtom } from '../store/jotai.js'
import ElemStatic from '../components/ElemStatic.js'
import { maxSelectionPerGame } from '../modules/global.js'

function Elem(props) {
	const [ gameElem, setGameElem ] = useAtom(gameElemAtom)
	const [ selectionWinRate, setSelectionWinRate] = useAtom(selectionWinRateAtom)
	const [ gameProgress, setGameProgress ] = useAtom(gameProgressAtom)
	const [ gameIsFinished, setGameIsFinished ] = useAtom(gameIsFinishedAtom)
	const [ isButtonActive, setIsButtonActive ] = useAtom(isButtonActiveAtom)
	const [ thisElem, opponentElem ] = differentiateElem(gameElem, props.elemId)
	
	const navigate = useNavigate()
	console.log(isButtonActive)
	
	return(
		<>
		
		{
			isButtonActive&&<div className={styles.elem} onClick={
				async() => {
				setIsButtonActive(false)
				console.log(thisElem)
				console.log(opponentElem)
				// 선택 저장, 통계 반환
				const selectionStatic = await selectElem([props.elemId, gameElem])
				const selectedElemCount = parseInt(selectionStatic.selectedElemCount)
				const unselectedElemCount = parseInt(selectionStatic.unselectedElemCount)
				let winRate = (selectedElemCount / (selectedElemCount + unselectedElemCount))*100
				setSelectionWinRate(winRate)

				// selected : -1 (선택못받음) 0 (미결정) 1 (선택받음)
				thisElem.selected = 1
				opponentElem.selected = -1
				await setGameElem(gameElem[0].data.id == props.elemId ? [thisElem, opponentElem] : [opponentElem, thisElem])

						// 다음게임 세팅

				const nextElemData = await JSON.parse(window.sessionStorage.getItem('elemList'))[gameProgress + 1]
				const nextElem = { 'data' : nextElemData, 'selected' : 0 }
				await setTimeout(() => {
					if (gameProgress == maxSelectionPerGame){
						navigate('/gameResult', { state : { genreName : props.genreName, genreId : props.genreId, elemName : thisElem.data.name, elemId : thisElem.data.id }})
						return 0
					}
						thisElem.selected = 0
						setGameElem([thisElem, nextElem])
						setGameProgress(gameProgress + 1)
						setIsButtonActive(true)
					}, 2000)}
				}>

				 <div className={styles.elem__content}>
					{
						{
							'0' : <div>{props.elemName}</div>,
							'1' : <ElemStatic isSelected={true} winRate ={selectionWinRate}/>,
							'-1' : <ElemStatic isSelected={false} winRate ={100 - selectionWinRate}/>,
						}[thisElem.selected]
					}
				</div>
			</div>
		}

		{
			!isButtonActive&&<div className={styles.elem}>
				 <div className={styles.elem__content}>
					{
						{
							'0' : <div>{props.elemName}</div>,
							'1' : <ElemStatic isSelected={true} winRate ={selectionWinRate}/>,
							'-1' : <ElemStatic isSelected={false} winRate ={100 - selectionWinRate}/>,
						}[thisElem.selected]
					}
				</div>
			</div>
		}
		
		</>
	)
}

export default Elem
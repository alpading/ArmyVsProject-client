import styles from '../css/elemStatic.module.css'
import { useEffect } from 'react'

function ElemStatic(props) {
	
	
	return(
		<div className={`${styles.elemStatic} ${props.isSelected == true ? styles.elemStatic__selected : styles.elemStatic__unselected}`}>
			{props.winRate.toFixed(2)}%
		</div>
	)
}

export default ElemStatic
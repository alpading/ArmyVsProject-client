import styles from '../css/elemStatic.module.css'

function ElemStatic(props) {
	
	
	return(
		<div className={`${styles.elemStatic__background} ${props.isSelected == true ? styles.elemStatic__background_selected : styles.elemStatic__background_unselected}`}>
			<div className={styles.elemStatic}>
				{props.winRate.toFixed(2)}%가 선택함
			</div>
		</div>
	)
}

export default ElemStatic
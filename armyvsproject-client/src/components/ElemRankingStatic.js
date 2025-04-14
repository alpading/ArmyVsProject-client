import styles from '../css/elemRankingStatic.module.css'
import { useEffect } from 'react'

function ElemRankingStatic(props) {
	
	return(
		<div className={styles.elemRankingStatic__wrapper}>
			<div className={styles.elemRankingStatic__rank}>
				{props.id + 1}위
			</div>
			<div className={props.id == 0 ? styles.elemRankingStaticFirst
											: (props.id == 1) ? styles.elemRankingStaticSecond
											: (props.id == 2) ? styles.elemRankingStaticThird
											: styles.elemRankingStatic}>
				<div className={styles.elemRankingStatic__topNav}>
					<div className={styles.elemRankingStatic__elemName}>
						{props.elemName}
					</div>
				</div>
				<div className={styles.elemRankingStatic__bottomNav}>
					<div className={styles.elemRankingStatic__winCount}>
						우승 횟수 : {props.winCount}
					</div>
					<div className={styles.elemRankingStatic__winRate}>
						승률 : {props.winRate}%
					</div>
				</div>
			</div>
		</div>
	)
}

export default ElemRankingStatic
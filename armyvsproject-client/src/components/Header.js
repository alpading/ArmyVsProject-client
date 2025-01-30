import styles from '../css/header.module.css';

function Header() {
	return(
		<div className={styles.header}>
			<div className={styles.header__title}>
				군대 밸런스 게임
			</div>
		</div>
	)
}

export default Header
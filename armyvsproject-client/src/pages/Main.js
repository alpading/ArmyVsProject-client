import { useEffect } from 'react'
import { useAtom } from 'jotai'
import Genre from '../components/Genre.js'

import styles from '../css/main.module.css'
import { getRandomGenreList } from '../apis/genre.js'
import { randomGenreListAtom } from '../store/jotai.js'

function Main() {
	const [ randomGenreList, setRandomGenreList] = useAtom(randomGenreListAtom)
	
	useEffect(() => {
		async function axios(){
			const result = await getRandomGenreList()
			await setRandomGenreList(result)
		}
		axios()
	},[])
	
	return(
		<div className={styles.main}>
			<div className={styles.main__wrapper}>
				
				<div className={styles.main__banner}>
				</div>
				
				<div className={styles.main__middle_nav}>
					<div className={styles.main__refresh_button}></div>
					<div className={styles.main__list_button}></div>
				</div>
				
				<div className={styles.main__genre_container}>
					{randomGenreList.map((e)=><Genre name={e.name} id={e.id} />)}
				</div>
				
			</div>
		</div>
	)
}

export default Main
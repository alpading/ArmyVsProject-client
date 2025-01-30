import axios from 'axios'
import { baseUrl } from './global.js'

async function getRandomGenreList(){
	const result = await axios.get(baseUrl + 'genre')
	return result.data
}

export { getRandomGenreList }
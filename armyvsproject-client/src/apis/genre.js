import axios from 'axios'
import { baseUrl } from '../modules/global.js'

async function getRandomGenreList(){
	const result = await axios.get(baseUrl + 'genre')
	return result.data
}

async function getAllGenreList(){
	const result = await axios.get(baseUrl + 'genre/all')
	return result.data
}

export { getRandomGenreList, getAllGenreList }
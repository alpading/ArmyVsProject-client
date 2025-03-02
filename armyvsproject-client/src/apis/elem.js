import axios from 'axios'
import { baseUrl } from '../modules/global.js'

async function getRandomElemList(param){
	const result = await axios.get(baseUrl + `elem/list/${param}`)
	return result.data
}

async function getElem(param){
	const result = await axios.get(baseUrl + `elem/${param}`)
	return result.data
}

async function getElemListRanking(param){
	const result = await axios.get(baseUrl + `elem/${param}/list/ranking`)
	return result.data
}

async function putElemWinCount(param){
	const result = await axios.put(baseUrl + `elem/win`, {
		'elemId' : param
	})
	return result.data
}

export { getRandomElemList, getElem, getElemListRanking, putElemWinCount }
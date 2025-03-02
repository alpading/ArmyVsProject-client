import axios from 'axios'
import { baseUrl } from '../modules/global.js'

async function postSelection(params){
	const result = await axios.post(baseUrl + `selection`, {
		'selected_elem_id' : params[0],
		'unselected_elem_id' : params[1]
	})
	return result.data
}

async function getSelectionStatic(params){
	const result = await axios.get(baseUrl + `selection/stat/${params[0]}/${params[1]}`)
	return result.data
}

export { postSelection, getSelectionStatic }
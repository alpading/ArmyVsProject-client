import {atom} from 'jotai'

const randomGenreListAtom = atom([])
const randomElemListAtom = atom([])
const gameElemAtom = atom([])
const gameProgressAtom = atom(1)
const elemIsSelectedAtom = atom(0)
const selectionWinRateAtom = atom(0.0)
const gameIsFinishedAtom = atom(false)
const elemWinRateAtom = atom(0)
const elemListRankingAtom = atom([])
const isButtonActiveAtom = atom(true)
const isListModeActiveAtom = atom(false)

export { 
	randomGenreListAtom,
	randomElemListAtom,
	gameElemAtom,
	gameProgressAtom,
	elemIsSelectedAtom,
	selectionWinRateAtom,
	gameIsFinishedAtom,
	elemWinRateAtom,
	elemListRankingAtom,
	isButtonActiveAtom,
	isListModeActiveAtom
}
import {atom} from 'jotai'

const randomGenreListAtom = atom([])
const gameElemAtom = atom([])
const gameProgressAtom = atom(0)
const elemIsSelectedAtom = atom(0)
const selectionWinRateAtom = atom(0.0)
const gameIsFinishedAtom = atom(false)
const elemWinRateAtom = atom(0)
const elemListRankingAtom = atom([])
const isButtonActiveAtom = atom(true)
const isListModeActiveAtom = atom(false)
const isIntroActiveAtom = atom(true)

export { 
	randomGenreListAtom,
	gameElemAtom,
	gameProgressAtom,
	elemIsSelectedAtom,
	selectionWinRateAtom,
	gameIsFinishedAtom,
	elemWinRateAtom,
	elemListRankingAtom,
	isButtonActiveAtom,
	isListModeActiveAtom,
	isIntroActiveAtom
}
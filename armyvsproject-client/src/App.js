import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main.js'
import Game from './pages/Game.js'
import Static from './pages/Static.js'
import GameResult from './pages/GameResult.js'

function App() {
	return (
  	<div className="App">
			<Header/>
 	  	<Routes>
				<Route path='/' element = {<Main/>}/>
				<Route path='/game' element = {<Game/>}/>
				<Route path='/static' element = {<Static/>}/>
				<Route path='/gameResult' element = {<GameResult/>}/>
	  	</Routes>
    </div>
  )
}

export default App

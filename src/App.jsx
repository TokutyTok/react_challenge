import React from 'react'

import { Router, Route, Link, Routes } from 'react-router-dom'

import ButtonClickChangeColor from './pages/ButtonClickChangeColor'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/buttonClickChangeColor" element={<ButtonClickChangeColor/>}/>
      </Routes>
    </div>
  )
}

export default App;

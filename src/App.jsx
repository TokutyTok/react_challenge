import React from 'react'

import { Route, Routes } from 'react-router-dom'

import ButtonClickChangeColor from './pages/ButtonClickChangeColor'
import ValueDisplayEntered from './pages/ValueDisplayEntered'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ButtonClickChangeColor" element={<ButtonClickChangeColor/>}/>
        <Route path="/ValueDisplayEntered" element={<ValueDisplayEntered/>}/>
      </Routes>
    </div>
  )
}

export default App;

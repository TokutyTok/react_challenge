import React from 'react'

import { Route, Routes } from 'react-router-dom'

import ButtonClickChangeColor from './pages/ButtonClickChangeColor'
import ValueDisplayEntered from './pages/ValueDisplayEntered'
import Counter from './pages/Counter'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ButtonClickChangeColor" element={<ButtonClickChangeColor/>}/>
        <Route path="/ValueDisplayEntered" element={<ValueDisplayEntered/>}/>
        <Route path="/Counter" element={<Counter/>}/>
      </Routes>
    </div>
  )
}

export default App;

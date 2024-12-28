import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeList } from "../src/Transition";

function App() {
  return (
    <div>
      <Routes>
        {Object.entries(routeList).map(([key, value]) => {
              return <Route key={key} path={key} element={value}/>  
        })}
      </Routes>
    </div>
  )
}

export default App;

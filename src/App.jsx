
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Destination from './Destination'
import Crew from './Crew'
import Technology from './Technology'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/destination`} element={<Destination />} />
        <Route path={`/crew`} element={<Crew />} />
        <Route path={`/technology`} element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

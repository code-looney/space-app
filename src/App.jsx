
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        {/* <Route path={`/destination`} element={<Destination />} />  */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

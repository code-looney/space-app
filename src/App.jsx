
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Crew from './components/Crew'
import Destination from './components/Destination'
import Technology from './components/Technology'
import Moon from './components/Moon'
import Mars from './components/Mars'
import Europa from './components/Europa'
import Titan from './components/Titan'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          {/* Redirect /destination to /destination/moon */}
          <Route index element={<Navigate to="moon" replace />} />
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

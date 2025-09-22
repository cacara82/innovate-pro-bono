import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UnderConstruction from './pages/UnderConstruction'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuestra-mision" element={<UnderConstruction />} />
        <Route path="/nuestra-vision" element={<UnderConstruction />} />
        <Route path="/equipo" element={<UnderConstruction />} />
        <Route path="/legal" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UnderConstruction from './pages/UnderConstruction'
import NotFound from './pages/NotFound'
//import Equipo from './pages/Equipo'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuestra-mision" element={<UnderConstruction />} />
        <Route path="/nuestra-vision" element={<UnderConstruction />} />
        <Route path="/equipo" element={<UnderConstruction />} />
        <Route path="/legal" element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
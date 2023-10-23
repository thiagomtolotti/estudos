import Menu from './componentes/Menu'
import Rodape from './componentes/Rodape'
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route  path='/' element={<Inicio />} />
        <Route  path='/sobremim' element={<SobreMim />} />
        <Route  path="*" element={<div>Página não encontrada</div>} />
      </Routes>

	  <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
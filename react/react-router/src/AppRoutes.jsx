import Menu from './componentes/Menu'
import PaginaPadrao from './componentes/PaginaPadrao'
import Rodape from './componentes/Rodape'
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
		<Route path='/' element={<PaginaPadrao />}>
			<Route index element={<Inicio />} />
			<Route path='sobremim' element={<SobreMim />} />
		</Route>
		
        <Route  path="*" element={<div>Página não encontrada</div>} />
      </Routes>

	  <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes

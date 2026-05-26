import { Routes, Route, Link } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import InputLaporan from './pages/InputLaporan'
import Riwayat from './pages/Riwayat'

function App() {
  return (
    <>
      <nav className=' navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className=' container'>

          <Link className=' navbar-brand fw-bold' to={'/'}>PT. MANUFAKTUR JAYA</Link>

          <button className=' navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
            <span className=' navbar-toggler-icon'></span>
          </button>

          <div className=' collapse navbar-collapse' id='navbarNav'>
            <ul className=' navbar-nav ms-auto'>
              <li className=' nav-item'><Link className=' nav-link' to={'/'}>Dashboard</Link></li>
              <li className=' nav-item'><Link className=' nav-link' to={'/input'}>Input Laporan</Link></li>
              <li className=' nav-item'><Link className=' nav-link' to={'/riwayat'}>Riwayat Data</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/input' element={<InputLaporan />}></Route>
        <Route path='/riwayat' element={<Riwayat />}></Route>
      </Routes>
    </>
  )
}

export default App;
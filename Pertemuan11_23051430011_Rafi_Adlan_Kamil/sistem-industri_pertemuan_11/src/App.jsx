import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import DetailInventori from './Halaman/DetailInventori';
import LaporanKualitas from './Halaman/LaporanKualitas';
import NotFound from './Halaman/NotFound';

function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#2c3e50', 
      color: '#fff', 
      display: 'flex', 
      gap: '20px',
      alignItems: 'center' 
    }}>
      <strong style={{ fontSize: '1.2rem', marginRight: 'auto' }}>Pabrik Manager v1.0</strong>
      
      {/* Link Normal */}
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/inventory" style={{ color: '#fff', textDecoration: 'none' }}>Inventori</Link>
      <Link to="/quality" style={{ color: '#fff', textDecoration: 'none' }}>Laporan Kualitas</Link>

      {/* TOMBOL TES ERROR 404 */}
      <Link to="/halaman-yang-tidak-ada" style={{ 
        color: '#ff7675', 
        textDecoration: 'none', 
        border: '1px solid #ff7675', 
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '0.8rem'
      }}>
        Tes Link Rusak (404)
      </Link>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventori />} />
          <Route path="/inventory/:id" element={<DetailInventori />} />
          <Route path="/quality" element={<LaporanKualitas />} />
          
          {/* Route bintang ini yang menangkap link rusak tadi */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
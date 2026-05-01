import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard Utama Pabrik</h1>
      <p>Selamat datang di sistem monitoring terpadu.</p>
      
      <nav>
        <Link to="/inventory" style={{ 
          textDecoration: 'none', 
          color: 'blue', 
          fontWeight: 'bold' 
        }}>
          Ke Halaman Inventori
        </Link>
      </nav>
    </div>
  );
}

export default Dashboard;
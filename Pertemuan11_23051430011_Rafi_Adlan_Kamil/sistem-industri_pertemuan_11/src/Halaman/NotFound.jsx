import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
      <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
      <p style={{ fontSize: '18px' }}>
        Halaman tidak ditemukan dalam sistem pabrik.
      </p>
      <div style={{ marginTop: '20px' }}>
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none', 
            color: '#007bff', 
            fontWeight: 'bold',
            border: '1px solid #007bff',
            padding: '10px 20px',
            borderRadius: '5px'
          }}
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
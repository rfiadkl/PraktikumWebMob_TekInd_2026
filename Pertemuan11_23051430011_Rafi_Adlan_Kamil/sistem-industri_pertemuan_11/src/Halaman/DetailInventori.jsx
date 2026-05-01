import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailInventori() {
  const { id } = useParams();

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <h2>🔍 Detail Item #{id}</h2>
      <p><strong>Status Inspeksi:</strong> Lolos QC</p>
      <p><strong>Lokasi Gudang:</strong> Sektor B-{id}</p>
      <hr />
      <Link to="/inventory">← Kembali ke Daftar Inventori</Link>
    </div>
  );
}

export default DetailInventori;
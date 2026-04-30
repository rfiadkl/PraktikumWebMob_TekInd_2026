import React, { useState } from "react";

function KartuMesin({ nama, status, produksi = 0 }) {
  // Inisialisasi state lokal menggunakan nilai dari props 'status'
  const [statusLokal, setStatusLokal] = useState(status);

  // Logika penentuan warna badge berdasarkan statusLokal
  let badgeColor = 'bg-secondary';
  if (statusLokal === 'Running') badgeColor = 'bg-success';
  if (statusLokal === 'Stop') badgeColor = 'bg-danger';
  if (statusLokal === 'Maintenance') badgeColor = 'bg-warning';

  return (
    <div className="card shadow-sm p-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{nama}</h5>
        <span className={`badge ${badgeColor} mb-2`}>{statusLokal}</span>
        <hr />
        
        <p>Produksi Saat Ini: <strong>{produksi}</strong> Unit</p>
        
        {/* Dropdown untuk mengubah status secara lokal */}
        <div className="mt-3">
          <label className="form-label small">Ubah Status:</label>
          <select 
            className="form-select form-select-sm"
            value={statusLokal}
            onChange={(e) => setStatusLokal(e.target.value)}
          >
            <option value="Running">Running</option>
            <option value="Stop">Stop</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default KartuMesin;
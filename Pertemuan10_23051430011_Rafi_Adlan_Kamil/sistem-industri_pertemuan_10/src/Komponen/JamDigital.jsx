import React, { useState, useEffect } from 'react';

export default function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  const [kota, setKota] = useState("Yogyakarta");

  // Efek untuk update jam tiap detik
  useEffect(() => {
    const timerID = setInterval(() => setWaktu(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  // Efek Latihan 1: Update Judul Tab Browser berdasarkan State 'kota'
  useEffect(() => {
    document.title = `Jam ${kota}`;
  }, [kota]); // Dependency array: efek jalan setiap kali 'kota' berubah

  return (
    <div className="card shadow-sm p-3 bg-white text-dark text-center">
      <div className="card-body">
        <h5>Waktu Lokal: {kota}</h5>
        <h1 className="display-3 fw-bold">{waktu.toLocaleTimeString()}</h1>
        
        <div className="mt-3 mx-auto" style={{ maxWidth: "300px" }}>
          <label className="form-label small">Ganti Lokasi (Update Title Tab):</label>
          <input 
            type="text" 
            className="form-control form-control-sm text-center"
            value={kota}
            onChange={(e) => setKota(e.target.value)}
            placeholder="Masukkan nama kota..."
          />
        </div>
      </div>
    </div>
  );
}
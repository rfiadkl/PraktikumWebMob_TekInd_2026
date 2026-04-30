import React, { useState } from 'react';

export default function CounterProduksi() {
  const [jumlah, setJumlah] = useState(0);
  const [isEmergency, setIsEmergency] = useState(false);

  const handleTambah = () => {
    if (!isEmergency) setJumlah(jumlah + 1);
  };

  return (
    <div className="card shadow-sm p-3">
      <div className="card-body text-center">
        <h3>Counter Produksi</h3>
        
        {/* Latihan 2: Conditional Rendering untuk Pesan Emergency */}
        {isEmergency ? (
          <h1 className="display-1 fw-bold text-danger animate__animated animate__flash infinite">EMERGENCY</h1>
        ) : (
          <h1 className="display-1 fw-bold text-primary">{jumlah}</h1>
        )}

        {isEmergency && (
          <div className="alert alert-danger fw-bold">SISTEM TERKUNCI: Tombol dinonaktifkan!</div>
        )}

        <div className="d-grid gap-2 d-md-block">
          <button 
            className="btn btn-primary btn-lg me-2" 
            onClick={handleTambah}
            disabled={isEmergency} // Latihan 2: Tombol disabled saat Emergency
          >
            +1 Unit
          </button>

          <button 
            className={`btn btn-lg ${isEmergency ? 'btn-success' : 'btn-danger'}`}
            onClick={() => setIsEmergency(!isEmergency)}
          >
            {isEmergency ? "Reset / Aman" : "EMERGENCY STOP"}
          </button>
        </div>
        
        {!isEmergency && (
          <button className="btn btn-link btn-sm mt-3 text-secondary" onClick={() => setJumlah(0)}>
            Reset Count
          </button>
        )}
      </div>
    </div>
  );
}
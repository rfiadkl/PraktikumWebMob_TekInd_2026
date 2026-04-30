import React from 'react';
import JamDigital from './komponen/JamDigital';
import CounterProduksi from './komponen/CounterProduksi';
import KartuMesin from './komponen/KartuMesin';
import KalkulatorOEE from './komponen/KalkulatorOEE';

export default function App() {
  return (
    <div className="container-fluid py-4 bg-secondary-subtle min-vh-100">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-dark">Industrial Monitoring Dashboard</h1>
        
        <div className="row g-4">
          {/* Kolom Kiri: Jam & Info Mesin */}
          <div className="col-lg-4">
            <JamDigital />
            <div className="mt-4">
              {/* Di sini tadi errornya, sekarang sudah saya beri nilai manual agar aman */}
              <KartuMesin 
                nama="Mesin Milling CNC" 
                status="Running" 
                produksi={1250} 
              />
            </div>
          </div>

          {/* Kolom Kanan: Proyek Mini Kalkulator OEE */}
          <div className="col-lg-8">
            <KalkulatorOEE />
          </div>

          {/* Baris Bawah: Latihan State & Event (Counter) */}
          <div className="col-12">
            <CounterProduksi />
          </div>
        </div>
        
        <footer className="mt-5 text-center text-secondary">
          <small>Praktikum Web & Mobile - Teknik Industri 2026</small>
        </footer>
      </div>
    </div>
  );
}
import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './KartuKaryawan';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <h1>Monitoring Lini Produksi A</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        
        <KartuMesin 
          nama="Mesin CNC 01" 
          status="Running" 
          produksi={120} 
        />

        <KartuMesin 
          nama="Mesin Bubut 02" 
          status="Stop" 
        />

        <KartuMesin 
          nama="Mesin Milling 03" 
          status="Maintenance" 
          produksi={50} 
        />

      </div>

      <hr style={{ margin: '30px 0' }} />

      <h1>Data Karyawan</h1>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>

        <KartuKaryawan 
          nama="Rafi Adlan Kamil"
          jabatan="Manager"
          bagian="Produksi"
        />

        <KartuKaryawan 
          nama="Alexandar Agung"
          jabatan="Operator"
          bagian="Mesin"
        />

        <KartuKaryawan 
          nama="Markov Tarkovich"
          jabatan="QC"
          bagian="Quality Control"
        />

      </div>

    </div>
  );
}

export default App;
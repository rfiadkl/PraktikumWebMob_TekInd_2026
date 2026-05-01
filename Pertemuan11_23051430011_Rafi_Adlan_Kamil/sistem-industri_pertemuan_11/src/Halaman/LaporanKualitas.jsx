import React from 'react';

function LaporanKualitas() {
  const dataCacat = [
    { id: 1, produk: "Plastik ABS", jenisCacat: "Warna Pudar", jumlah: 10 },
    { id: 2, produk: "Aluminium", jenisCacat: "Bengkok", jumlah: 3 },
    { id: 3, produk: "Baut Baja", jenisCacat: "Karat", jumlah: 25 },
  ];

  return (
    <div>
      <h2>⚠️ Laporan Kualitas Produk</h2>
      <p>Daftar produk yang tidak memenuhi standar kualitas minggu ini:</p>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#ffeb3b' }}>
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Deskripsi Kerusakan</th>
            <th>Total Cacat</th>
          </tr>
        </thead>
        <tbody>
          {dataCacat.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.produk}</td>
              <td>{item.jenisCacat}</td>
              <td>{item.jumlah} Unit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaporanKualitas;
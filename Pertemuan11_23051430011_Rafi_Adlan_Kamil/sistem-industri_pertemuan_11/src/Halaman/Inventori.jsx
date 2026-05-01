import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 8)); // Ambil 8 data
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3 style={{ textAlign: 'center' }}>🔄 Memuat data sistem...</h3>;

  return (
    <div>
      <h2>📦 Inventori Bahan Baku</h2>
      <table border="1" cellPadding="12" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#ecf0f1' }}>
            <th>ID</th>
            <th>Nama Bahan (Klik untuk Detail)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link to={`/inventory/${item.id}`} style={{ fontWeight: 'bold', color: '#3498db' }}>
                  {item.title.substring(0, 25)}...
                </Link>
              </td>
              <td><span style={{ color: 'green' }}>✓ Tersedia</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventori;
const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
const btnAdd = document.getElementById('btnAdd'); // Memperbaiki nama variabel agar sinkron

// Endpoint API (Simulasi Database)
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// LATIHAN 1 : Tambah Karyawan
btnAdd.addEventListener('click', function() {
    const dataBaru = {
        name: 'Budi Santoso',
        email: 'budi.tech@karyawan.id',
        company: { name: 'PT. Maju Bersama' }
    };

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(dataBaru),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log('Berhasil Menambah Data (Simulasi):', json);
        alert('Karyawan Baru Berhasil Ditambah! Cek Console Browser.');
    })
    .catch((err) => console.error('Gagal POST data:', err));
});

// MEMPERBAIKI Event Listener Load Data
btnLoad.addEventListener('click', function() {
    // Tampilkan loading
    loading.classList.remove('d-none');
    container.innerHTML = ''; // Bersihkan konten lama

    // Fetch Data
    fetch(API_URL)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(function(dataKaryawan) {
            // LATIHAN 2: Filter kota mengandung huruf 's'
            const dataFiltered = dataKaryawan.filter(karyawan => 
                karyawan.address.city.toLowerCase().includes('s')
            );

            console.log("Data Berhasil Dimuat:", dataFiltered);
            renderData(dataFiltered);
        })
        .catch(function(error) {
            container.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
        })
        .finally(function() {
            loading.classList.add('d-none');
        });
});

function renderData(data) {
    data.forEach(function(karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted">Email: ${karyawan.email}</p>
                    <p class="card-text">Perusahaan: ${karyawan.company.name}</p>
                    <p class="card-text"><small>Kota: ${karyawan.address.city}</small></p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Detail Profil</a>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// LANGKAH 4
async function cariKaryawan(id) {
    try {
        console.log(`Mencari data ID: ${id}...`);
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('Data tidak ditemukan');
        const data = await response.json();
        alert(`Ditemukan: ${data.name} - bekerja di ${data.company.name}`);
    } catch (error) {
        alert(error.message);
    }
}


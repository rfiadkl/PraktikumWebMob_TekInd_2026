const btnMuat = document.getElementById('btnMuatInsiden');
const container = document.getElementById('containerInsiden');
const loading = document.getElementById('loading');

const API_POSTS = 'https://jsonplaceholder.typicode.com/posts';

btnMuat.addEventListener('click', async function() {
    // 1. Persiapan Tampilan
    loading.classList.remove('d-none');
    container.innerHTML = '';

    try {
        // 2. Ambil data dari API Posts
        const response = await fetch(API_POSTS);
        if (!response.ok) throw new Error('Gagal menghubungi server');
        
        const data = await response.json();

        // 3. Ambil 10 data pertama saja
        const sepuluhLaporan = data.slice(0, 10);

        // 4. Render ke HTML
        sepuluhLaporan.forEach(insiden => {
            const col = document.createElement('div');
            col.className = 'col-md-6 mb-3';
            col.innerHTML = `
                <div class="card h-100 shadow-sm border-danger">
                    <div class="card-header bg-danger text-white">
                        ID Tiket: # ${insiden.id}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-capitalize">${insiden.title}</h5>
                        <p class="card-text text-secondary">${insiden.body}</p>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <button class="btn btn-warning btn-sm w-100" onclick="prosesTiket(${insiden.id})">
                            Tindak Lanjut
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });

    } catch (error) {
        container.innerHTML = `
            <div class="col-12 alert alert-danger">
                Terjadi kesalahan: ${error.message}
            </div>`;
    } finally {
        // 5. Sembunyikan Loading
        loading.classList.add('d-none');
    }
});

// Fungsi Global untuk Tombol Tindak Lanjut
function prosesTiket(id) {
    alert(`Tiket ID ${id} sedang diproses oleh Tim Maintenance`);
}
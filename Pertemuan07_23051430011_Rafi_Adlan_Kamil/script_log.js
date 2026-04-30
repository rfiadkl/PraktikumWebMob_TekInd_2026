const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');

const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';

// LOAD DATA AWAL
document.addEventListener('DOMContentLoaded', function () {
    loadData();
});

// SUBMIT FORM
formProduksi.addEventListener('submit', function (e) {
    e.preventDefault();

    const tanggal = document.getElementById('tanggal').value;
    const operator = document.getElementById('operator').value;
    const shift = document.getElementById('shift').value;
    const jumlah = document.getElementById('jumlah').value;

    if (jumlah <= 0) {
        alert("Jumlah harus lebih dari 0!");
        return;
    }

    const dataBaru = {
        id: Date.now(),
        tanggal,
        operator,
        shift,
        jumlah: parseInt(jumlah)
    };

    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    data.push(dataBaru);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    formProduksi.reset();
    loadData();
});

// LOAD DATA
function loadData() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    renderTable(data);
}

// RENDER TABLE
function renderTable(data) {
    tabelBody.innerHTML = "";

    data.forEach(item => {
        let row = `
            <tr>
                <td>${item.tanggal}</td>
                <td>${item.operator}</td>
                <td>${item.shift}</td>
                <td>${item.jumlah}</td>
                <td>
                    <button onclick="hapusData(${item.id})" class="btn btn-danger btn-sm">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
        tabelBody.innerHTML += row;
    });
}

// HAPUS DATA
function hapusData(id) {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    let dataBaru = data.filter(item => item.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
    loadData();
}

// HAPUS SEMUA
btnHapusSemua.addEventListener('click', function () {
    if (confirm("Hapus semua data?")) {
        localStorage.removeItem(STORAGE_KEY);
        loadData();
    }
});

// FILTER
document.getElementById('searchOperator').addEventListener('input', function () {
    let keyword = this.value.toLowerCase();
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    let hasil = data.filter(item =>
        item.operator.toLowerCase().includes(keyword)
    );

    renderTable(hasil);
});

// SORT
document.getElementById('btnSort').addEventListener('click', function () {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    data.sort((a, b) => b.jumlah - a.jumlah);

    renderTable(data);
});
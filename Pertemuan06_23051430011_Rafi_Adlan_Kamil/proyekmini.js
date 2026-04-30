const daya = document.getElementById("daya");
const jam = document.getElementById("jam");
const hasil = document.getElementById("hasil");

function hitung() {
    let dy = parseFloat(daya.value) || 0;
    let jm = parseFloat(jam.value) || 0;

    let kwh = (dy * jm) / 1000;
    let biaya = kwh * 1500;

    hasil.innerText = `Total: ${kwh.toFixed(2)} kWh | Biaya: Rp ${biaya}`;
}

daya.addEventListener("input", hitung);
jam.addEventListener("input", hitung);
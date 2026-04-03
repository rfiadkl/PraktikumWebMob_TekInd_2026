const KEY_5S = "DATA_AUDIT_5S";

function simpanAudit() {
    let auditor = document.getElementById("auditor").value;

    if (auditor === "") {
        alert("Nama auditor wajib diisi!");
        return;
    }

    let checklist = [
        document.getElementById("seiri").checked,
        document.getElementById("seiton").checked,
        document.getElementById("seiso").checked,
        document.getElementById("seiketsu").checked,
        document.getElementById("shitsuke").checked
    ];

    let total = checklist.filter(item => item === true).length;
    let skor = (total / 5) * 100;

    let data = {
        tanggal: new Date().toLocaleDateString(),
        auditor: auditor,
        skor: skor
    };

    let dataLama = JSON.parse(localStorage.getItem(KEY_5S)) || [];
    dataLama.push(data);

    localStorage.setItem(KEY_5S, JSON.stringify(dataLama));

    tampilkanAudit();
}

// TAMPILKAN DATA 
function tampilkanAudit() {
    let tabel = document.getElementById("tabelAudit");
    tabel.innerHTML = "";

    let data = JSON.parse(localStorage.getItem(KEY_5S)) || [];

    data.forEach(function(item) {
        let row = `
            <tr>
                <td>${item.tanggal}</td>
                <td>${item.auditor}</td>
                <td>${item.skor}%</td>
            </tr>
        `;
        tabel.innerHTML += row;
    });
}

// load awal
document.addEventListener("DOMContentLoaded", tampilkanAudit);
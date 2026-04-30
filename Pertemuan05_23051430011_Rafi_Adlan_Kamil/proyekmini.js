// a. Membuat Array of Objects
let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling", durasi: 30 },
    { idJob: "J02", namaProses: "Milling", durasi: 25 },
    { idJob: "J03", namaProses: "Turning", durasi: 40 }
];

// b. Function untuk memproses antrian
function prosesAntrian(antrian){

    let output = document.getElementById("output");
    output.innerHTML = "";

    // c. Menampilkan pesan untuk setiap job
    antrian.forEach(function(job){
        let pesan = `Memproses Job ${job.idJob} - ${job.namaProses} selama ${job.durasi} menit`;
        
        let p = document.createElement("p");
        p.textContent = pesan;

        output.appendChild(p);
    });

}

// d. Menjalankan simulasi + menambah job baru
function jalankanSimulasi(){

    // proses antrian awal
    prosesAntrian(antrianMesin);

    // menambah job baru
    antrianMesin.push({
        idJob: "J04",
        namaProses: "Grinding",
        durasi: 20
    });

    let output = document.getElementById("output");

    let info = document.createElement("h3");
    info.textContent = "Job Baru Ditambahkan!";
    output.appendChild(info);

    // panggil function lagi
    prosesAntrian(antrianMesin);
}
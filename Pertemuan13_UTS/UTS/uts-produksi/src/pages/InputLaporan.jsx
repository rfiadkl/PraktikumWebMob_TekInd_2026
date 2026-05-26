import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputLaporan() {
    const navigate = useNavigate()

    const [tanggal, setTanggal] = useState("");
    const [shift, setShift] = useState("Pagi");
    const [mesin, setMesin] = useState("");
    const [produksi, setProduksi] = useState("");
    const [reject, setReject] = useState("");

    const netto = Number(produksi) - Number(reject);

    const yieldValue =
        Number(produksi) > 0 ? (netto / Number(produksi)) * 100 : 0;

    const isValid =
        tanggal !== "" &&
        mesin !== "" &&
        produksi !== "" &&
        reject !== "" &&
        Number(produksi) >= 0 &&
        Number(reject) >= 0 &&
        Number(reject) <= Number(produksi);

    function handleSubmit(event) {
        event.preventDefault();

        const dataLama = JSON.parse(localStorage.getItem("DATA_LAPORAN_PRODUKSI")) || []

        const dataBaru = {
            id: Date.now(),
            tanggal: tanggal,
            shift: shift,
            mesin: mesin,
            produksi: Number(produksi),
            reject: Number(reject),
            netto: netto,
            yield: Number(yieldValue.toFixed(1))
        };

        const dataUpdate = [dataBaru, ...dataLama]

        localStorage.setItem("DATA_LAPORAN_PRODUKSI", JSON.stringify(dataUpdate));

        navigate("/riwayat")
    }

    return (
        <div className=" container mt-4">
            <h2>Input Laporan Produksi</h2>
            <p className=" text-muted">Form Input Laporan Shift Produksi Harian.</p>

            <form className=" card p-4 mt-3 shadow-sm" onSubmit={handleSubmit}>
                <label className=" form-label" htmlFor="inputTanggal">Tanggal</label>
                <input className=" form-control" type="date" name="" id="inputTanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />

                <label className=" form-label" htmlFor="inputShift">Shift</label>
                <select className=" form-control" name="" id="inputShift" value={shift} onChange={(e) => setShift(e.target.value)}>
                    <option value="pagi">Pagi</option>
                    <option value="siang">Siang</option>
                    <option value="malam">Malam</option>
                </select>

                <label className=" form-label" htmlFor="inputNamaMesin">Nama Mesin</label>
                <input className=" form-control" type="text" name="" id="inputNamaMesin" value={mesin} onChange={(e) => setMesin(e.target.value)} />

                <label className=" form-label" htmlFor="inputJumlahProduksi">Jumlah Produksi</label>
                <input className=" form-control" type="number" name="" id="inputJumlahProduksi" value={produksi} onChange={(e) => setProduksi(e.target.value)} />

                <label className=" form-label" htmlFor="inputJumlahReject">Jumlah Reject</label>
                <input className=" form-control" type="number" name="" id="inputJumlahReject" value={reject} onChange={(e) => setReject(e.target.value)} />

                <div className=" text-danger mb-3">Reject tidak boleh lebih besar dari produksi!</div>

                <div className=" alert alert-info">
                    Netto:
                    {""}
                    {isNaN(netto) ? 0 : netto}
                    {" | "}
                    Yield:
                    {""}
                    {yieldValue.toFixed(1)}%
                </div>

                <button className=" btn btn-primary" type="submit" disabled={!isValid}> Simpan Laporan</button>
            </form>
        </div>
    )
}

export default InputLaporan;
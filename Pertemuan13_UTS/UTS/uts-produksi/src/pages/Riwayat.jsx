import { useState } from "react";

function Riwayat() {
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem("DATA_LAPORAN_PRODUKSI")) || [];
    });

    function hapusData(id) {
        const konfirmasi = confirm("Apakah Anda Yakin ingin menghapus data ini?");

        if (konfirmasi) {
            const dataBaru = data.filter((item) => item.id !== id);

            setData(dataBaru);

            localStorage.setItem("DATA_LAPORAN_PRODUKSI", JSON.stringify(dataBaru))
        };
    }

    function hapusDataSemua() {
        const konfirmasi = confirm("Apakah anda Yakin ingin menghapus semua data");

        if (konfirmasi) {
            setData([]);

            localStorage.removeItem("DATA_LAPORAN_PRODUKSI")
        }
    }


    return (
        <div className=" container mt-4">
            <h2>Riwayat Data Produksi</h2>
            <p className=" text-muted">Data terbaru akan muncul dibaris paling atas</p>

            <button className=" btn btn-danger mt-3" onClick={hapusDataSemua}>Hapus Semua Data</button>
            <div className=" table-responsive mt-3">
                <table className=" table table-bordered table-striped table-hover">
                    <thead className=" table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Tanggal</th>
                            <th>Shift</th>
                            <th>Mesin</th>
                            <th>Produksi</th>
                            <th>Reject</th>
                            <th>Netto</th>
                            <th>Yield</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan='9' className=" text-center">Belum ada data produksi</td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr key={item.id} className={item.shift === "malam" ? " table-warning" : ""} >
                                    <td>{item.id}</td>
                                    <td>{item.tanggal}</td>
                                    <td>{item.shift}</td>
                                    <td>{item.mesin}</td>
                                    <td>{item.produksi}</td>
                                    <td>{item.reject}</td>
                                    <td>{item.netto}</td>
                                    <td>{item.yield}%</td>
                                    <td><button className=" btn btn-sm btn-danger" onClick={() => hapusData(item.id)}>Hapus</button></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Riwayat;
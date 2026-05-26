import { useState } from "react";

function Dashboard() {
    const [data] = useState(() => {
        return JSON.parse(localStorage.getItem("DATA_LAPORAN_PRODUKSI")) || [];
    });

    const totalProduksi = data.reduce(
        (total, item) => total + item.produksi, 0
    );

    const totalReject = data.reduce(
        (total, item) => total + item.reject, 0
    );

    const totalNetto = data.reduce(
        (total, item) => total + item.netto, 0
    );

    const avgYield = data.length > 0 ? data.reduce((total, item) => total + item.yield, 0) / data.length : 0;

    return (
        <div className=" container mt-4">
            <h2>Dashboard Produksi</h2>
            <p className=" text-muted">Ringkasan Performa Produksi Harian PT.MANUFAKTUR JAYA Berdasarkan data laporan yang tersimpan</p>

            <div className=" row mt-4">
                <div className=" col-md-4 mb-3">
                    <div className=" card bg-primary text-white shadow-sm">
                        <div className=" card-body">
                            <h5>Total Produksi</h5>
                            <h2 className=" text-white">{totalProduksi}</h2>
                        </div>
                    </div>
                </div>

                <div className=" col-md-4 mb-3">
                    <div className=" card bg-danger text-white shadow-sm">
                        <div className=" card-body">
                            <h5>Total Reject</h5>
                            <h2 className=" text-white">{totalReject}</h2>
                        </div>
                    </div>
                </div>

                <div className=" col-md-4 mb-3">
                    <div className=" card bg-warning text-white shadow-sm">
                        <div className=" card-body">
                            <h5>Yield</h5>
                            <h2 className=" text-white">{avgYield.toFixed(1)}%</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
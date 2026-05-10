import React from 'react'

import Sidebar from '../Komponen/Sidebar'
import GrafikProduksi from '../Komponen/GrafikProduksi'
import GrafikDonat from '../Komponen/GrafikDonat'
import TabelProduksi from '../Komponen/TabelProduksi'

function Dashboard() {

  return (

    <div className="container-fluid">

      <div className="row">

        {/* Sidebar */}

        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}

        <div className="col-md-10 p-4 bg-light min-vh-100">

          {/* Header */}

          <div className="d-flex justify-content-between align-items-center mb-4">

            <div>
              <h2>Dashboard Produksi</h2>
              <p className="text-muted">
                Monitoring Smart Factory
              </p>
            </div>

            <div>
              <strong>User:</strong> Rafi
            </div>

          </div>

          {/* Grafik */}

          <div className="row mb-4">

            <div className="col-md-8">

              <div className="card shadow-sm">

                <div className="card-body">

                  <GrafikProduksi />

                </div>

              </div>

            </div>

            <div className="col-md-4">

              <div className="card shadow-sm">

                <div className="card-body">

                  <h5 className="mb-3">
                    Proporsi Cacat
                  </h5>

                  <GrafikDonat />

                </div>

              </div>

            </div>

          </div>

          {/* Tabel */}

          <div className="row">

            <div className="col-12">

              <TabelProduksi />

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Dashboard
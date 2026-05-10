import React from 'react'

function TabelProduksi() {

  const data = [

    {
      mesin: 'CNC-01',
      output: 320,
      status: 'Running',
    },

    {
      mesin: 'CNC-02',
      output: 310,
      status: 'Running',
    },

    {
      mesin: 'PRESS-01',
      output: 150,
      status: 'Stop',
    },

    {
      mesin: 'WELD-04',
      output: 0,
      status: 'Maintenance',
    },

  ]

  return (

    <div className="card shadow-sm">

      <div className="card-body">

        <h5 className="mb-3">
          Tabel Produksi Mesin
        </h5>

        <table className="table table-striped">

          <thead>

            <tr>
              <th>Nama Mesin</th>
              <th>Output</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {data.map((item, index) => (

              <tr key={index}>

                <td>{item.mesin}</td>

                <td>{item.output}</td>

                <td>{item.status}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )
}

export default TabelProduksi
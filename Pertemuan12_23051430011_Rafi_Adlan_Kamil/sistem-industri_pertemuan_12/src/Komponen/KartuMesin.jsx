import React from 'react'

function KartuMesin(props) {

  let warna = 'secondary'

  if (props.status === 'Running') {
    warna = 'success'
  }

  else if (props.status === 'Stop') {
    warna = 'danger'
  }

  else if (props.status === 'Maintenance') {
    warna = 'warning'
  }

  return (
    <div className="card shadow-sm mb-3">

      <div className="card-body">

        <h5>{props.nama}</h5>

        <span className={`badge bg-${warna}`}>
          {props.status}
        </span>

        <hr />

        <p>
          Produksi:
          <strong> {props.produksi} Unit</strong>
        </p>

      </div>

    </div>
  )
}

export default KartuMesin
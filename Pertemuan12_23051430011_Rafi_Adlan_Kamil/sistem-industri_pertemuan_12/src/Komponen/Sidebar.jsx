import React from 'react'

import {
  FaTachometerAlt,
  FaBoxes,
  FaFileAlt,
} from 'react-icons/fa'

function Sidebar() {

  return (

    <div
      className="
      bg-dark
      text-white
      p-3
      min-vh-100
      "
    >

      <h3 className="mb-4">
        Smart Factory
      </h3>

      <ul className="list-unstyled">

        <li className="mb-4">
          <FaTachometerAlt className="me-2" />
          Dashboard
        </li>

        <li className="mb-4">
          <FaBoxes className="me-2" />
          Inventori
        </li>

        <li className="mb-4">
          <FaFileAlt className="me-2" />
          Laporan
        </li>

      </ul>

    </div>

  )
}

export default Sidebar
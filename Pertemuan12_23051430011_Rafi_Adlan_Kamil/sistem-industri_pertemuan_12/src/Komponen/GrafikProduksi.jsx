import React, { useEffect, useState } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

function GrafikProduksi() {

  // State untuk menyimpan data produksi
  const [dataProduksi, setDataProduksi] = useState([])

  // Simulasi fetch data dari server
  useEffect(() => {

    const dataDummy = [
      120,
      150,
      180,
      170,
      200,
      210,
    ]

    // Delay 1 detik
    setTimeout(() => {
      setDataProduksi(dataDummy)
    }, 1000)

  }, [])

  const data = {

    labels: [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
    ],

    datasets: [

      {
        label: 'Jumlah Produksi',

        data: dataProduksi,

        backgroundColor: 'rgba(54, 162, 235, 0.5)',

        borderColor: 'rgba(54, 162, 235, 1)',

        borderWidth: 1,
      },

      {
        label: 'Target',

        data: [
          150,
          150,
          150,
          150,
          150,
          150,
        ],

        type: 'line',

        borderColor: 'red',

        borderWidth: 2,
      },

    ],
  }

  const options = {

    responsive: true,

    plugins: {

      legend: {
        position: 'top',
      },

      title: {
        display: true,
        text: 'Grafik Produksi Harian',
      },

    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },

  }

  return (
    <Bar
      data={data}
      options={options}
    />
  )
}

export default GrafikProduksi
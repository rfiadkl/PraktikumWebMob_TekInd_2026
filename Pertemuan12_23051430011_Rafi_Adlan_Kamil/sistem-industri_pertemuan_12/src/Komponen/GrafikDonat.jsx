import React from 'react'

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

function GrafikDonat() {

  const data = {

    labels: [
      'Scratch',
      'Dent',
      'Lainnya',
    ],

    datasets: [
      {

        label: 'Proporsi Cacat',

        data: [
          50,
          30,
          20,
        ],

        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffce56',
        ],

        borderWidth: 1,

      },
    ],
  }

  return (
    <Doughnut data={data} />
  )
}

export default GrafikDonat
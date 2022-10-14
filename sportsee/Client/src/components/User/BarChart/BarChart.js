import './BarChart.scss'
import React from 'react'
import {  BarChart,  Bar,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Legend } from 'recharts'

const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
const options = {
  maintainAspectRatio: false, //fits the size of the parent div
  barValueSpacing: 50,
  //legend is the litle info box in top right of the chart
  legend: {
    align: 'end',
    position: 'top',
    labels: {
      usePointStyle: true,
      padding: 20,
    },
  },
  //tooltip is the little info box wich show on the hower
  tooltips: {
    mode: 'label',
    displayColors: true,
    callbacks: {
      label: function (t, d) {
        var yLabel = t.yLabel
        const color = d.datasets[t.datasetIndex].backgroundColor
        const kgOrCalories = color === 'black' ? 'Kg' : 'Calories'
        return yLabel + ' ' + kgOrCalories
      },
      title: function () {}, // hides the tittle of the tooltip
    },
    backgroundColor: 'red',
  },
  scales: {
    yAxes: [
      {
        position: 'right',
        ticks: {
          min: 5, //it is the number at wich vertical numbers will start
          stepSize: 150, //it's the sâce bettwen numbers in vertical bar
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        barPercentage: 0.4,
      },
    ],
  },
}

export default function App(options) {
  return (
    <BarChart
      width={835}
      height={320}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#282D30" />
      <Bar dataKey="uv" fill="#E60000" />
    </BarChart>
  )
}

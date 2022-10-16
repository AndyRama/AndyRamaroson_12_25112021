import './BarChart.scss'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const data = [
  {
    name: '1',
    Calories: 4000,
    poids: 2400,
    amt: 2400,
  },
  {
    name: '2',
    Calories: 3000,
    poids: 1398,
    amt: 2210,
  },
  {
    name: '3',
    Calories: 2000,
    poids: 9800,
    amt: 2290,
  },
  {
    name: '4',
    Calories: 2780,
    poids: 3908,
    amt: 2000,
  },
  {
    name: '5',
    Calories: 1890,
    poids: 4800,
    amt: 2181,
  },
  {
    name: '6',
    Calories: 2390,
    poids: 3800,
    amt: 2500,
  },
  {
    name: '7',
    Calories: 3490,
    poids: 4300,
    amt: 2100,
  },
]

export default function Layout() {
  return (
    
    <BarChart
    width={835}
    height={320}
    data={data}
    // margin={{
      //   top: 10,
      //   right: 0,
      //   left: 20,
      //   bottom: 5,
      // }}
      >
    <CartesianGrid strokeDasharray= "" />
    <Legend
      width={'60%'}
      iconType={'circle'}
      iconSize={'8px'}
      wrapperStyle={{
        top: '-15%',
        right: '16px',
        lineHeight: '40px',
      }}
    />
    <XAxis dataKey="name" stroke="grey" tickLine={false} dy={10}/>
    <YAxis
      domain={['dataMin -2', 'dataMax + 1']}
      orientation="right"
      axisLine={false}
      tickLine={false}
      dx={10}
      dy={-3}
    />
    <Tooltip />
    <Bar
      dataKey="poids"
      name=" Poids (kg)"
      fill="black"
      barSize={8}
      radius={[50, 50, 0, 0]}
    />
    <Bar
      dataKey="Calories"
      name=" Calories brûlées (kCal)"
      fill="red"
      barSize={8}
      radius={[50, 50, 0, 0]}
    />
    </BarChart>
  )
}

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const data = [
  {
    name: '1',
    calories: 4000,
    poids: 2400,
    amt: 2400,
  },
  {
    name: '2',
    calories: 3000,
    poids: 1398,
    amt: 2210,
  },
  {
    name: '3',
    calories: 2000,
    poids: 2800,
    amt: 2290,
  },
  {
    name: '4',
    calories: 2780,
    poids: 3908,
    amt: 2000,
  },
  {
    name: '5',
    calories: 1890,
    poids: 4800,
    amt: 2181,
  },
  {
    name: '6',
    calories: 2390,
    poids: 3800,
    amt: 2500,
  },
  {
    name: '7',
    calories: 3490,
    poids: 4300,
    amt: 2100,
  },
  {
    name: '8',
    calories: 1890,
    poids: 4800,
    amt: 2181,
  },
  {
    name: '9',
    calories: 2390,
    poids: 3800,
    amt: 2500,
  },
  {
    name: '10',
    calories: 3490,
    poids: 4300,
    amt: 2100,
  },
]

export default function Layout() {
  return (
    <BarChart
      width={900}
      height={320}
      data={data}
    >
    <CartesianGrid strokeDasharray="" />
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
      <XAxis 
        dataKey="name" 
        stroke="grey" 
        tickLine={false} 
        dy={10} 
      />
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
        barSize={10}
        radius={[50, 50, 0, 0]}
      />
      <Bar
        dataKey="calories"
        name=" Calories brûlées (kCal)"
        fill="red"
        barSize={10}
        radius={[50, 50, 0, 0]}
      />
    </BarChart>
  )
}

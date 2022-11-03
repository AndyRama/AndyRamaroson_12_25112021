import React, { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  CustomTooltip,
} from 'recharts'
import { formaDataActivity } from '../../../formater/Activity'
import './Activity.scss'

function Activity({ data }) {
  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataActivity(data)
      // console.log(dataFormated);
      setActivityData(dataFormated)
    }
    load()
  }, [data])

  return (
    <ResponsiveContainer width={835} height={320}>
      <BarChart data={activityData} barGap={8}>
        <Legend
          width={'45%'}
          iconType={'circle'}
          iconSize={'8px'}
          wrapperStyle={{
            top: '-15%',
            right: '-35px',
            lineHeight: '40px',
          }}
        />
        <XAxis
          datakey="day"
          stroke="grey"
          tickLine={false}
          // dy={8}
        />
        <YAxis
          yAxisId="poids"
          datakey="kilogram"
          domain={['dataMin -2', 'dataMax + 1']}
          orientation="right"
          axisLine={false}
          tickLine={false}
          dx={10}
          dy={-4}
        />
        <YAxis
          yAxisId="calories"
          data="calories"
          domain={['dataMin -20', 'dataMax + 20']}
          orientation="none"
          axisLine={false}
          tickLine={false}
          dx={10}
          dy={-25}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid strokeDasharray="2 2 " stroke="#ccc" vertical={false} />
        <Bar
          yAxisId="calories"
          name="Calories brûlées (kCal)"
          dataKey="calories"
          fill="red"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="poids"
          name="Poids (kg)"
          dataKey="kilogram"
          fill="black"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
  function CustomTooltip({ active, payload }) {
    return active && payload ? (
      <ul className="custom-tooltip">
        <li className="custom-tooltip--calories">{`${payload[1].value} kg`}</li>
        <li className="custom-tooltip--poids">{`${payload[0].value} kCal`}</li>
      </ul>
    ) : null
  }
}

export default Activity

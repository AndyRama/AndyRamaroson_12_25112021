import React, { useEffect, useState } from 'react'
import { formaDataAverage } from '../../../formater/Average'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

/**
 * Render Average component
 * @function Average
 * @param   {object} props.data > data come from service
 * @param   {object} formaDataAverage > data.sessions formated
 * @param   {object} AverageData > formated data injected in chart2
 * @returns {Reactnode} jsx injected in DOM
 */

function Average({ data }) {
  const [averageData, setAverageData] = useState([])

  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataAverage(data)
      setAverageData(dataFormated)
    }
    load()
  }, [data])

  return (
    <ResponsiveContainer width={263} height={258}>
      <LineChart
        data={averageData}
        margin={{ top: 0, right: 15, left: 15, bottom: 15 }}
      >
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.7)"
          axisLine={false}
          tickLine={false}
          dx={-1}
          dy={3}
        />
        <YAxis
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.11)"
          hide={true}
          domain={[0, 'dataMax + 75']}
        />
        <Line
          dataKey="sessionLength"
          type="monotone"
          stroke="#FFFFFF"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: 'rgba(255,255,255, 0.6)',
            strokeWidth: 2,
            r: 5,
          }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: 'rgba(255,255,255, 0.6)' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

/**
 * Render CustomTooltip component
 * @function CustomTooltip
 * @param {array} payload > data to display
 * @returns {Reactnode} jsx injected in DOM
 */

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <span className="custom-tooltip--min">{`${payload[0].value} min`}</span>
    )
  }
  return null
}

/**
 * PropTypes Average component
 */

export default Average

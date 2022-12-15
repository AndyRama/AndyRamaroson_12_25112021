import React, { useEffect, useState } from 'react'
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts'
import { formaDataPerformance } from '../../../formater/Performance'

/**
 * Render Performance component
 * @function Performance
 * @param   {object} data - Data come from getPerformance(id) in service Api
 * @param   {string} data.day - The day the performance was recorded.
 * @param   {number} data.calories - The number of calories burned during the performance.
 * @param   {number} data.kilogram - The weight recorded during the performance.
 * @param   {object} FormaDataPerformance - data.sessions after formated
 * @param   {object} PerformanceData - data formated injected in chart 1
 * @returns {Reactnode} jsx injected in DOM
 */

function Performance({ data }) {
  const [performanceData, setPerformanceData] = useState([])

  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataPerformance(data)
      setPerformanceData(dataFormated)
    }
    load()
  }, [data])

  return (
    <ResponsiveContainer>
      <RadarChart
        cx={130}
        cy={130}
        outerRadius={80}
        data={performanceData}
        fil="white"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="label"
          stroke="white"
          line-stroke="none"
          tickLine={false}
          dy={-1}
          dx={-3}
          tick={{ fontSize: 16 }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default Performance

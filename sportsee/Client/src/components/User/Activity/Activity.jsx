import React, { useEffect, useState } from 'react'
import { formaDataActivity } from '../../../formater/Activity'
import './Activity.scss'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

/**
 * Render Activity component
 * @function Activity
 * @param {number} userId > user id number
 * @param {object} props.data > user data
 * @returns {Reactnode} jsx injected in DOM
 */

function Activity({ data }) {
  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataActivity(data)
      console.log(dataFormated)
      setActivityData(dataFormated)
    }
    load()
  }, [data])

  return (
    <ResponsiveContainer className="resp-container">
      <BarChart data={activityData} barGap={8}>
        <Legend
          width={'45%'}
          iconType={'circle'}
          iconSize={'8px'}
          wrapperStyle={{
            top: '-16%',
            right: '-35px',
            lineHeight: '40px',
          }}
        />
        <XAxis dataKey="day" stroke="grey" tickLine={false} dy={10} />
        <YAxis
          yAxisId="poids"
          dataKey="kilogram"
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
          domain={['dataMin - 20', 'dataMax + 20']}
          orientation="none"
          axisLine={false}
          tickLine={false}
          dx={10}
          dy={-25}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid strokeDasharray="3 3 " stroke="#ccc" vertical={false} />
        <Bar
          yAxisId="poids"
          name="Poids (kg)"
          dataKey="kilogram"
          fill="#282D30"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          className="legend"
          yAxisId="calories"
          name="Calories brûlées (kCal)"
          dataKey="calories"
          fill="#E60000"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )

  /**
   * Render CustomTooltip component
   * @function CustomTooltip
   * @param {array} payload > data to display
   * @returns {JSX}
   */

  function CustomTooltip({ active, payload }) {
    return active && payload ? (
      <ul className="custom-tooltip">
        <li className="custom-tooltip--calories">{`${payload[1].value} kCal`}</li>
        <li className="custom-tooltip--poids">{`${payload[0].value} kg`}</li>
      </ul>
    ) : null
  }
}

/**
 * PropTypes Activity component
 */

export default Activity

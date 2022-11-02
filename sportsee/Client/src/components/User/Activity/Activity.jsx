import React, { useEffect, useState } from 'react'
import {  BarChart,  Bar,  XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts'
import { formaDataActivity } from '../../../formater/Activity'
// import "./Activity.scss"

function Activity({data}) {
  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataActivity(data)
      // console.log(dataFormated);
      setActivityData(dataFormated)
    }
    load()
  }, [data]);

  return (
    <ResponsiveContainer width={835} height={320} >
      <BarChart data={activityData} barGap={8} >
        <Legend
          width={'53%'}
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
          dy={10} />
        <YAxis
          data="kilogram"
          domain={['dataMin -2', 'dataMax + 1']}
          orientation="right"
          axisLine={false}
          tickLine={false}
          dx={10}
          dy={-1}
        />
        <YAxis
          data="calories"
          domain={['dataMin -2', 'dataMax + 1']}
          orientation="right"
          axisLine={false}
          tickLine={false}
          dx={10}
          dy={-4}
        />
        <Tooltip
           wrapperStyle={{ width: 130 }}
         />
         <CartesianGrid stroke="#ccc" vertical={false} />
        <Bar
          dataKey="kilogram"
          name=" Poids (kg)"
          fill="black"
          barSize={5}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          dataKey="calories"
          name=" Calories brûlées (kCal)"
          fill="red"
          barSize={5}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Activity

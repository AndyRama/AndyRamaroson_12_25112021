import React ,{ useEffect,useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { formaDataActivity } from '../../formater/Activity';

function Activity({data}) {
  
  const [activityData,setActivityData] = useState([])

  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataActivity(data)
      setActivityData(dataFormated)
    }
    load()
  }, [data]); 
  
  return (
    <BarChart
      width={900}
      height={320}
      data={activityData}
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
        dataKey="day" 
        stroke="grey" 
        tickLine={false} 
        dy={10} 
        />
      <YAxis
        domain={['dataMin 0', 'dataMax + 1']}
        orientation="right"
        axisLine={false}
        tickLine={false}
        dx={10}
        dy={0}
        />
      <Tooltip />
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
  )
}
    
export default Activity;

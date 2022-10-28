import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart,  Line,  XAxis} from "recharts";
import { formaDataAverage } from '../../formater/Average';

function Average({data}) {

  const [averageData,setAverageData] = useState([])
  // const day = ['L','M','M','J','V','S','D']

  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataAverage(data)
      setAverageData(dataFormated)
    }
    load()
  }, [data]);
     
    return (
      <ResponsiveContainer  width={258} height={263}>
        <LineChart
          data={averageData} >
          <XAxis 
            dataKey= "day"
            stroke="#FFFFFF" 
            axisLine={false}
            tickLine={false}
            dx={5}
            dy={0}
            />          
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            activeDot={{ r: 10}}
            cx={-5}
            />
        </LineChart>
    </ResponsiveContainer>
  );
}

export default Average;
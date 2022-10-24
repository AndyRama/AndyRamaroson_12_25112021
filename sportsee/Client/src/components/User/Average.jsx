import React, { useEffect, useState } from 'react'
import {  LineChart,  Line,  XAxis} from "recharts";
import { formaDataAverage } from '../../formater/Average';

function Average({data}) {
  const [averageData,setAverageData] = useState([])

  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataAverage(data)
      setAverageData(dataFormated)
    }
    load()
  }, [data]);
     
    return (
      <LineChart
        width={263}
        height={258}
        data={averageData}
      >

      <XAxis 
        dataKey="day" 
        stroke="#FFFFFF" 
        axisLine 
      />
      
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#FFFFFF"
        activeDot={{ r: 8}}
      />
    </LineChart>
  );
}

export default Average;

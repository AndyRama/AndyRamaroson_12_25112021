import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, Radar,  RadarChart,  PolarGrid,  PolarAngleAxis} from "recharts";
import { formaDataPerformance } from '../../../formater/Performance';

function Performance({data}) {
  
  const [performanceData,setPerformanceData] = useState([])
  
  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataPerformance(data)
      setPerformanceData(dataFormated)
      // console.log(dataFormated); DATA oK
    }
    load()
  }, [data]);

  return (    
    <ResponsiveContainer >
      <RadarChart
        cx={125}
        cy={130}
        outerRadius={80}    
        data={performanceData}
        fil="white"  
        >
        <PolarGrid />
        <PolarAngleAxis 
          dataKey="label" 
          stroke="white"
          tickLine={false}
          domain={[0, 250]}
          dy={3}
          dx={0}
        />
        <Radar
          dataKey="value"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default Performance;
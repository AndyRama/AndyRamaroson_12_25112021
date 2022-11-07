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
        <PolarGrid 
        line-stroke="none"
        />
        <PolarAngleAxis 
          dataKey="label" 
          stroke="white"
          line-stroke="none"
          tickLine={false}
          domain={[0, 250]}
          dy={0}
          dx={3}
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
import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, Radar,  RadarChart,  PolarGrid,  PolarAngleAxis} from "recharts";
import { formaDataPerformance } from '../../../formater/Performance';
import './Performance.scss'

// const data = [
//   {
//     subject: "Intensité",
//     A: 120,
//     B: 110,
//     fullMark: 150
//   },
//   {
//     subject: "Vitesse",
//     A: 98,
//     B: 130,
//     fullMark: 150
//   },
//   {
//     subject: "Force",
//     A: 86,
//     B: 130,
//     fullMark: 150
//   },
//   {
//     subject: "Endurance",
//     A: 99,
//     B: 100,
//     fullMark: 150
//   },
//   {
//     subject: "Energie",
//     A: 85,
//     B: 90,
//     fullMark: 150
//   },
//   {
//     subject: "Cardio",
//     A: 65,
//     B: 85,
//     fullMark: 150
//   }
// ];

function Performance({data}) {
  
  const [performanceData,setPerformanceData] = useState([])
  
  useEffect(() => {
    async function load() {
      const dataFormated = await formaDataPerformance(data)
      setPerformanceData(dataFormated)
    }
    load()
  }, [data]);

  return (    
    <ResponsiveContainer >
      <RadarChart
        cx={130}
        cy={130}
        outerRadius={80}    
        data={performanceData}
        fil="white"
        >
        <PolarGrid />
        <PolarAngleAxis dataKey="label" stroke="white"/>
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
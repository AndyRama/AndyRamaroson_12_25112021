import React from "react";
import { ResponsiveContainer, Radar,  RadarChart,  PolarGrid,  PolarAngleAxis} from "recharts";
import './Performance.scss'

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Endurance",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "Cardio",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

function Performance() {
  return (    
    <ResponsiveContainer >
      <RadarChart
        cx={130}
        cy={130}
        outerRadius={80}    
        data={data}
        fil="white"
        >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="white"/>
        <Radar
          dataKey="A"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default Performance;
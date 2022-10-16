import React from "react";
import {  Radar,  RadarChart,  PolarGrid,  PolarAngleAxis } from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

export default function Layout() {
  return (
    <RadarChart
      // cx={300}
      // cy={250}
      // outerRadius={150}
      width={263}
      height={258}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar
        name="Mike"
        dataKey="A"
        // stroke="#8884d8"
        fill="red"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
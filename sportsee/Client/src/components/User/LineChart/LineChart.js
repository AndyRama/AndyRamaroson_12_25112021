import "./LineChart.scss";
import React from "react";
import {  LineChart,  Line,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Legend } from "recharts";



function LineMap() {
  const data = [
    {
      name: "1",
      pv: 2400,
      amt: 2400
    },
    {
      name: "1",
      pv: 1398,
      amt: 2210
    },
    {
      name: "1",
      pv: 9800,
      amt: 2290
    },
    {
      name: "1",
      pv: 3908,
      amt: 2000
    },
    {
      name: "1",
      pv: 4800,
      amt: 2181
    },
    {
      name: "1",
      pv: 3800,
      amt: 2500
    },
    {
      name: "1",
      pv: 4300,
      amt: 2100
    }
  ];

  return (
    <LineChart
      width={300}
      height={263}
      data={data}
      // margin={{
      //   top: 5,
      //   right: 30,
      //   left: 20,
      //   bottom: 5
      // }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default LineMap;

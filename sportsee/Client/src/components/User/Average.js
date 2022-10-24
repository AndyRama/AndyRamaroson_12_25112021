import React from "react";
import {  LineChart,  Line,  XAxis} from "recharts";

function Average() {
  const data = [
    {
      name: "L",
      pv: 2400,
      amt: 2400
    },
    {
      name: "M",
      pv: 1398,
      amt: 2210
    },
    {
      name: "M",
      pv: 9800,
      amt: 2290
    },
    {
      name: "J",
      pv: 3908,
      amt: 2000
    },
    {
      name: "V",
      pv: 4800,
      amt: 2181
    },
    {
      name: "S",
      pv: 3800,
      amt: 2500
    },
    {
      name: "D",
      pv: 4300,
      amt: 2100
    }
  ];

  return (
    <LineChart
      width={263}
      height={258}
      data={data}
      // margin={{
      //   top: 5,
      //   right: 30,
      //   left: 20,
      //   bottom: 5
      // }}
    >

      <XAxis dataKey="name"  stroke="#FFFFFF" axisLine />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#FFFFFF"
        activeDot={{ r: 8}}
      />
    </LineChart>
  );
}

export default Average;

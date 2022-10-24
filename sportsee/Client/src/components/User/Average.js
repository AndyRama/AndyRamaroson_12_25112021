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
  });
  // const data = [
  //   {
  //     day: "L",
  //     sessionLength: 30,
  //   },
  //   {
  //     day: "M",
  //     sessionLength: 23,
  //   },
  //   {
  //     day: "M",
  //     sessionLength: 45,
  //   },
  //   {
  //     day: "J",
  //     sessionLength: 50,
  //   },
  //   {
  //     day: "V",
  //     sessionLength: 0,
  //   },
  //   {
  //     day: "S",
  //     sessionLength: 0,
  //   },
  //   {
  //     day: "D",
  //     sessionLength: 60,
  //   }
  // ];

    
    return (
      <LineChart
        width={263}
        height={258}
        data={averageData}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5
        // }}
      >

      <XAxis data="day"  stroke="#FFFFFF" axisLine />
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

import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart,  Line,  XAxis, YAxis, Tooltip} from "recharts";
import { formaDataAverage } from '../../../formater/Average';

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
      <ResponsiveContainer  width={258} height={263}>
        <LineChart 
          data={averageData}
 
          margin={{ top: 0, right: 20, left: 20, bottom: 20 }}
          >
          <XAxis 
          dataKey= "day"
          stroke="rgba(255, 255, 255, 0.7)"
          axisLine={false}
          tickLine={false}
          dx={-1}
          dy={3}
          />
          <YAxis
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.11)"
            hide={true}
            domain={[0, 'dataMax + 75']}
          />          
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255, 0.6)',
              strokeWidth: 10,
              r: 5,
            }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: 'rgba(255,255,255, 0.6)' }}
            />
        </LineChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <span className="custom-tooltip--min">{`${payload[0].value} min`}</span>
    );
  }
  return null;
}

export default Average;

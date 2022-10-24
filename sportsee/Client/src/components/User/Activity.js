import React ,{ useState } from 'react'
import { getActivity } from "./../../service/Activity";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const data = [ 
  {
  "day": "2020-07-01",
  "kilogram": 80,
  "calories": 240
  },
  { 
  "day": "2020-07-02",
  "kilogram": 80,
  "calories": 220
  },
  { 
  "day": "2020-07-03",
  "kilogram": 81,
  "calories": 280
  },
  { 
  "day": "2020-07-04",
  "kilogram": 81,
  "calories": 290
  },
  { 
  "day": "2020-07-05",
  "kilogram": 80,
  "calories": 160 
  },
  { 
    "day": "2020-07-06",
    "kilogram": 78,
    "calories": 162
  },
  {
    "day": "2020-07-07",
    "kilogram": 76,
    "calories": 390
  }
]

class Activity extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }
  
  async componentDidMount() {
    const data = await getActivity(18)
    console.log({data})
    this.setState({data})

    const day = data.sessions.map(elt => elt.day)
    const kg = data.sessions.map(elt => elt.kilogram)
    const cal = data.sessions.map(elt => elt.calories)

      
    console.log(day);
    console.log(kg);
    console.log(cal);
    
  }
    
  render() {  
    
    return (
      <BarChart
        width={900}
        height={320}
        data={data}
        >
        <CartesianGrid strokeDasharray="" />
        <Legend
          width={'60%'}
          iconType={'circle'}
          iconSize={'8px'}
          wrapperStyle={{
            top: '-15%',
            right: '16px',
            lineHeight: '40px',
          }}
        />
        <XAxis 
          dataKey={"day"} 
          stroke="grey" 
          tickLine={false} 
          dy={10} 
          />
        <YAxis
          domain={['dataMin 0', 'dataMax + 1']}
          orientation="right"
          axisLine={false}
          tickLine={false}
          dx={10}
          dy={0}
          />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          name=" Poids (kg)"
          fill="black"
          barSize={5}
          radius={[50, 50, 0, 0]}
          />
        <Bar
          dataKey="calories"
          name=" Calories brûlées (kCal)"
          fill="red"
          barSize={5}
          radius={[50, 50, 0, 0]}
          />
      </BarChart>
    )
  }
}

export default Activity

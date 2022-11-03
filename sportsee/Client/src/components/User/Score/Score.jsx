import React,{ useState,useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getUser } from "../../../service/User";
import "./Score.scss";

const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];

 function Score() { 

  const [user, setUser] = useState({});

  useEffect(() => {
    async function load() {
       const userData = await getUser(18)
       setUser(userData)
      }
    load()
  }, []);

  console.log(user);
  return (
    <div className="score">
      <h2 className="score-title">Score</h2>
      <p className="score-result">{user.score * 100}%</p>
      <p className="score-comment">de votre <br />objectif</p>
      <ResponsiveContainer>
        <PieChart >
          <Pie
            data={data01}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90} // centre haut
            endAngle={450} // 360° + 90°
            fill="transparent"
            stroke="transparent"
            animationDuration={700}
            >
            <Cell fill="red" cornerRadius={50} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
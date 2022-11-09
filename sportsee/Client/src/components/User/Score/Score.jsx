import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import "./Score.scss";

const data01 = [
  {
    "name": "score1",
    "value": 300
  },
  {
    "name": "score2",
    "value": 700
  }
];

 function Score({data}) { 

  return (
    <div className="score">
      <h2 className="score-title">Score</h2>
      <p className="score-result">{data} %</p>
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
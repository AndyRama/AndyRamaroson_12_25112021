import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import "./Score.scss";

 function Score({data}) { 

  const userScore = [{value: data},{value: 100 - data}]
  
  return (
    <div className="score">
      <h2 className="score-title">Score</h2>
      <p className="score-result">{data} %</p>
      <p className="score-comment">de votre <br />objectif</p>
      <ResponsiveContainer>
        <PieChart >
          <Pie
            data={userScore}
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
import React from 'react'
import "./RadialBarChart.scss"
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function RadialBarChart() {
  return (
    <div className="score">
      <h2 className="score-title">Score</h2>
         <p className="score-result">90%</p>
          <p className="score-comment">
            de votre <br /> objectif
          </p>
          <ResponsiveContainer className="responsive-container">
            <PieChart width={730} height={250}>
              <Pie
                data="test"
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

export default RadialBarChart

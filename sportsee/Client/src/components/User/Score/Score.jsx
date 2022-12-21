import React from 'react'
import propTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import './Score.scss'

/**
 * Render Score component
 * @function Score
 * @param {object<todayScore>} data come from getUser(id) in service Api or Mocks
 * @param {number} data ExtracScore - value injected in chart 4
 * @param {number} data.id - key id user
 * @param {number} data.todayScore - score user
 * @param {number} data.userScore - the extracted score, multiplied by 100.
 * @returns {Reactnode} jsx injected in DOM
 */

function Score({ data }) {
  const userScore = [{ value: data }, { value: 100 - data }]

  return (
    <div className="score">
      <h2 className="score-title">Score</h2>
      <p className="score-result">{data} %</p>
      <p className="score-comment">
        de votre <br />
        objectif
      </p>
      <ResponsiveContainer>
        <PieChart>
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
  )
}

/**
 * PropTypes Score component
 */
Score.propTypes = {
  userId: propTypes.string,
}

export default Score

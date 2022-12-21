import React, { useState, useEffect } from 'react'
import logo from './../../logo.svg'
import './Home.scss'

import Activity from '../../components/User/Activity/Activity'
import Average from '../../components/User/Average/Average'
import Performance from '../../components/User/Performance/Performance'
import Score from '../../components/User/Score/Score'
import Nutriments from '../../components/User/Nutriment/Nutriments'
import UserName from '../../components/User/UserName/UserName'

// eslint-disable-next-line no-unused-vars
// import mock from '../../__mocks__/mock.js'

// import {
//   getActivity,
//   getAverage,
//   getPerformance,
//   getUser,
// } from '../../__mocks__/mock.js'

// Data Api
import {
  getActivity,
  getAverage,
  getPerformance,
  getUser,
} from '../../service/Api'

import { extractNutriment } from '../../formater/Nutriment'
import { extractScore } from '../../formater/Score'
import { useParams } from 'react-router-dom'

/**
 * @function Home
 * @param {number} userId - user id number
 * @param {object<id>} Data
 * @param {object} Data.Userinfos - Firstname, LastName, age ...
 * @param {number} Data.todayScore - Current Score user.
 * @param {object} Data.KeyData - Value for all nutriments.
 * @param {object} ActivityData - Data processed to be displayed in our component chart 1
 * @param {object} AverageData  - Data processed to be displayed in our component chart 2
 * @param {object} PerformanceData - Data processed to be displayed in our component chart 3
 * @param {object} extractScore - Data processed to be displayed in our component chart 4
 * @param {object} extractNutriment - Data processed to be displayed in block aside nutriment
 * @returns {Reactnode} jsx injected in DOM
 */

function Home() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [average, setAverage] = useState([])
  const [activity, setActivity] = useState([])
  const [performance, setPerformance] = useState([])
  const [nutriment, setNutriment] = useState({})
  const [score, setScore] = useState(0)

  useEffect(() => {
    async function load() {
      const userData = await getUser(id)
      setUser(userData)

      const averageData = await getAverage(id)
      setAverage(averageData)

      const activityData = await getActivity(id)
      setActivity(activityData)

      const performanceData = await getPerformance(id)
      setPerformance(performanceData)

      setScore(await extractScore(userData))
      setNutriment(await extractNutriment(userData))
    }
    load()
  }, [id])

  if (!user || !user.userInfos) {
    return (
      <div className="message">
        <img src={logo} alt="Logo" className="message__logo" />
        <p>
          Chargement en cours ... <br />
          Site est temporairement indisponible
        </p>
      </div>
    )
  }
  return (
    <section>
      <div className="dashboard">
        <div className="charts-wrapper">
          <UserName firstname={user.userInfos.firstName} />

          <div className="main-charts">
            <h3 className="activity--title">Activité quotidienne</h3>
            <Activity data={activity} />
          </div>

          <div className="inline-charts">
            <div className="inline-charts--average">
              <h3 className="average-sessions--title">
                Durée moyenne des sessions
              </h3>
              <Average data={average} />
            </div>

            <div className="inline-charts--radar">
              <Performance data={performance} />
            </div>

            <div className="inline-charts--score">
              <Score data={score} />
            </div>
          </div>
        </div>

        <div className="nutriment-wrapper">
          <Nutriments data={nutriment} />
        </div>
      </div>
    </section>
  )
}

export default Home

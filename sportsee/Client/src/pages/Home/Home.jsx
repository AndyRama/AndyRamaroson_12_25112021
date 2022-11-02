import React,{ useState,useEffect } from "react";
import "./Home.scss";

import Activity from "../../components/User/Activity/Activity";
import Average from "../../components/User/Average/Average";
import Performance from "../../components/User/Performance/Performance";
import Score from "../../components/User/Score/Score";
import Nutriments from "../../components/User/Nutriment/Nutriments";
import UserName from "../../components/User/UserName/UserName";

import { getUser } from "../../service/User";
import { getAverage } from "../../service/Average";
import { getActivity } from "../../service/Activity";
import { getPerformance } from "../../service/Performance";
// import { getScore } from "../../service/Score";

function Home() {

  const [user, setUser] = useState({});
  const [average, setAverage] = useState([]);
  const [activity, setActivity] = useState([]);
  const [performance, setPerformance] = useState([]);
  // const [score, setScore] = useState([]);

  useEffect(() => {
    async function load() {
       const userData = await getUser(18)
       setUser(userData)
 
       const averageData = await getAverage(18)
       setAverage(averageData)

       const activityData = await getActivity(18)
       setActivity(activityData)

       const performanceData = await getPerformance(18)
       setPerformance(performanceData)
     
      //  const scoreData = await getScoreData(18)
      //  setScoreData(scoreData)

     }
     load()
   }, []);

   if(!user.userInfos) { return null }
    return (
      <section> 
        <div className="dashboard">
          <div className="charts-wrapper">
            <UserName firstname={user.userInfos.firstName}/>

            <div className="main-charts">
              <h3 className="activity--title">Activité quotidienne</h3>
              <Activity data={activity}/>
            </div>
           
            <div className="inline-charts">
              <div className="inline-charts--average">
                <h3 className="average-sessions--title">Durée moyenne des sessions</h3>
                <Average data={average}/>
              </div>

              <div className="inline-charts--radar">
                <Performance data={performance} />
              </div>

              <div className="inline-charts--score">  
                <Score  />
              </div>

            </div>
          </div>
          <div className="nutriment-wrapper">
            <Nutriments />
          </div>
        </div>
      </section>
    );
  }
export default Home;

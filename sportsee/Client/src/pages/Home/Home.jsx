import React,{ useState,useEffect } from "react";
import "./Home.scss";

import Activity from "../../components/User/Activity/Activity";
import Average from "../../components/User/Average/Average";
import Performance from "../../components/User/Performance/Performance";
import Score from "../../components/User/Score/Score";
import Nutriments from "../../components/User/Nutriment/Nutriments";
import UserName from "../../components/User/UserName/UserName";

import { getActivity, getAverage, getPerformance , getUser  } from "../../service/Api";
// import { getUser } from "../../service/User";
// import { } from "../../service/Average";
// import { getPerformance } from "../../service/Performance";

import { extractNutriment } from "../../formater/Nutriment";
import { extractScore } from "../../formater/Score";

// import mockedSportSee from "../../mocks/store";

function Home(urlId) {

  const [user, setUser] = useState({});
  const [average, setAverage] = useState([]);
  const [activity, setActivity] = useState([]);
  const [performance, setPerformance] = useState([]);

  const [nutriment, setNutriment] = useState({});
  const [score, setScore] = useState(0);

  // console.log(mockedSportSee)

  useEffect(() => {
    async function load() {
       const userData = await getUser(urlId)
       setUser(userData)
       
       const averageData = await getAverage(urlId)
       setAverage(averageData)
       
       const activityData = await getActivity(urlId)
       setActivity(activityData)
       
       const performanceData = await getPerformance(urlId)
       setPerformance(performanceData)

       setScore(await extractScore(userData))
       setNutriment(await extractNutriment(userData))
     }
     load()
   }, [urlId]);

   if(!user.userInfos) { return (<div>Loarding</div>) }
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
                <Score data={score} />
              </div>
            </div>
          </div>
          <div className="nutriment-wrapper">
            <Nutriments data={nutriment}/>
          </div>
        </div>
      </section>
    );
  }
export default Home;

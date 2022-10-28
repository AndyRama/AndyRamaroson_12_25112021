import React,{ useState,useEffect } from "react";
import "./Home.scss";

import Activity from "../components/User/Activity";
import Average from "../components/User/Average";
import RadarChart from "../components/User/RadarChart";
import PieComp from "../components/User/PieComp";
import Nutriments from "../components/User/Nutriment/Nutriments";
import UserName from "../components/User/UserName/UserName";

import { getUser } from "../service/User";
import { getAverage } from "../service/Average";
import { getActivity } from "../service/Activity";

function Home() {

  const [user, setUser] = useState({});
  const [average, setAverage] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    async function load() {
       const userData = await getUser(18)
       setUser(userData)
 
       const averageData = await getAverage(18)
       setAverage(averageData)

       const activityData = await getActivity(18)
       setActivity(activityData)
     }
     load()
   }, []);

   if(!user.userInfos) { return null }
    return (
      <section> 
        <UserName firstname={user.userInfos.firstName}/>
        <div className="weight">
          <h3 className="daily-activity--title">Activité quotidienne</h3>
          <Activity data={activity}/>
        </div> 

        <div className="Chart-wrapper">
          <h3 className="average-sessions--title">Durée moyenne des sessions</h3>
          <Average data={average} /> 
        </div>

        <div className="Chart-wrapper--Radar">
          <RadarChart />
        </div>

        <div className="Chart-wrapper--score">
          <PieComp />
        </div>   

        <Nutriments />  
      </section>
    );
  }


export default Home;

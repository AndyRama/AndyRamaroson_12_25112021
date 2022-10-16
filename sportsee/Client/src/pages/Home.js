import "./Home.scss";

import BarChart from "../components/User/BarChart/Bar.Chart";
import LineChart from "../components/User/LineChart/LineChart";
import RadarChart from "../components/User/RadarChart/RadarChart";

import IconCalories from "../components/UI/Icons/IconCalories";
import IconProtein from "../components/UI/Icons/IconProtein";
import IconCarbs from "../components/UI/Icons/IconCarbs";
import IconLipides from "../components/UI/Icons/IconLipides";

import UserName from "../components/User/UserName/UserName";

function Home() {
  return (
    <section> 
      <UserName />
      <div className="weight">
        <h3 className="daily-activity--title">Activité quotidienne</h3>
        <BarChart />
      </div> 

      <div className="Chart-wrapper">
        <h3 className="average-sessions--title">Durée moyenne des sessions</h3>
        <LineChart /> 
      </div>

      <div className="Chart-wrapper--Radar">
        <RadarChart />
      </div>
      
      <div className="Icon-wrapper"> 
        <IconCalories />
        <IconProtein />
        <IconCarbs />
        <IconLipides />
      </div>

    </section>
  );
}

export default Home;

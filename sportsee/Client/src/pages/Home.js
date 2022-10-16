import "./Home.scss";

import BarChart from "../components/User/BarChart/BarChart";
import LineChart from "../components/User/LineChart/LineChart";
import RadarChart from "../components/User/RadarChart/RadarChart";
import RadialBarChart from "../components/User/RadialBarChart/RadialBarChart";

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
        <LineChart /> 
        <RadarChart />
        <RadialBarChart />
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

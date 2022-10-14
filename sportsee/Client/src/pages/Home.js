import "./Home.scss";

import BarChart from "../components/User/BarChart/BarChart";
import LineChart from "../components/User/LineChart/LineChart";
import RadarChart from "../components/User/RadarChart/RadarChart";
import RadialBarChart from "../components/User/RadialBarChart/RadialBarChart";

import IconCalories from "../components/UI/Icons/IconCalories";
import IconProtein from "../components/UI/Icons/IconProtein";
import IconCarbs from "../components/UI/Icons/IconCarbs";
import IconLipides from "../components/UI/Icons/IconLipides";

function Home() {
  return (
    <section> 
      <h1>Bonjour monsieur</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      
      <div className="weight">
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

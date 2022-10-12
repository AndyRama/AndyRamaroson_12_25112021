import "./Home.scss";
import ChartWeight from "../components/Icons/ChartWeight";
import ChartObjectifs from "../components/Icons/ChartObjectifs";
import ChartRadar from "../components/Icons/ChartRadar";
import ChartKpi from "../components/Icons/ChartKpi";

import IconCalories from "../components/Icons/IconCalories";
import IconProtein from "../components/Icons/IconProtein";
import IconCarbs from "../components/Icons/IconCarbs";
import IconLipides from "../components/Icons/IconLipides";

function Home() {
  return (
    <section> 
      <h1>Bonjour monsieur</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      
      <div className="weight">
        <ChartWeight />

      <div className="Chart-wrapper">
        <ChartObjectifs /> 
        <ChartRadar />
        <ChartKpi />
      </div>

      <div className="Icon-wrapper"> 
      <IconCalories>

      </IconCalories>
      <IconProtein />
      <IconCarbs />
      <IconLipides />

      </div>
      </div>
    </section>
  );
}

export default Home;

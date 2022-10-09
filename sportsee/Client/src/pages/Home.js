import "./Home.scss";
import ChartWeight from "../components/Icons/ChartWeight";
import ChartObjectifs from "../components/Icons/ChartObjectifs";
import ChartRadar from "../components/Icons/ChartRadar";
import ChartKpi from "../components/Icons/ChartKpi";


function Home() {
  return (
    <section>
 
      <h1>Bonjour monsieur</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="weight">
        <ChartWeight />
      </div>

      <div className="Chart-wrapper">
        <ChartObjectifs /> 
        <ChartRadar />
        <ChartKpi />
      </div>


    </section>
  );
}

export default Home;

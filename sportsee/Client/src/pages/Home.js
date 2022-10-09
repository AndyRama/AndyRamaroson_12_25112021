import "./Home.scss";
import IconWeight from "../components/Icons/IconWeight";
import IconObjectifs from "../components/Icons/IconObjectifs";


function Home() {
  return (
    <section>
 
      <h1>Bonjour monsieur</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="weight">
      <IconWeight />

      </div>
      <IconObjectifs /> 

    </section>
  );
}

export default Home;

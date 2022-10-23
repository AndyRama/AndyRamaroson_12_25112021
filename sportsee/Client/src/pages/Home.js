import "./Home.scss";

import BarChart from "../components/User/BarChart";
import LineChart from "../components/User/LineChart";
import RadarChart from "../components/User/RadarChart";
import PieComp from "../components/User/PieComp";

import Nutriments from "../components/User/Nutriment/Nutriments";

import UserName from "../components/User/UserName/UserName";
import { getUser } from "../service/User";
import React,{ useState } from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    const user = await getUser(18)
    console.log(user)
    this.setState({user})
  }

  render() {    
   if(!this.state.user.userInfos) { return null }
    return (
      <section> 
        <UserName firstname={this.state.user.userInfos.firstName}/>
        {/* {this.state.user.userInfos.firstName} */}
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

        <div className="Chart-wrapper--score">
          <PieComp />
        </div>   

        <Nutriments />  
      </section>
    );
  }
}

export default Home;

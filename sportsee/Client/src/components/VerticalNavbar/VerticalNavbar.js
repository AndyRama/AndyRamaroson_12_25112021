import React from "react";

import "./../VerticalNavbar/VerticalNavbar.scss";

import IconMeditation from "../Icons/IconMeditation"; 
import IconBike from "../Icons/IconBike";
import IconTraining from "../Icons/IconTraining"; 
import IconSwim from "../Icons/IconSwim";

class VerticalNavbar extends React.Component {
  render() {
    return (
      <nav className="Vertical-Navbar">
        <div id="layout-icon-M"><IconMeditation /></div>
        <div id="layout-icon-S"><IconSwim /></div>
        <div id="layout-icon-B"><IconBike /></div>
        <div id="layout-icon-T"><IconTraining /></div>
      </nav>
    );
  }
}

export default VerticalNavbar;

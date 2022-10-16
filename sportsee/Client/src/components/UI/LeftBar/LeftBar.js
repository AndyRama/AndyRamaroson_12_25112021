import React from "react";

import "./LeftBar.scss";

import IconMeditation from "../Icons/IconMeditation"; 
import IconBike from "../Icons/IconBike";
import IconTraining from "../Icons/IconTraining"; 
import IconSwim from "../Icons/IconSwim";

function LeftBar() {
    return (
      <aside className="Vertical-Navbar">
        <div className="navlink">
          <div id="layout-icon-M"><IconMeditation /></div>
          <div id="layout-icon-S"><IconSwim /></div>
          <div id="layout-icon-B"><IconBike /></div>
          <div id="layout-icon-T"><IconTraining /></div>
        </div>
        <p>Copyright, SportSee 2020</p>
      </aside>
    );
}

export default LeftBar;

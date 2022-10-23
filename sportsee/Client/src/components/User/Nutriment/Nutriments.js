import React from "react";
import './Nutriments.scss'

import IconCalories from "../../../components/UI/Icons/IconCalories";
import IconProtein from "../../../components/UI/Icons/IconProtein";
import IconCarbs from "../../../components/UI/Icons/IconCarbs";
import IconLipides from "../../../components/UI/Icons/IconLipides";

function Nutriments() {
  return(
    <div class="nutriment-container">
      <ul>
        <li>  
          <div class="inside-content-wrapper">
            <div className="icon-box">
              <IconCalories />
            </div>
          </div>
          <div className="icon-text">
            <p className="quantity">1,930kCal</p>
            <p className="nutrition-type">Calories</p>
          </div>
        </li>

        <li>  
          <div class="inside-content-wrapper">
            <div className="icon-box">
              <IconProtein />
            </div>
          </div>
          <div className="icon-text">
            <p className="quantity">155g</p>
            <p className="nutrition-type">Proteines</p>
          </div>
        </li>

        <li>  
          <div class="inside-content-wrapper">
            <div className="icon-box">
              <IconCarbs />
            </div>
          </div>
          <div className="icon-text">
            <p className="quantity">290g</p>
            <p className="nutrition-type">Glucides</p>
          </div>
        </li>
        
        <li>  
          <div class="inside-content-wrapper">
            <IconLipides />
          </div>
          <div className="icon-text">
            <p className="quantity">50g</p>
            <p className="nutrition-type">Lipides</p>
          </div>
        </li>
      </ul>
    </div>     
  )
}

export default Nutriments



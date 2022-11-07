import React from "react";
import './Nutriments.scss'

import IconCalories from "../../UI/Icons/IconCalories";
import IconProtein from "../../UI/Icons/IconProtein";
import IconCarbs from "../../UI/Icons/IconCarbs";
import IconLipides from "../../UI/Icons/IconLipides";

function Nutriments({data:{calorieCount,proteinCount,carbohydrateCount,lipidCount}}) { 

    return(
    <div className="nutriment-container">
      <ul>
        <li>  
          <div className="inside-content-wrapper">
            <div className="icon-box">
              <IconCalories />
            </div>
          </div>
          <div className="icon-text">
            {/* <p className="quantity">{user.keyData.calorieCount}g</p> */}
            {/* <p className="quantity">{calories}g</p> */}
            <p className="quantity">{calorieCount}kCal</p>
            <p className="nutrition-type">Calories</p>
          </div>
        </li>

        <li>  
          <div className="inside-content-wrapper">
            <div className="icon-box">
              <IconProtein />
            </div>
          </div>
          <div className="icon-text">
            {/* <p className="quantity">{user.keyData.proteinCount}g</p> */}
              <p className="quantity">400g</p>
            <p className="nutrition-type">Proteines</p>
          </div>
        </li>

        <li>  
          <div className="inside-content-wrapper">
            <div className="icon-box">
              <IconCarbs />
            </div>
          </div>
          <div className="icon-text">
            {/* <p className="quantity">{user.keyData.carbohydrateCount}g</p> */}
            <p className="quantity">540g</p>
            <p className="nutrition-type">Glucides</p>
          </div>
        </li>
        
        <li>  
          <div className="inside-content-wrapper">
          <div className="icon-box">
            <IconLipides />
          </div>
          </ div>
          <div className="icon-text">
            {/* <p className="quantity">{user.keyData.lipidCount}g</p> */}
            <p className="quantity">580g</p>
            <p className="nutrition-type">Lipides</p>
          </div>
        </li>
      </ul>
    </div>     
  )
}

export default Nutriments



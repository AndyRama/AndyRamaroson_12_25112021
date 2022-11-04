import React,{ useState,useEffect } from "react";
import { getUser } from "../../../service/User";
import './Nutriments.scss'

import IconCalories from "../../UI/Icons/IconCalories";
import IconProtein from "../../UI/Icons/IconProtein";
import IconCarbs from "../../UI/Icons/IconCarbs";
import IconLipides from "../../UI/Icons/IconLipides";

function Nutriments(data) {

  const [user, setUser] = useState({});

  useEffect(() => {
    async function load() {
       const userData = await getUser(18)
       setUser(userData)
      }
      load()
    }, [data]);
    

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
            <p className="quantity">{user.keyData.calorieCount}kCal</p>
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
            <p className="quantity">{user.keyData.proteinCount}g</p>
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
            <p className="quantity">{user.keyData.carbohydrateCount}g</p>
            <p className="nutrition-type">Glucides</p>
          </div>
        </li>
        
        <li>  
          <div class="inside-content-wrapper">
          <div className="icon-box">
            <IconLipides />
          </div>
          </ div>
          <div className="icon-text">
            <p className="quantity">{user.keyData.lipidCount}g</p>
            <p className="nutrition-type">Lipides</p>
          </div>
        </li>
      </ul>
    </div>     
  )
}

export default Nutriments



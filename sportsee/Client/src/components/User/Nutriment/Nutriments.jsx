import PropTypes from 'prop-types'
import React from 'react'
import './Nutriments.scss'

import IconCalories from '../../UI/Icons/IconCalories'
import IconProtein from '../../UI/Icons/IconProtein'
import IconCarbs from '../../UI/Icons/IconCarbs'
import IconLipides from '../../UI/Icons/IconLipides'

/**
 * Render Nutriments component
 * @function Nutriments
 * @param   {object} data Come from  getUser(id) with "key: KeyData" in service Api or Mocks
 * @param   {number} data.calorieCount - number Calories
 * @param   {number} data.proteinCount - number Proteines
 * @param   {number} data.carbohydrateCount - number Glucides
 * @param   {number} data.lipidCount - number Lipid
 * @returns {Reactnode} jsx injected in DOM
 */

function Nutriments({
  data: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
}) {
  const nutrientTypes = [
    {
      type: 'Calories',
      unit: 'kCal',
      quantity: calorieCount / 1000,
      icon: IconCalories,
    },
    {
      type: 'Proteines',
      unit: 'g',
      quantity: proteinCount,
      icon: IconProtein,
    },
    {
      type: 'Glucides',
      unit: 'g',
      quantity: carbohydrateCount,
      icon: IconCarbs,
    },
    {
      type: 'Lipid',
      unit: 'g',
      quantity: lipidCount,
      icon: IconLipides,
    },
  ]

  return (
    <div className="nutriment-container">
      <ul>
        {nutrientTypes.map(({ type, unit, quantity, icon: Icon }) => (
          <li>
            <div className="inside-content-wrapper">
              <div className="icon-box">
                <Icon />
              </div>
            </div>
            <div className="icon-text">
              <p className="quantity">
                {quantity}
                {unit}
              </p>
              <p className="nutrition-type">{type}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * PropTypes Nutriments component
 */

Nutriments.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
}

export default Nutriments

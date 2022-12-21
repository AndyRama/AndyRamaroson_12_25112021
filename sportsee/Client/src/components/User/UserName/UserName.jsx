import PropTypes from 'prop-types'
import React from 'react'
import './UserName.scss'

/**
 * Render UserName component page Home
 * @param {object<userInfos>} data come from getUser(id) in service Api or Mocks
 * @param {number} data.id - id user
 * @param {string} data.firstName - firstName user
 * @returns {Reactnode} jsx injected in DOM
 */

function UserName({ firstname }) {
  return (
    <div className="profil">
      <h1>
        Bonjour <span>{firstname}</span>
      </h1>
      <h2> Félicitations ! Vous avez explosé vos objectifs hier 👏 </h2>
    </div>
  )
}

/**
 * PropTypes UserName component
 */

UserName.propTypes = {
  firstname: PropTypes.string,
}

export default UserName

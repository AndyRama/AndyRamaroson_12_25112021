import PropTypes from 'prop-types'
import React from 'react'
import './UserName.scss'

/**
 * return firstname of the user
 * @param {string} firstName  FirstName of the User
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

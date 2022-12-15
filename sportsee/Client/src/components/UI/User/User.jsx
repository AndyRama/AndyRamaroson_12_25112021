import propTypes from 'prop-types'
import './User.scss'
import avatar from './../../../user.svg'

/**
 * Render User component page accueil
 * @param {object} Data Come from function async "getUser()" [key: "userInfos"] service Api
 * @param {number} Data.id - Id user
 * @param {string} Data.firstName - FirstName user
 * @param {string} Avatar - Image to display in acceuil page
 * @returns {Reactnode} jsx injected in DOM
 */

function User({ id, name }) {
  return (
    <header className="user">
      <img src={avatar} className="avatar" alt="icon-user" />
      <h3 className="user-name">{name}</h3>
    </header>
  )
}

/**
 * PropTypes User component
 */
User.propTypes = {
  id: propTypes.number,
  Avatar: propTypes.string,
  name: propTypes.string.isRequired,
}

export default User

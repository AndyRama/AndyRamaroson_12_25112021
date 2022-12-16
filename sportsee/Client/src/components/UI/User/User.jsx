import propTypes from 'prop-types'
import './User.scss'
import avatar from './../../../user.svg'

/**
 * Render User component page accueil
 * @param {object<userInfos>} data come from getUser(id) in service Api or Mocks
 * @param {number} data.id - id user
 * @param {string} data.firstName - firstName user
 * @param {string} avatar - image to display in accueil page
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
  id: propTypes.number.isRequired,
  Avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
}

export default User

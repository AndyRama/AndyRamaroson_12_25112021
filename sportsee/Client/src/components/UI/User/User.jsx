import propTypes from 'prop-types'
import './User.scss'
import avatar from './../../../user.svg'

/**
 * Render User component
 * @function User
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.name
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

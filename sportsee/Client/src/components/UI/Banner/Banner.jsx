import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Render the Banner component
 * @function Banner
 * @param   {string} Message - message display component Accueil
 * @returns {Reactnode} jsx injected in DOM
 */

function Banner({ message }) {
  return (
    <header className="banner">
      <Link className="banner-accueil" to="/"></Link>
      <h1 className="msg">{message}</h1>
    </header>
  )
}

/**
 * PropTypes Home component
 */
Banner.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Banner

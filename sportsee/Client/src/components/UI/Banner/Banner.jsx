import { Link } from 'react-router-dom'

/**
 * Render the Banner component
 * @function Banner
 * @param   {string} Message - message display component Acceuil
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

export default Banner

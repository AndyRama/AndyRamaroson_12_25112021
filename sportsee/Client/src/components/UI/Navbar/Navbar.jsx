import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import propTypes from 'prop-types'

import LogoText from '../Icons/LogoText'
import logo from '../../../logo.svg'

import './Navbar.scss'

/**
 * Render the Navbar component
 * @function Navbar
 * @param {string} props.logo - the URL of the logo image.
 * @param {string} Onglet -  the name of the selected tab.
 * @param {array} OngletId - the list of tabs in the Navbar.
 * @returns {Reactnode} jsx injected in DOM
 */

function Navbar() {
  const ongletId = ['Accueil', 'Profil', 'Réglages', 'Communauté']
  const location = useLocation()

  return (
    <header className="header">
      <nav className="Navbar">
        <Link className="Nav-Logo-Wrapper" to="/Accueil">
          <img src={logo} alt="Logo" />
          <LogoText />
        </Link>
        <ul className="Nav-Buttons-Wrapper">
          {ongletId.map((onglet, index) => (
            <Link
              to={`/${onglet}`}
              key={index}
              className={
                location.pathname === `/${onglet}`
                  ? `${onglet}-page active`
                  : `${onglet}-page`
              }
              page={`${onglet}`}
            >
              {`${onglet}`}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

/**
 * PropTypes Navbar component
 */

Navbar.propTypes = {
  logo: propTypes.string.isRequired,
  onglet: propTypes.string.isRequired,
  ongletId: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Navbar

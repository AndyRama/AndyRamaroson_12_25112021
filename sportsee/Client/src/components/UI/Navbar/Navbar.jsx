import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import propTypes from 'prop-types'

import LogoText from '../Icons/LogoText'
import logo from '../../../logo.svg'

import './Navbar.scss'

/**
 * Render the Navbar component
 * @function Navbar
 * @param {string} props.logo > logo src
 * @param {string} onglet > url path
 * @param {array} ongletId > nav links topic names
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
          {/* <Link
            to="/Accueil"
            className={
              location.pathname === '/Accueil'
                ? 'Accueil-page active'
                : 'Accueil-page'
            }
            page="accueil"
          >
            Accueil
          </Link> */}
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
  logo: propTypes.string,
  onglet: propTypes.string,
  ongletId: propTypes.arrayOf(propTypes.string),
}

export default Navbar

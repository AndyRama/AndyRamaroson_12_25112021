import React from 'react'
import { Link, useLocation} from 'react-router-dom'

import './Navbar.scss'
import LogoText from '../Icons/LogoText'
import logo from '../../../logo.svg'

function Navbar() {

  const ongletId = ['Profil','Réglages','Communauté'];
  const location = useLocation()

  return (
    <header className="header">
      <nav className="Navbar">
        <Link className="Nav-Logo-Wrapper" to="/">
          <img src={logo} alt="Logo" />
          <LogoText />
        </Link>
        <ul className="Nav-Buttons-Wrapper">
        <Link to="/" className={ location.pathname === '/' ? 'home-page active' : 'home-page' }
            page="home"> Accueil
        </Link>
        { ongletId.map((onglet, index) => (
          <Link
            to={`${onglet}`} 
            key={index} 
            // className={ location.pathname === '/${onglet}' ? '${onglet} active' : '${onglet}' }
            >{`${onglet}`}
          </Link>          
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

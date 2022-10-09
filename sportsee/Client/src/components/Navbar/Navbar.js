import React from "react";

import "./../Navbar/Navbar.scss"
import {  Link }  from "react-router-dom"
import logo from '../../logo.svg';

class Navbar extends React.Component {
    render() {

    return( 
      <header className="header">
        <nav className="Navbar">
          <div className="Nav-Logo-Wrapper">
            <img src={logo} alt="Logo" />
            <p>SportSee</p>
          </div>
          <div className="Nav-Buttons-Wrapper">
            <Link to="/">Acceuil</Link>
            <Link to="/">Profil</Link>
            <Link to="/">Réglage</Link>
            <Link to="/">Communauté</Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar
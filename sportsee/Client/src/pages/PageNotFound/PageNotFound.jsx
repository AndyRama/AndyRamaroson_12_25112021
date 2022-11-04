import './PageNotFound.scss'
import React from 'react';
import { Link } from "react-router-dom";

function PageNotFound () {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Oups! Cette page est encore en cours de construction.</h2>
      <div className="return-to-home">
        <Link to="/">Retourner sur la page d'acceuil.</Link>
      </div>
    </div>
  );  
}

export default PageNotFound
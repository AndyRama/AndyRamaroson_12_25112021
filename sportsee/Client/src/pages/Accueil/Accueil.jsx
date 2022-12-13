import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../components/UI/User/User'
import Banner from '../../components/UI/Banner/Banner'

function Accueil(id) {
  return (
    <main>
      <Banner message="Bonjour Veuillez vous identifiez ?" />
      <br />
      <section className="users">
        <Link to="home/user/19">
          <User key={id} name="Andy" />
        </Link>
        <Link to="home/user/18">
          <User key={id} name="Cecilia" />
        </Link>
        <Link to="home/user/12">
          <User key={id} name={'karl'} />
        </Link>
      </section>
    </main>
  )
}
export default Accueil

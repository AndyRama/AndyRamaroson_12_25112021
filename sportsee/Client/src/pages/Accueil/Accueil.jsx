import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../components/UI/User/User'
import Banner from '../../components/UI/Banner/Banner'

function Accueil(id) {
  return (
    <main>
      <Banner message="Bonjour Veuillez vous identifiez ?" />
      <section className="users">
        <Link to="home/user/12">
          <User key={id} name={'karl'} />
        </Link>
        <Link to="home/user/18">
          <User key={id} name="Cecilia" />
        </Link>
      </section>
    </main>
  )
}
export default Accueil

import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../components/UI/User/User'
import Banner from '../../components/UI/Banner/Banner'

const users = [
  { id: 19, name: 'Andy' },
  { id: 18, name: 'Cecilia' },
  { id: 12, name: 'Karl' },
]

function Accueil() {
  return (
    <main>
      <Banner message="Bonjour, veuillez vous identifier ?" />
      <br />
      <section className="users">
        {users.map((user) => (
          <Link key={user.id} to={`home/user/${user.id}`}>
            <User name={user.name} />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Accueil

import { Link } from 'react-router-dom'

function Banner({ message }) {
  return (
    <header className="banner">
      <Link className="banner-accueil" to="/"></Link>
      <h1 className="msg">{message}</h1>
    </header>
  )
}
export default Banner

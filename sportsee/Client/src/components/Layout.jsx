import { Routes, Route } from 'react-router-dom'

import Accueil from '../pages/Accueil/Accueil'
import Home from './../pages/Home/Home'
import PageNotFound from './../pages/PageNotFound/PageNotFound'

import Navbar from './UI/Navbar/Navbar'
import LeftBar from './UI/LeftBar/LeftBar'
import './UI/Variables.scss'

function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <LeftBar />
      <Routes>
        <Route path="/Accueil" element={<Accueil />}></Route>
        <Route path="accueil/home/user/:id" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default Layout

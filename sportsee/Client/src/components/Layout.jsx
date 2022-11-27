import { Routes, Route } from 'react-router-dom'

import Home from './../pages/Home/Home'
import PageNotFound from './../pages/PageNotFound/PageNotFound'

import Navbar from './UI/Navbar/Navbar'
import LeftBar from './UI/LeftBar/LeftBar'
import './UI/Variables.scss'
import Accueil from '../pages/Accueil/Accueil'

function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <LeftBar />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/user/:id" element={<Home />}></Route>
        {/* <Route path="/user/:id" element={< />}></Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default Layout

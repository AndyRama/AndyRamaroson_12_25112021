import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Navbar from "./UI/Navbar/Navbar";
import LeftNavbar from "./UI/LeftNavbar/LeftNavbar";
// import "app.css"

function Layout() {
  return (
    <div className="Layout" >
      <Navbar />
      <LeftNavbar />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
      </Routes>
    </div> 
  )
}

export default Layout;
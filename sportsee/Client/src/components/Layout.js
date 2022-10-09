import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Navbar from "./../components/Navbar/Navbar";
import VerticalNavbar from "../components/VerticalNavbar/VerticalNavbar";
// import "app.css"

function Layout() {
  return(
   <div className="Layout" >
    <Navbar />
    <VerticalNavbar />
    <Routes>
      <Route path="/" element={ <Home /> }></Route>
    </Routes>
   </div> 
  )
}

export default Layout;
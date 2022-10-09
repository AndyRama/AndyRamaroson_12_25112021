import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Navbar from "./../components/Navbar/Navbar";
// import "app.css"

function Layout() {
  return(
   <div className="Layout" >
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> }></Route>
    </Routes>
   </div> 
  )
}

export default Layout;
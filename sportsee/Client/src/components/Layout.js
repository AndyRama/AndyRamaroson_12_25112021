import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
// import "app.css"

function Layout() {
  return(
   <div className="Layout" >
    <Routes>
      <Route path="/" element={ <Home /> }></Route>
    </Routes>
   </div> 
  )
}

export default Layout;
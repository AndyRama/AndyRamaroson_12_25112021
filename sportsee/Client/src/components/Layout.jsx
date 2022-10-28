import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Navbar from "./UI/Navbar/Navbar";
import LeftBar from "./UI/LeftBar/LeftBar";
// import "app.css"

function Layout() {
  return (
    <div className="Layout" >
      <Navbar />
      <LeftBar />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
      </Routes>
    </div> 
  )
}

export default Layout;
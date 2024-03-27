import React from "react";
import Navigation from './components/Navbar.js';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Allposts from "./components/Allposts.js";
//import Onepost from "./components/Onepost.js";
import Homepage from "./pages/Homepage.js";

export default (props) => {
  return ( 
    <div>
    <Navigation />
    {props.children}
    </div>
  );
}





/*
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route Component={Allposts} path="/" exact />
        <Route Component={Onepost} path="/:slug" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
*/
import Words from "./Words";
import React, { Component } from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./Home";


export default class App extends Component {

  

  render() {
    return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/words" exact element={<Words />}/>
        {/* <Route path="/" element={<Words/>}/> */}
      </Routes>

    </Router>

    ); 
}


}

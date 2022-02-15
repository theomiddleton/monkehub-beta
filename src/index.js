import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.module.css";
import Likedmonke from "./views/likedmonke";
import LandingPage from "./views/landing-page";
import Download from "./views/download";
import Contact from "./views/contact";
import Source from "./views/source";
import Aboutus from "./views/aboutus";
import Monke from "./views/monke";

//console.log(process.env.REACT_APP_API_KEY)

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Likedmonke} path="/likedmonke" />
        <Route exact component={LandingPage} path="/" />
        <Route exact component={Download} path="/download" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Source} path="/source" />
        <Route exact component={Aboutus} path="/aboutus" />
        <Route exact component={Monke} path="/monke" />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

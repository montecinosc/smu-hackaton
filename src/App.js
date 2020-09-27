import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Muro from "./components/Principal/Muro";
import "./App.css";
import Celiaco from "./components/Celiacos/Celiaco";
import Vegetariano from "./components/Vegetariano";
import Vegano from "./components/Veganos/Vegano";
import Chilenas from "./components/Principal/Chilenas";
import Mundo from "./components/Principal/Mundo";
import Niños from "./components/Principal/Niños";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Muro />
        </Route>
        <Route path="/celiaco">
          <Celiaco />
        </Route>
        <Route path="/vegetariano">
      
          <Vegetariano />
        </Route>
        <Route path="/vegano">
        
          <Vegano />
        </Route>
        <Route path="/chilena">
   
          <Chilenas />
        </Route>
        <Route path="/niños">
   
          <Niños />
        </Route>
        <Route path="/mundo">
        
          <Mundo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

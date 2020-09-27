import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Muro from "./Components/Principal/Muro.jsx";
import "./App.css";
import Celiaco from "./Components/Celiacos/Celiaco.jsx";
import Vegetariano from "./Components/Vegetariano.jsx";
import Vegano from "./Components/Veganos/Vegano.jsx";
import Chilenas from "./Components/Principal/Chilenas.jsx";
import Mundo from "./Components/Principal/Mundo.jsx";
import Niños from "./Components/Principal/Niños.jsx";

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

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Muro from "./components/Principal/Muro";
import "./App.css";
import Celiaco from "./components/Celiacos/Celiaco";
import Vegetariano from "./components/Vegetariano";
import Vegano from "./components/Veganos/Vegano";
import Chilenas from "./components/Principal/Chilenas";
import Mundo from "./components/Principal/Mundo";
import Niños from "./components/Principal/Niños";
import CeliacoBudinPolenta from "./components/Celiacos/CeliacoBudinPolenta";
import Garbanzos from "./components/Veganos/Garbanzos"
import CeliacoÑoquis from "./components/Celiacos/CeliacoÑoquis"
import Ratatouille from "./components/Veganos/Ratatouille"

function App() {
  return (<Router>
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
      <Route path="/vegano" >

        <Vegano />
      </Route>
      <Route path="/chilena">

        <Chilenas />
      </Route>
      <Route path="/niños" >

        <Niños />
      </Route>
      <Route path="/polenta" >
        <CeliacoBudinPolenta />
      </Route>
      <Route path="/ñoquis" >
        <CeliacoÑoquis />
      </Route>
      <Route path="/garbanzo"  >
        <Garbanzos />
      </Route>
      <Route path="/ratatouille"  >
        <Ratatouille />
      </Route>
  
      <Route path="/mundo" >

        <Mundo />
      </Route>
    </Switch >
  </Router>
  );
}

export default App;
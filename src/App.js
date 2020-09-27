import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Muro from "./Components/Principal/Muro";
import "./App.css";
import Celiaco from "./Components/Celiacos/Celiaco";
import Vegetariano from "./Components/Vegetariano";
import Vegano from "./Components/Veganos/Vegano";
import Chilenas from "./Components/Principal/Chilenas";
import Mundo from "./Components/Principal/Mundo";
import Niños from "./Components/Principal/Niños";
import CeliacoBudinPolenta from "./Components/Celiacos/CeliacoBudinPolenta";
import Garbanzos from "./Components/Veganos/Garbanzos"
import CeliacoÑoquis from "./Components/Celiacos/CeliacoÑoquis"
import Ratatouille from "./Components/Veganos/Ratatouille"

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
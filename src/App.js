import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Muro from "./Components/Principal/Muro";
import "./App.css";
import Celiaco from "./Components/Celiacos/Celiaco";
import Vegetariano from "./Components/Vegetarianos/Vegetariano";
import Vegano from "./Components/Veganos/Vegano";
import Chilenas from "./Components/Principal/Chilenas";
import Mundo from "./Components/Principal/Mundo";
import Niños from "./Components/Principal/Niños";
import CeliacoBudinPolenta from "./Components/Celiacos/CeliacoBudinPolenta";
import Garbanzos from "./Components/Veganos/Garbanzos";
import CeliacoÑoquis from "./Components/Celiacos/CeliacoÑoquis";
import Ratatouille from "./Components/Veganos/Ratatouille";
import Charquican from "./Components/Vegetarianos/Charquican";
import PastelColiflor from "./Components/Vegetarianos/PastelColiflor";
import IntoleranteLactosa from "./Components/Intolerantes/IntoleranteLactosa";
import PimentonRelleno from "./Components/Intolerantes/PimentonRelleno";
import SopaipillasPasadas from "./Components/Intolerantes/SopaipillasPasadas";

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
        <Route path="/intolerante">
          <IntoleranteLactosa />
        </Route>
        <Route path="/niños">
          <Niños />
        </Route>
        <Route path="/polenta" exact>
          <CeliacoBudinPolenta />
        </Route>
        <Route path="/ñoquis">
          <CeliacoÑoquis />
        </Route>
        <Route path="/garbanzo">
          <Garbanzos />
        </Route>
        <Route path="/ratatouille">
          <Ratatouille />
        </Route>
        <Route path="/charquican">
          <Charquican />
        </Route>
        <Route path="/pastelColiflor">
          <PastelColiflor />
        </Route>
        <Route path="/pimentonRelleno">
          <PimentonRelleno />
        </Route>{" "}
        <Route path="/sopaipilla">
          <SopaipillasPasadas />
        </Route>
        <Route path="/mundo">
          <Mundo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

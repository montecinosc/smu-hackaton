import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Muro from "../src/Components/Principal/Muro";
import "./App.css";
import Celiaco from "./Components/Celiacos/Celiaco";
import Vegetariano from "../src/Components/Vegetariano";
import Vegano from "../src/Components/Veganos/Vegano";
import Chilenas from "../src/Components/Principal/Chilenas";
import Mundo from "../src/Components/Principal/Mundo";
import Niños from "../src/Components/Principal/Niños";
import CeliacoBudinPolenta from "../src/Components/Celiacos/CeliacoBudinPolenta";

function App() {
  return ( <Router>
    <Switch>
    <Route path = "/"exact>
      <Muro/>
    </Route> 
    <Route path = "/celiaco">
    <Celiaco/>
    </Route> 
    <Route path = "/vegetariano">

    <Vegetariano/>
    </Route> 
    <Route path = "/vegano" >

    <Vegano/>
    </Route> 
    <Route path = "/chilena">

    <Chilenas/>
    </Route> 
    <Route path = "/niños" >

    <Niños/>
    </Route>  
    <Route path = "/polenta" >
    <CeliacoBudinPolenta/>
    </Route> 
    <Route path = "/mundo" >

    <Mundo/>
    </Route> 
    </Switch > 
    </Router>
  );
}

export default App;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Muro from './Components/Muro'
import './App.css';
import Celiaco from './Components/Celiaco'
import Vegetariano from './Components/Vegetariano';
import Vegano from './Components/Vegano'
import Chilenas from './Components/Chilenas';
import Mundo from './Components/Mundo';
import Niños from './Components/Niños';



function App() {
  return ( <
    Router >
    <
    Switch >
    <
    Route path = "/"
    exact >
    <
    Muro / >
    <
    /Route>   <
    Route path = "/celiaco" >
    <
    Celiaco / >
    <
    /Route >  <
    Route path = "/vegetariano" > < Vegetariano / > < /Route> <
    Route path = "/vegano" > < Vegano / > < /Route>  <
    Route path = "/chilena" > < Chilenas / > < /Route> <
    Route path = "/niños" > < Niños / > < /Route> <
    Route path = "/mundo" > < Mundo / > < /Route> < /
    Switch >
    <
    /Router >
  );
}

export default App;
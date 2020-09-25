import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Muro from './components/Muro'
import './App.css';
import Celiaco from './components/Celiaco'
import Vegetariano from './components/Vegetariano';
import Vegano from './components/Vegano'
import Chilenas from './components/Chilenas';
import Mundo from './components/Mundo';
import Niños from './components/Niños';



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
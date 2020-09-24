import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Muro from './components/Muro'
import './App.css';

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
    /Route>  <
    /Switch > <
    /Router>
  );
}

export default App;
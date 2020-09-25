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
import Rating from 'react-rating';
import ePloma from './Assets/img/star-grey.png'
import eRoja from './Assets/img/star-red.png'
import eAmarilla from './Assets/img/star-yellow.png'

function App() {
  return ( 
    <Router>
    <Switch>
    <Route path = "/" exact>
    <Muro/>
    <Rating
  placeholderRating={4}
  emptySymbol={<img src={ePloma} className="icon" />}
  placeholderSymbol={<img src={eRoja} className="icon" />}
  fullSymbol={<img src={eAmarilla} className="icon" />}
/>

    </Route>  
    </Switch> 
    </Router>
  );
}

export default App;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import React, { Fragment } from 'react'
import Celiaco from '../Celiacos/Celiaco';
import Vegetariano from '../Vegetarianos/Vegetariano';
import { CardImg, CardBody, CardSubtitle, CardText } from 'reactstrap'
import { muro } from '../../Json/muroLista.json';
import Puntuacion from '../Puntuacion';
import Carrusel from './Carrusel';
import MenuPrincipal from './Menu';
import Footer from './Footer';
import BarraBusqueda from "./BarraBusqueda";
import '../../Style/muro.css'
import Tips from "./Tips";






const Muro = () => {
  return (
    <Fragment>
      <MenuPrincipal />
      <Carrusel />
      <BarraBusqueda />
      <div className="container">
        <div className="row">
          {muro.map((element, i) => {
            return (
              <div className="col-md-6 col-lg-4">
                <div className="card mx-0 my-3">
                  <CardImg src={element.imagen} alt="" />
                  <CardBody>
                    <CardSubtitle className="tipo-dieta">{element.titulo}</CardSubtitle>
                    <CardText> {element.descripcion}</CardText>
                    <Puntuacion />
                    <Link to={element.tipo}> Ver más</Link>
                  </CardBody>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Tips />
      <Footer />
    </Fragment>
  );
}

export default Muro




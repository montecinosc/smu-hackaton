import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import React, { Fragment } from 'react'
import Celiaco from '../Celiacos/Celiaco';
import Vegetariano from '../Vegetariano';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Button } from 'reactstrap'
import { muro } from '../../muroLista.json';
//import Puntuacion from "../Principal/"
import Carrusel from './Carrusel';
import MenuPrincipal from './Menu';
import Footer from './Footer';
import BarraBusqueda from "../Veganos/BarraBusqueda";


const Muro = () => {
    return (
        <Fragment>
            <MenuPrincipal />
            <Carrusel />
            <BarraBusqueda />
            <Row sm='3'>
                {muro.map((element, i) => {
                    return (
                        <Card>
                            <CardImg src={element.imagen} alt="" />
                            <CardBody>
                                <CardSubtitle>{element.titulo}</CardSubtitle>

                                <CardText> {element.descripcion}</CardText>
                                {/*<Puntuacion />*/}
                                <Link to={element.tipo}> Ver más</Link>
                            </CardBody>
                        </Card>
                    );
                })
                }
            </Row>
            <Footer/>
        </Fragment>

    )
}

export default Muro

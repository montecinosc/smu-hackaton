import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Celiacos from './Celiaco'
import Vegetariano from './Vegetariano'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Button } from 'reactstrap'
import { muro } from '../muroLista.json'
import Puntuacion from './Puntuacion';

const Muro = () => {
    return (

        <Fragment >
            <Row sm='3'>
                {
                    muro.map((element, i) => {
                        return (

                            <Card>
                                <CardImg src={element.imagen} alt="" />
                                <CardBody>
                                    <CardSubtitle>{element.titulo}</CardSubtitle>

                                    <CardText> {element.descripcion}</CardText>
                                    <Puntuacion />
                                    <Link to={element.tipo}> Ver más</Link>
                                </CardBody>
                            </Card>


                        );
                    })

                }
            </Row>

        </Fragment >
    )
}

export default Muro


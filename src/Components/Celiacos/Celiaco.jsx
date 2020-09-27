import React, { Fragment } from 'react'
import { celiacos } from '../../celiacos.json'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Button } from 'reactstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Carrusel from '../../components/Principal/Carrusel';
import Footer from '../../components/Principal/Footer';
const Celiaco = () => {
    return (
        <Fragment>
            <Carrusel />
            <Row sm='3'>
                {celiacos.map((element, i) => {
                    return (
                        <Link to={element.tipo}>
                            <Card>
                                <CardImg src={element.imagen} alt="" />

                            </Card>
                        </Link>
                    );
                })
                }
            </Row>
        </Fragment>
    )
}

export default Celiaco

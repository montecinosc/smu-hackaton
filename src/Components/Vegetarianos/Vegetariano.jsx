import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row } from 'reactstrap'
import { vegetarianos } from '../../Json/vegetarianos.json'
import MenuPrincipal from '../Principal/Menu';
import BarraBusqueda from '../Principal/BarraBusqueda';
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer';


const Vegetariano = () => {
    return (

        <Fragment>
            <MenuPrincipal/>
            <Carrusel />
            <BarraBusqueda />
            <Row sm='3'>
                {vegetarianos.map((element, i) => {
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
            <Footer />
        </Fragment>


    )
}

export default Vegetariano

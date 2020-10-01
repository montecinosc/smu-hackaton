import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row } from 'reactstrap'
import { vegetarianos } from '../../Json/vegetarianos.json'
import MenuPrincipal from '../Principal/MenuPrincipal';
import BarraBusqueda from '../Principal/BarraBusqueda';
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer';
import "../../Style/tarjetas.css"

const Vegetariano = () => {
    return (

        <Fragment>
            <MenuPrincipal/>
            <Carrusel />
            <BarraBusqueda />
            <Row sm='3'className="p-4 mx-4">
                {vegetarianos.map((element, i) => {
                    return (
                        <Link to={element.tipo}>
                            <Card className="tarjetas-inner">
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

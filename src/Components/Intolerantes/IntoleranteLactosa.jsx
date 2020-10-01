import React from 'react'
import { lactosa } from '../../Json/lactosa.json'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Button } from 'reactstrap'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import MenuPrincipal from '../Principal/MenuPrincipal';
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer.jsx';
import BarraBusqueda from '../Principal/BarraBusqueda';

const IntoleranteLactosa = () => {
    return (

        <>
            <MenuPrincipal />

            <Carrusel />
            <BarraBusqueda />
            <Row sm='3'>
                {lactosa.map((element, i) => {
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
        </>
    )
}

export default IntoleranteLactosa

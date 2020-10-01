import React from 'react'
import { veganos } from '../../Json/veganos.json'
import { Col, Card, CardImg, Row, Button } from 'reactstrap'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import MenuPrincipal from '../Principal/MenuPrincipal';
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer.jsx';
import BarraBusqueda from '../Principal/BarraBusqueda';
import "../../Style/tarjetas.css"


const Vegano = () => {
    return (

        <>
            <MenuPrincipal />
            <Carrusel />
            <BarraBusqueda />
            <Row sm='3'className="p-4 mx-4">
                {veganos.map((element, i) => {
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
        </>

    )
}

export default Vegano

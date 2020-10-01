import React from 'react'
import { chile } from '../../Json/chile.json'
import { Col, Card, CardImg, Row } from 'reactstrap'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import MenuPrincipal from '../Principal/Menu';
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer.jsx';
import BarraBusqueda from './BarraBusqueda';

const Chilenas = () => {
    return (
        <>
            <MenuPrincipal/>
            <Carrusel />
            <BarraBusqueda />
            <Row sm='3'>
                {chile.map((element, i) => {
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

export default Chilenas

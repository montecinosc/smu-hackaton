import React from 'react'
import { niños } from '../../Json/niños.json'
import { Col, Card, CardImg, Row } from 'reactstrap'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer.jsx';
const Niños = () => {
    return (
        <>
            <Carrusel />
            <Row sm='3'>
                {niños.map((element, i) => {
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

export default Niños

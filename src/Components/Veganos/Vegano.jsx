import React from 'react'
import { veganos } from '../../Json/veganos.json'
import { Col, Card, CardImg, Row, Button } from 'reactstrap'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer.jsx';

const Vegano = () => {
    return (

        <>
            <Carrusel />
            <Row sm='3'>
                {veganos.map((element, i) => {
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

export default Vegano

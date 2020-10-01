import React, { Fragment } from 'react'
import { celiacos } from '../../Json/celiacos.json'
import { Card, CardImg, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import MenuPrincipal from '../Principal/MenuPrincipal';
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer.jsx';
import BarraBusqueda from '../Principal/BarraBusqueda';
import "../../Style/tarjetas.css"

const Celiaco = () => {
    return (
        <Fragment>
            <MenuPrincipal />
            <Carrusel />
            <BarraBusqueda />
            <Row sm='3' className="p-4 mx-4">
                {celiacos.map((element, i) => {
                    return (
                        <Link to={element.tipo}>
                            <Card className="tarjetas-inner">
                                <CardImg className="img-portada"src={element.imagen} alt="" />

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

export default Celiaco

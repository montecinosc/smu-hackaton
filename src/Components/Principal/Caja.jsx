
import React, { Fragment } from 'react'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Button } from 'reactstrap'
import Swal from 'sweetalert2'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../Style/caja.css';
import {
    MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from
    "mdbreact";

import Checkbox from '@material-ui/core/Checkbox';
import listaCompra from '../../Json/listaCompra.json';
import azucar from "../../Assets/img/azucar.png";
import huevos from "../../Assets/img/huevos.png";
import limon from "../../Assets/img/limon.png";
import polenta from "../../Assets/img/polenta.png";




const unicaja = () => {
    Swal.fire(
        'Estamos preparando tus pedido',
        'Gracias por  hacer nuestras recetas',
        'success'

    );

}

const pedido = () => {
    Swal.fire({
        title: 'Estamos preparando tu pedido',
        confirmButtonText: `Aceptar`,


    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Gracias por tu compra', '', 'success')

            if (result.isConfirmed) { window.location.reload(true) }
        } else if (result.isDenied) {
            Swal.fire('Revisa tu lista', '', 'info')
        }
    })
}

const Caja = (props) => {
    console.log(props.lista)
    const listaNombre = props.lista;
    return (
        <Fragment >
        <p className="textoInicial">Si estás interesado en preparar esta receta, ahora puedes conseguir los ingredientes</p>
        <p className="descripcion">Te presentamos la UNIBOX, con ella puedes obtener todos los ingredientes de tus recetas favoritas con solo un click, o si prefieres puedes adquirir solo los productos que necesitas</p>
        <div className="container">
            <div className="contenedorCaja row justify-content-center mt-5">
                <div className="unibox  col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                    <img className="imagenBox" src="https://i.ibb.co/NFfPcwW/Uni-Box-Img.png" />
                    <Button onClick={unicaja} className="btn-compra m-4"> Comprar Unibox</Button>
                </div>
                <div className="lista col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                    {listaCompra[listaNombre].map((element, i) => {
                        return (
                            <Card>

                                <div className="nombreLista"> <Checkbox />{element.ingrediente}</div>
                            </Card>
                        );
                    })
                    }
                    <Button onClick={pedido} className="comprarIngredientes m-4"> Comprar Ingredientes</Button>
                </div>
                <div className="contenedorCarusel col-md-6 col-lg-4">
                    <MDBContainer>
                        <MDBCarousel
                            activeItem={1}
                            length={4}
                            showControls={true}
                            showIndicators={true}
                            className="z-depth-1"
                        >
                            <MDBCarouselInner>
                                <MDBCarouselItem itemId="1">
                                    <MDBView>
                                        <img
                                            className="d-block img-carrusel"
                                            src={azucar}
                                            alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>

                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <img
                                            className="d-block caja-carrusel img-carrusel"
                                            src={polenta}
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>

                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <img
                                            className="d-block caja-carrusel img-carrusel"
                                            src={huevos}
                                            alt="Third slide"
                                        />
                                        <MDBMask overlay="black-slight" />
                                    </MDBView>

                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="4">
                                    <MDBView>
                                        <img
                                            className="d-block caja-carrusel img-carrusel"
                                            src={limon}
                                            alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>

                                </MDBCarouselItem>
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </MDBContainer>
                </div>
            
            </div>

        </div>
    </Fragment >
    )
}

export default Caja


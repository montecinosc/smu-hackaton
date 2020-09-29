
import React, { Fragment } from 'react'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Button } from 'reactstrap'
import Swal from 'sweetalert2'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
    MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from
    "mdbreact";
;

const unicaja = () => {
    Swal.fire(
        'Estamos preparando tú pedido',
        'Gracias por  hacer nuestras recetas',
        'success'

    );
    Swal.fire({
        title: 'Tú UniCaja',
        text: 'Va en camino',
        imageUrl: 'https://www.uchile.cl/image/f160206-1-h.jpeg?5019',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
}

const Caja = () => {
    return (
        <Fragment>
            <div>
                hola boton
            <Button onClick={unicaja}> Pedir Unicaja</Button>
            </div>


            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    transition=" left 0.5s"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block"
                                    src="https://www.unimarc.cl/wp-content/uploads/img-ofertas/Todos-los-cereales-Kelloggs-agosto.jpg"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Light mask</h3>
                                <p>First text</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block"
                                    src="https://www.unimarc.cl/wp-content/uploads/img-ofertas/Limo%CC%81n-Malla-1-Kg.jpg"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Second text</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block "
                                    src="https://www.unimarc.cl/wp-content/uploads/img-ofertas/Chirimoya-Granel.jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Slight Mast</h3>
                                <p>Third text</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>

        </Fragment >
    )
}

export default Caja

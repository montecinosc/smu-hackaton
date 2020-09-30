
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
import listaCompra from '../../Json/listaCompra.json'

const unicaja = () => {
    Swal.fire(
        'Estamos preparando tus pedido',
        'Gracias por  hacer nuestras recetas',
        'success'

    );

}

const pedido = () => {
    Swal.fire(
        'Estamos preparando tu pedido',
        'Gracias por  hacer nuestras recetas',
        'success'

    );
}

const Caja = (props) => {
    console.log(props.lista)
    const listaNombre = props.lista;
    return (
        <Fragment >
            <p className="textoInicial">Si estás interesado en preparar esta receta,ahora puedes conseguir los ingredientes</p>
            <div className="contenedorCaja">
                <div className="unibox">
                    <p>Te presentamos la UNIBOX , con ella puedes obtener todos los ingredientes de tus recetas favoritas con solo un click</p>
                    <img className="imagenBox" src="https://i.ibb.co/NFfPcwW/Uni-Box-Img.png" />
                    <Button onClick={unicaja}> Comprar Unibox</Button>
                </div>
                <div className="lista">
                    <p> Si prefieres puedes adquirur los productos que necesites ,seleccionado a continuación</p>
                    {listaCompra[listaNombre].map((element, i) => {
                        return (
                            <Card>

                                <div className="nombreLista"> <Checkbox />{element.ingrediente}</div>
                            </Card>
                        );
                    })
                    }
                    <Button onClick={pedido} className="comprarIngredientes"> Comprar Ingredientes</Button>
                </div>
                <div className="contenedorCarusel">
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
                                            className="d-block "
                                            src="https://i.ibb.co/Xxts32p/huevograndeblanco.webp"
                                            alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>

                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <img
                                            className="d-block "
                                            src="https://i.ibb.co/nk4Tjtr/limongranel.jpg"
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>

                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <img
                                            className="d-block "
                                            src="https://i.ibb.co/rQWR78B/azucar.webp"
                                            alt="Third slide"
                                        />
                                        <MDBMask overlay="black-slight" />
                                    </MDBView>

                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="4">
                                    <MDBView>
                                        <img
                                            className="d-block "
                                            src="https://i.ibb.co/dcqxWcx/polentacarozzi.jpg"
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
           <br/>
           <br/>
           <br/>


        </Fragment >
    )
}

export default Caja


import React, { Fragment } from 'react'
import { celiacos } from '../celiacos.json'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
const Celiaco = () => {
    return (
        <Fragment>
            {
                celiacos.map((element, i) => {
                    return (
                        <Col sm='4'>
                            <Card>
                                <CardImg src={element.imagen} alt="" />
                                <CardBody>
                                    <p key={i}>{element.titulo} ${element.precio} </p>
                                    <button > Agregar</button>
                                </CardBody>
                            </Card>
                        </Col>

                    );
                })

            }

        </Fragment >
    )
}

export default Celiaco

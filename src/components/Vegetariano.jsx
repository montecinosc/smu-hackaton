import React, { Fragment } from 'react'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import foto from '../img/prueba.jpg'
const Vegetariano = () => {
    return (

        <div className="card">
            <img className="card-img-top" src={foto} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    )
}

export default Vegetariano

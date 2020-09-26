import React, { Fragment } from 'react'
import "./muro.css";
import Carrusel from './Carrusel'
import MenuPrincipal from './Menu'
import Footer from './Footer'

const Muro = () => {
    return (
    
        <Fragment>
            <MenuPrincipal/>
            <Carrusel/>
            <Footer/>
        </Fragment>
        
    )
}

export default Muro


import React from 'react'
import { Link } from 'react-router-dom'
import pan from '../../Assets/img/Pan.png'
import realzar from '../../Assets/img/realizar.png'
import sarro from '../../Assets/img/sarro.png'
import fondo from '../../Assets/img/fondo.png'


const Tips = () => {
    return (
        <div id="carouselExampleControls " className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active " >
            <img className="d-block w-50" src={pan} alt="First slide"  />
          </div>
          <div className="carousel-item">
       
            <img className="d-block w-50 " src={realzar} alt="Second slide"/>
            
          </div>
          <div className="carousel-item">
        
            <img className="d-block w-50" src={sarro} alt="Third slide"/>
         
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Tips

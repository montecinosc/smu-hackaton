import React from 'react'

import { Container } from 'reactstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pan from '../../Assets/img/Pan.png'
import realzar from '../../Assets/img/realizar.png'
import sarro from '../../Assets/img/sarro.png'
import guirnarlas from '../../Assets/img/guirnarlas.png'
import '.././../Style/Tips.css'


const Tips = () => {
    return (
      <div className='padre'>
  <Carousel autoPlay className='prueba  '>
        <div className='padre'>
            <img alt="" src={pan} />
        
        </div>
        <div>
            <img alt="" src={realzar} />
        
        </div>
        <div>
            <img alt="" src={sarro} />
         
        </div>
        <div>
            <img alt="" src={guirnarlas} />
            
        </div>
       
    </Carousel>
      </div>
    )
}

export default Tips

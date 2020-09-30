import React from 'react';
import '../../Style/carrusel.css' 

const Carrusel = () => {
  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active main-carrusel carrusel-item-1 ">
          <div className="d-flex text-right align-items-center justify-content-center inherit">
          <h2 className="p-5">Conoce nuestra <br/><span className="text-danger">receta del mes </span></h2>
          </div>
        </div>
        <div className="carousel-item main-carrusel carrusel-item-2 ">
          <div className="d-flex text-left align-items-center justify-content-start inherit">
          <h2 className="p-5">Descubre nuestras recetas <br/><span className="text-danger">más recomendadas</span></h2>
          </div>
        </div>
        <div className="carousel-item main-carrusel carrusel-item-3 " >
          <div className="d-flex text-center align-items-center justify-content-center inherit">
          <h2 className="p-5 ">¡Te invitamos a conocer las recetas <br/><span className="text-danger">ricas y fáciles </span>que Nacho Román tiene para ti!</h2>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Siguiente</span>
      </a>
    </div>

  )
}

export default Carrusel
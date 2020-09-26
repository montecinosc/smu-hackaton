import React from 'react'
import booklogo from "../Assets/img/booklogo.jpg"
import Fruits from "../Assets/img/Fruits.png"
import '../Style/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-5">
            <img className="logo" src={booklogo} />
          </div>
          <div className="col">
            Menú Principal
            <li>UNIMARC</li>
            <li>Club Ahorro</li>
            <li>Locales</li>
            <li>Recetas</li>
          </div>
          <div className="col">
            Redes Sociales
            <li><i className="icofont-facebook"></i> <a href="https://www.facebook.com/unimarc">Facebook</a></li>
            <li><i className="icofont-youtube-play"></i> <a href="https://www.youtube.com/user/unimarccl">Youtube</a></li>
            <li><i className="icofont-twitter"></i> <a href="https://twitter.com/unimarc">Twitter</a></li>
          </div>
          <div className="col">
            Servicio al Cliente
            <li><i className="icofont-ui-call"></i>600 600 0025</li>
            <li><i className="icofont-mail"></i>contacto.unimarc@unimarc.cl</li>
          </div>
        </div>
      </div>
      <img className="footer-img" src={Fruits} />
    </footer>
  )
}

export default Footer
import React from 'react'
import booklogo from "../Assets/img/booklogo.jpg"
import '../Style/Menu.css';

const MenuPrincipal = () => {
  return (

    <div class="container">
      <div class="row">
        <div class="col-7">
          <img src={booklogo} className="logo" alt="logo" />
        </div>
        <div class="col-1 m-2">
          <a href="https://www.unimarc.cl/">HOME</a>
        </div>
        <div class="col-1 m-2">
          CLUB AHORRO
        </div>
        <div class="col-1 m-2">
          LOCALES
        </div>
        <div class="col-1 m-2">
          RECETAS
        </div>
      </div>
    </div>

  )
}

export default MenuPrincipal
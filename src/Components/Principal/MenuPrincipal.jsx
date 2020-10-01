import React from 'react'
import booklogo from "../../Assets/img/booklogo.jpg"
import '../../Style/Menu.css';

const MenuPrincipal = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand logo centering" href="#"><img className="logo" src={booklogo} alt="logo" /></a>
        <div className="collapse navbar-collapse justify-content-end centering" id="navbarTogglerDemo01">
          <ul className="navbar-nav m-0 text-center">
            <li className="nav-item active">
              <a className="nav-link" href="./">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://www.clubahorro.cl/">CLUB AHORRO</a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link" href="https://www.unimarc.cl/locales_unimarc/">LOCALES</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">RECETAS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MenuPrincipal
import React from 'react'
import '../../Style/buscador.css'
import '../../Assets/icofont/icofont.min.css'

const BarraBusqueda = () => {
    return (
        <form class="form-inline mr-auto d-flex justify-content-end">
        <input class="form-control mr-sm-2" type="text" placeholder= "&#xed1b; Buscar por palabra clave" aria-label="Search" />
        <button class="btn btn-outline-success btn-rounded btn-sm my-0" type="submit">Buscar</button>
      </form>
    )
}

export default BarraBusqueda

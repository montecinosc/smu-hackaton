import React from 'react'

const BarraBusqueda = () => {
    return (
        <form class="form-inline mr-auto">
        <input class="form-control mr-sm-2" type="text" placeholder="Buscar por palabra clave" aria-label="Search" />
        <button class="btn btn-outline-success btn-rounded btn-sm my-0" type="submit">Buscar</button>
      </form>
    )
}

export default BarraBusqueda

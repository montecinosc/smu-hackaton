
import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import { Redirect } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
const pruebaBusqueda = () => {

    const data = [
        {
            key: 'coliflor',
            value: 'coliflor',
        },
        {
            key: 'polenta',
            value: 'polenta',
        },
        {
            key: 'chilena',
            value: 'chilena',
        },

    ]
    const buscador = () => {
        console.log("buscando")
    }

    return (
        <ReactSearchBox
            placeholder="Search for John, Jane or Mary"
            data={data}

            onSelect={record =>
                window.location = "./" + record.value}


            onFocus={() => {
                console.log('This function is called when is focussed')
            }}
            onChange={
                value => console.log("buscadooooor", value)

            }
            fuseConfigs={{
                threshold: 0.05,

            }}
            value="John"
        />
    )
}


export default pruebaBusqueda
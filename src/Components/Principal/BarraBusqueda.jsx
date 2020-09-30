import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import '../../Style/buscador.css'
import '../../Assets/icofont/icofont.min.css'
import ReactSearchBox from 'react-search-box'
/*import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';*/



const peopleDos = ['coliflor', 'polenta', 'lechuga', 'helado', 'carne']

const BarraBusqueda = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = peopleDos.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


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
      key: 'polenta',
      value: 'budin',
    },

    {
      key: 'charquican',
      value: 'papa',
    },


  ]
  return (
    <Fragment>
      <form className="form-inline mr-auto d-flex justify-content-end">
        <ReactSearchBox
          placeholder="Busca tu receta"
          data={data}

          onSelect={record =>
            window.location = "./" + record.key}


          onFocus={() => {
            console.log('This function is called when is focussed')
          }}
          onChange={
            value => console.log("buscadooooor", value)

          }
          fuseConfigs={{
            threshold: 0.05,

          }}

        />
        <button className="btn btn-outline-success btn-rounded btn-sm my-0" type="submit">Buscar</button>
      </form>



    </Fragment>
  );
}


export default BarraBusqueda


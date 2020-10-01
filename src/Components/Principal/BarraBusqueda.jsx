import React, { Fragment } from "react";
import "../../Style/buscador.css";
import "../../Assets/icofont/icofont.min.css";
import ReactSearchBox from "react-search-box";

const peopleDos = ["coliflor", "polenta", "lechuga", "helado", "carne"];

const BarraBusqueda = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = peopleDos.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const data = [
    {
      key: "coliflor",
      value: "coliflor",
    },
    {
      key: "polenta",
      value: "polenta",
    },
    {
      key: "polenta",
      value: "budin",
    },

    {
      key: "charquican",
      value: "papa",
    },
    {
      key: "pimentonRelleno",
      value: "pimenton",
    },
    {
      key: "sopaipilla",
      value: "zapallo",
    },
    {
      key: "ratatouille",
      value: "berenjena",
    },
    {
      key: "garbanzo",
      value: "espinaca",
    },
  ];
  return (
    <Fragment>
      <div className="search-container p-4">
        <form className="row p-4 align-items-center">
          <div className="col-9 col-sm-11">
            <ReactSearchBox
              placeholder="&#xed1b; Busca tu receta o ingrediente"
              data={data}
              onSelect={(record) => (window.location = "./" + record.key)}
              onFocus={() => {
                console.log("This function is called when is focussed");
              }}
              onChange={(value) => console.log("buscadooooor", value)}
              fuseConfigs={{
                threshold: 0.05,
              }}
            />
          </div>
          <div className="col-1 border-left">
            <button
              className="btn btn-color btn-outline-success btn-rounded btn-sm my-0 d-flex"
              type="submit"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default BarraBusqueda;

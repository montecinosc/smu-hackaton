import React, { useState } from "react";
import {
  Container,
  Table,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import polenta from "../../Assets/img//menupolenta.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/Menu";
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";
import "../../Style/Celiaco.css";

const CeliacoBudinPolenta = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <>
      <Menu />
      <Carrusel />
      <Container>
        <h3 className="text-center">Budín de Polenta</h3>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={polenta} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ingredientes</h5>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Azúcar grado 2 Unimarc 1 kg</td>
                      <td>1 taza</td>
                    </tr>
                    <tr>
                      <td>Huevo grande blanco Unimarc</td>
                      <td>3 un.</td>
                    </tr>
                    <tr>
                      <td>Levadura en polvo</td>
                      <td>1 cucharada</td>
                    </tr>
                    <tr>
                      <td>Limón Granel</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Polenta Carozzi</td>
                      <td>200 gr.</td>
                    </tr>
                    <tr>
                      <td>Aceite</td>
                      <td>A Gusto</td>
                    </tr>
                    <tr>
                      <td>Leche</td>
                      <td>1 Vaso </td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <Row>
                    <div>
                      <img src={reloj} alt="reloj" /> <span>50 min</span>
                    </div>
                    <div>
                      <img src={tenedor} alt="tenedor" />{" "}
                      <span> 4 porciones </span>
                    </div>
                    <div>
                      <img src={libreGluten} alt="libreGluten" />
                      <span> Libre de gluten </span>
                    </div>
                    <div>
                      <img
                        style={{ cursor: "pointer" }}
                        id="Popover1"
                        src={info}
                        alt="información nutricional"
                      />

                      <span>Información Nutricional</span>

                      <Popover
                        placement="bottom"
                        isOpen={popoverOpen}
                        target="Popover1"
                        toggle={toggle}
                      >
                        <PopoverHeader>
                          Calorías y Macronutrientes
                        </PopoverHeader>
                        <PopoverBody>
                          <Table borderless>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <i className="icofont-fire-burn"></i>
                                </th>
                                <td>Calorías</td>
                                <td>667</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i className="icofont-bread"></i>
                                </th>
                                <td>Carbohidratos</td>
                                <td>92.4 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i className="icofont-chicken-fry"></i>
                                </th>
                                <td>Proteínas</td>
                                <td>10.4 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i className="icofont-water-drop"></i>
                                </th>
                                <td>Lípidos</td>
                                <td>30.7grs</td>
                              </tr>
                            </tbody>
                          </Table>
                        </PopoverBody>
                      </Popover>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <h4> Preparación</h4>
          <p className="text-sm-left ">
            <br />
            Empezamos precalentando el horno a 160º.
            <br />
            <br />
            Aromatizamos la leche con pedacitos de cáscara de limón. Ponemos la
            leche con las cáscaras a fuego medio por unos 10 minutos. Luego
            colamos y dejamos enfriar.
            <br />
            <br />
            En un bowl, ponemos los 3 huevos y los batimos a espumoso.
            <br />
            <br />
            Luego, incorporamos el azúcar, media taza de aceite, la leche y
            seguir revolviendo
            <br />
            <br />
            Agregamos la polenta de a poco sin dejar de batir y al final le
            añadimos la cucharadita de levadura.
            <br />
            <br />
            Después, aceitamos una fuente con papel absorbente e incorporar la
            mezcla. Luego, ponemos la mezcla al horno por 40 minutos a 150ºC.
            <br />
            <br />
            Luego, sacamos del horno, cortamos y emplatamos. ¡Ahora a disfrutar
            este rico plato especialmente para celíacos!
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section className="videos">
          <iframe
            src="https://www.youtube.com/embed/hQ5O8B0Znms"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video ñoquis"
            text-align="center"
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default CeliacoBudinPolenta;

import React, { useState } from "react";
import {
  Container,
  Table,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import charquican from "../../Assets/img/charquican.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import vegetariano from "../../Assets/img/vegetariano.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/Menu";
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";

const Charquican = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <Menu />
      <Carrusel />
      <Container>
        <h3 className="text-center">Charquican Vegetariano</h3>
        <div class="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={charquican} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ingredientes</h5>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Ensalada primavera Frutos del Maipo</td>
                      <td>500 gr.</td>
                    </tr>
                    <tr>
                      <td>Acelga Bolsa</td>
                      <td>500 gr.</td>
                    </tr>
                    <tr>
                      <td>Huevo Blanco granel Unimarc</td>
                      <td>4 un.</td>
                    </tr>
                    <tr>
                      <td>Papa granel kg</td>
                      <td>2 un.</td>
                    </tr>
                    <tr>
                      <td>Ají de color</td>
                      <td>A Gusto</td>
                    </tr>
                    <tr>
                      <td>Cebolla</td>
                      <td>1/2 un.</td>
                    </tr>
                    <tr>
                      <td>Sal</td>
                      <td>a Gusto</td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <Row>
                    <div>
                      <img src={reloj} alt="reloj" /> <span>35 min</span>
                    </div>
                    <div>
                      <img src={tenedor} alt="tenedor" />{" "}
                      <span> 4 porciones </span>
                    </div>
                    <div>
                      <img src={vegetariano} alt="vegetariano" />
                      <span> Vegetariano </span>
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
                                  <i class="icofont-fire-burn"></i>
                                </th>
                                <td>Calorías</td>
                                <td>308</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-bread"></i>
                                </th>
                                <td>Carbohidratos</td>
                                <td>50.7 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-chicken-fry"></i>
                                </th>
                                <td>Proteínas</td>
                                <td>14 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-water-drop"></i>
                                </th>
                                <td>Lípidos</td>
                                <td>6 grs</td>
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
            Pelar y posteriormente cortar 2 papas en cubitos pequeños e
            incorporarlas en un pocillo con agua y un poco de sal.
            <br />
            <br />
            Para darle más sabor al charquicán, se recomienda preparar un caldo
            de verduras con los ingredientes que tengas en casa. Puede ser con
            una cebolla, acelga, y especias a gusto. Dejar cocinar las verduras
            en una olla con agua hirviendo por 10 minutos a 15 minutos.
            <br />
            <br />
            En otra olla aparte, calentar un poco de aceite y cocinar ½ cebolla
            picada en cubitos por 5 minutos a fuego medio. Incorporar las papas
            y dejar cocer durante 25 minutos.
            <br />
            <br />
            Cortar el tallo de la acelga en pequeños trozos y luego añadirlos a
            la olla de nuestro sofrito junto con las papas y la cebolla. Picar
            una hoja de acelga en tiras delgadas y reservarla.
            <br />
            <br />
            Una vez cocinadas las papas, incorporar la primavera de verduras y
            el caldo a la olla. Agregar las hojas de acelga reservadas
            anteriormente con un toque de ají de color y revolver la mezcla con
            un cucharón.
            <br />
            <br />
            En un sartén, verter un poco de agua hervida y luego incorporar
            cuidadosamente los huevos para cocerlos al agua.
            <br />
            <br />
            Una vez listos los huevos, agregar una porción de charquicán sobre
            los platos y en la superficie añadir el huevo.
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            src="https://www.youtube.com/embed/dlIhyC3nt6o"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="charquican"
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Charquican;

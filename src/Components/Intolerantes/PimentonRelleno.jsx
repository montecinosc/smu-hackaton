import React, { useState } from "react";
import {
  Container,
  Table,
  Row,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import pimentonRelleno from "../../Assets/img/pimentonRelleno.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/Menu";
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";

const PimentonRelleno = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <Menu />
      <Carrusel />
      <Container>
        <h3 className="text-center">Pimentón relleno de cuscús</h3>
        <div class="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={pimentonRelleno} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ingredientes</h5>
                <Table hover>
                  <tbody>
                    <tr>
                      <td>Cousccous Talliani</td>
                      <td>250 gr</td>
                    </tr>
                    <tr>
                      <td>Sofrito Frutos del Maipo</td>
                      <td>150 gr</td>
                    </tr>
                    <tr>
                      <td>Salsa natural  Unimarc</td>
                      <td>200 gr</td>
                    </tr>
                    <tr>
                      <td>Caja huevo grande blanco Unimarc</td>
                      <td>4 unidad</td>
                    </tr>
                    <tr>
                      <td>Pimentón verde</td>
                      <td>2 un.</td>
                    </tr>
                    <tr>
                      <td>Tomate</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Orégano</td>
                      <td>A Gusto</td>
                    </tr>
                     <tr>
                      <td>Pimienta</td>
                      <td>A Gusto</td>
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
                      <Button id="Popover1" type="button" color="white">
                        <img src={info} alt="información nutricional" />
                      </Button>
                      <span>información Nutricional</span>

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
                                <td>562</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-bread"></i>
                                </th>
                                <td>Carbohidratos</td>
                                <td>104 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-chicken-fry"></i>
                                </th>
                                <td>Proteínas</td>
                                <td>21.7 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-water-drop"></i>
                                </th>
                                <td>Lípidos</td>
                                <td>7 grs</td>
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
          <h4> Preparacion</h4>
          <p className="text-sm-left ">
            {" "}
            <br />
            <br />
            Comenzamos lavando nuestros 2 pimentones y los partimos por la mitad, le sacamos las semillas y los raspamos con una cuchara por el centro. Llevamos al horno por 10 minutos a 180°.
            <br />
            <br />
            En un sartén incorporamos un poco de aceite de oliva y agregamos los 150 grs. de sofrito, 100 grs. de la salsa de tomate y revolvemos para formar una salsa. Salpimentamos e incorporamos ½ taza de agua. Si quieres puedes agregar una cucharada de azúcar para bajarle la acidez a la salsa de tomate.
            <br />
            <br />
            En un bowl, agregamos 4 cucharadas de la salsa a los 250 grs. de cuscús y 1 taza y ½ de agua hervida. Tapamos el bowl con papel de plástico por 5 minutos. Con un tenedor vamos soltando el cuscús para que quede bien graneado. Dejamos una taza reservada y al resto le agregamos dos cucharadas más de la salsa de tomate para darle color. Luego rellenamos nuestros pimentones con esta mezcla.
            <br />
            <br />
            Cortamos el tomate en cuadritos y luego le agregamos un poco de ralladura de limón y lo mezclamos con la taza de cuscús que habíamos reservado para formar una pequeña ensalada.
            <br />
            <br />
            Para emplatar, añadimos un poco de la salsa de tomate en el centro de los platos, y encima agregamos una capa de la ensalada de cuscús con tomate. A un lado colocamos los pimentones rellenos y sobre cada uno de ellos montamos 1 huevo frito en agua.
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            width="1090"
            height="600"
            src="https://www.youtube.com/embed/AfXHhbwuNsM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="pimentón relleno"
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default PimentonRelleno;

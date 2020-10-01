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
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";
import Puntuacion from "../Puntuacion";
import compartir from "../../Assets/img/Share.png";
import BarraBusqueda from "../Principal/BarraBusqueda";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import MenuPrincipal from "../Principal/MenuPrincipal";

const Charquican = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const toggle2 = () => setPopoverOpen2(!popoverOpen2);

  const shareUrl = "https://4luquitas.netlify.app/";
  const title = "GitHub";

  return (
    <>
      <MenuPrincipal />
      <Carrusel />
      <BarraBusqueda />
      <Container>
        <h3 className="mt-3 text-center">Charquican Vegetariano</h3>
        <div class="mt-3 card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={charquican} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className=" d-flex flex-row  justify-content-around">
                <h5 className="card-title ">Ingredientes</h5>

                <Puntuacion />

                <img
                  style={{ cursor: "pointer" }}
                  id="Popover2"
                  src={compartir}
                  alt=".."
                />

                <Popover
                  placement="bottom"
                  isOpen={popoverOpen2}
                  target="Popover2"
                  toggle={toggle2}
                >
                  <PopoverHeader> Comparte en :</PopoverHeader>
                  <PopoverBody>
                    <FacebookShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <WhatsappShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                      url={shareUrl}
                      title={title}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </PopoverBody>
                </Popover>
              </div>
              <div className="card-body">

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
                      <td>A Gusto</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <img src={reloj} alt="reloj" /> <span> 35 min</span>
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
                    <span> Información Nutricional</span>

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
                              <td>308</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <i className="icofont-bread"></i>
                              </th>
                              <td>Carbohidratos</td>
                              <td>50.7 grs</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <i className="icofont-chicken-fry"></i>
                              </th>
                              <td>Proteínas</td>
                              <td>14 grs</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <i className="icofont-water-drop"></i>
                              </th>
                              <td>Lípidos</td>
                              <td>6 grs</td>
                            </tr>
                          </tbody>
                        </Table>
                      </PopoverBody>
                    </Popover>
                  </div>
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

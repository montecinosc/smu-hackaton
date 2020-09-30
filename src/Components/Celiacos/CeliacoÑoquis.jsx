import React, { useState } from "react";
import {
  Container,
  Table,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import ñoquis from "../../Assets/img/ñoquisdecoliflor.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/Menu";
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";
import Caja from "../Principal/Caja";
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

const CeliacoÑoquis = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const toggle2 = () => setPopoverOpen2(!popoverOpen2);

  const shareUrl = "https://4luquitas.netlify.app/%C3%B1oquis";
  const title = "Ñoquis Coliflor ";

  return (
    <>
      <Menu />
      <Carrusel />
      <BarraBusqueda />
      <Container>
        <h3 className="mt-3 text-center">Ñoquis de Coliflor</h3>
        <div class="mt-3 card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={ñoquis} className="card-img" alt="..." />
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
                      <td>Harina de arroz Tucapel</td>
                      <td>500 gr</td>
                    </tr>
                    <tr>
                      <td>Coliflor envasada</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Espinaca Bolsa</td>
                      <td>500 gr.</td>
                    </tr>
                    <tr>
                      <td>Queso rallado parmesano Colun</td>
                      <td>40 gr.</td>
                    </tr>
                    <tr>
                      <td>Aceite de Oliva</td>
                      <td>a Gusto</td>
                    </tr>
                    <tr>
                      <td>Huevo</td>
                      <td>1 un.</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="d-flex flex-row justify-content-between">
                    <div >
                      <img src={reloj} alt="reloj" /> <span> 50 min</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <h4> Preparación</h4>
          <p className="text-sm-left ">
            <br />
            Comenzamos rallando la coliflor cruda y luego la cocinamos por 3
            minutos en agua hervida y añadimos una pizca de sal. Una vez cocida,
            la retiramos de la olla, la colamos y la dejamos enfriar.
            <br />
            <br />
            En un bowl, incorporamos la coliflor cocinada y agregamos 5
            cucharadas grandes de harina de arroz, una yema de huevo y la mitad
            del queso rallado, luego revolvemos con las manos para formar la
            masa. Sabremos que está lista cuando se desprenda completamente de
            los dedos.
            <br />
            <br />
            Una vez lista la masa, hacemos pequeñas bolitas con las manos y las
            vamos pasando por un tenedor con harina para que quede con la forma
            del ñoqui. Llevamos al congelador por 5 minutos para que queden más
            firmes.
            <br />
            <br />
            Echamos a cocer nuestros ñoquis en una olla con agua hirviendo y sal
            por 3 minutos. Retiramos a medida que los ñoquis van subiendo hasta
            la superficie del agua.
            <br />
            <br />
            Cortamos la espinaca a lo largo y la separamos en dos partes, una
            para preparar la salsa y la otra para sofreír los ñoquis. Salteamos
            la primera mitad con un poco de aceite de oliva y salpimentamos.
            Llevamos la espinaca salteada a la procesadora con 1 taza de agua
            con la se coció la coliflor y la procesamos. Una vez lista la salsa,
            la calentamos en la sartén mientras salteamos la otra mitad de las
            espinacas que teníamos reservadas y agregamos los ñoquis cocidos.
            <br />
            <br />
            Para emplatar, ponemos dos cucharadas de la salsa de espinaca en el
            fondo y encima agregamos los ñoquis. Agregamos una cucharada más de
            salsa sobre los ñoquis y damos el toque final con queso rallado.
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            src="https://www.youtube.com/embed/8Fg1mDHN4w4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="video ñoquis"
          ></iframe>
        </section>
      </Container>
      <Caja lista="ñoquis" />
      <Footer />
    </>
  );
};

export default CeliacoÑoquis;

import React, { useState } from "react";
import {
  Container,
  Table,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import pimentonRelleno from "../../Assets/img/pimentonRelleno.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import sinLactosa from "../../Assets/img/Intolerante.png";
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


const PimentonRelleno = (props) => {

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
        <h3 className="mt-3 text-center">Pimentón relleno de cuscús</h3>
        <div class="mt-3 card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={pimentonRelleno} className="card-img" alt="..." />
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
                      <td>Cousccous Talliani</td>
                      <td>250 gr.</td>
                    </tr>
                    <tr>
                      <td>Sofrito Frutos del Maipo</td>
                      <td>150 gr.</td>
                    </tr>
                    <tr>
                      <td>Salsa natural Unimarc</td>
                      <td>200 gr.</td>
                    </tr>
                    <tr>
                      <td>Caja huevo grande blanco Unimarc</td>
                      <td>4 un.</td>
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
                <div className="d-flex flex-row justify-content-between">

                  <div>
                    <img src={reloj} alt="reloj" /> <span> 40 min</span>
                  </div>
                  <div>
                    <img src={tenedor} alt="tenedor" />{" "}
                    <span> 4 porciones </span>
                  </div>
                  <div>
                    <img src={sinLactosa} alt="sin lactosa" />
                    <span> Sin Lactosa </span>
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
                              <td>353</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <i class="icofont-bread"></i>
                              </th>
                              <td>Carbohidratos</td>
                              <td>55.6 grs</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <i class="icofont-chicken-fry"></i>
                              </th>
                              <td>Proteínas</td>
                              <td>15.7 grs</td>
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
            Comenzamos lavando nuestros 2 pimentones y los partimos por la
            mitad, le sacamos las semillas y los raspamos con una cuchara por el
            centro. Llevamos al horno por 10 minutos a 180°.
            <br />
            <br />
            En un sartén incorporamos un poco de aceite de oliva y agregamos los
            150 grs. de sofrito, 100 grs. de la salsa de tomate y revolvemos
            para formar una salsa. Salpimentamos e incorporamos ½ taza de agua.
            Si quieres puedes agregar una cucharada de azúcar para bajarle la
            acidez a la salsa de tomate.
            <br />
            <br />
            En un bowl, agregamos 4 cucharadas de la salsa a los 250 grs. de
            cuscús y 1 taza y ½ de agua hervida. Tapamos el bowl con papel de
            plástico por 5 minutos. Con un tenedor vamos soltando el cuscús para
            que quede bien graneado. Dejamos una taza reservada y al resto le
            agregamos dos cucharadas más de la salsa de tomate para darle color.
            Luego rellenamos nuestros pimentones con esta mezcla.
            <br />
            <br />
            Cortamos el tomate en cuadritos y luego le agregamos un poco de
            ralladura de limón y lo mezclamos con la taza de cuscús que habíamos
            reservado para formar una pequeña ensalada.
            <br />
            <br />
            Para emplatar, añadimos un poco de la salsa de tomate en el centro
            de los platos, y encima agregamos una capa de la ensalada de cuscús
            con tomate. A un lado colocamos los pimentones rellenos y sobre cada
            uno de ellos montamos 1 huevo frito en agua.
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
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

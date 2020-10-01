import React, { useState } from "react";
import {
  Container,
  Table,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import garbanzos from "../../Assets/img/garbanzos.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import vegano from "../../Assets/img/vegano.png";
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
import '../../Style/Recetas.css'

const Garbanzos = () => {
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
        <h3 className="mt-3 text-center">Garbanzos con Curry de Espinacas</h3>
        <div class="mt-3 card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={garbanzos} className="card-img" alt="..." />
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
                      <td>Garbanzos Guasil Tetra</td>
                      <td>380 gr.</td>
                    </tr>
                    <tr>
                      <td>Espinaca bolsa</td>
                      <td>500 gr.</td>
                    </tr>
                    <tr>
                      <td>Curry Gourmet 15 gr</td>
                      <td>1 ½ cdta.</td>
                    </tr>
                    <tr>
                      <td>Ajo en polvo Marco Polo 15 gr</td>
                      <td>1 cda.</td>
                    </tr>
                    <tr>
                      <td>Cilantro</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Tomate primera Granel</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Cebolla Granel</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Aceite y Aliños</td>
                      <td>A Gusto</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <img src={reloj} alt="reloj" /> <span> 50 min</span>
                  </div>
                  <div>
                    <img src={tenedor} alt="tenedor" />{" "}
                    <span> 4 porciones </span>
                  </div>
                  <div>
                    <img src={vegano} alt="vegano" />
                    <span> Vegano </span>
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
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        <Table borderless>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Calorias</td>
                              <td>142</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>CarboHidratos</td>
                              <td>21 grs</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Proteinas</td>
                              <td>9.8 grs</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Lipidos</td>
                              <td>2.7grs</td>
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
            Empezamos cortando la cebolla en cubitos y luego la ponemos a
            sofreír en una olla con aceite. Condimentamos con pimienta, sal y
            ajo en polvo y cocinamos durante 5 a 8 minutos, hasta que la cebolla
            tome un color dorado.
            <br />
            <br />
            Incorporamos los garbanzos remojados del día anterior y agregamos 1
            taza y media de agua hirviendo. Dejamos cocinar durante 20 a 25
            minutos o hasta que estén blandos.
            <br />
            <br />
            Cortamos el tomate en cubos y lo cocinamos en un sartén con aceite
            caliente hasta que forme una pasta.
            <br />
            <br />
            Cortamos la espinaca en tiras delgadas e incorporamos al tomate.
            Luego, le agregamos un poco del caldo que se está cocinando en los
            garbanzos para que no se seque y le añadimos una cucharada de curry
            en polvo. Dejamos cocinar durante unos 5 minutos y rectificamos la
            sazón.
            <br />
            <br />
            Luego, agregamos la mitad del contenido del sartén a la olla de
            garbanzos, revolvemos y emplatamos con el resto de nuestro curry y
            un poco de cilantro para decorar. ¡Ya tenemos el plato listo para
            disfrutar en familia!
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
           className='videos'
            src="https://www.youtube.com/embed/S1R1giZyyxU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Garbanzos con Curry de Espinacas"
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Garbanzos;

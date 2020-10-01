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
import ratatouille from "../../Assets/img/ratatouille.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import vegano from "../../Assets/img/vegano.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/MenuPrincipal";
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

const Ratatouille = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const toggle2 = () => setPopoverOpen2(!popoverOpen2);

  const shareUrl = "https://4luquitas.netlify.app/";
  const title = "GitHub";

  return (
    <>
      <Menu />
      <Carrusel />
      <BarraBusqueda />
      <Container>
        <h3 className="mt-3 text-center">Ratatouille Verduras Guisadas</h3>
        <div class="mt-3 card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={ratatouille} className="card-img" alt="..." />
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
                      <td>Mix de pimentones Frutos del Maipo</td>
                      <td>150 gr</td>
                    </tr>
                    <tr>
                      <td>Salsa natural Unimarc B</td>
                      <td>200 gr.</td>
                    </tr>
                    <tr>
                      <td>Zapallo Italiano</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Tomate Primera</td>
                      <td>2 un.</td>
                    </tr>
                    <tr>
                      <td>Berenjena</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Ajo</td>
                      <td>1 diente</td>
                    </tr>
                    <tr>
                      <td>Aceite,Orégano,sal</td>
                      <td>A Gusto</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <img src={reloj} alt="reloj" /> <span> 60 min</span>
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
                              <td>106</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>CarboHidratos</td>
                              <td>18 grs</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Proteinas</td>
                              <td>4 grs</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Lipidos</td>
                              <td>3.6 grs</td>
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
            Partimos cortando en láminas delgadas 1 berenjena, 2 zapallos
            italianos y 2 tomates. Luego sobre una asadera ordenarlas
            intercaladamente.
            <br />
            <br />
            Picar el mix de pimentones y mezclarlo con un diente de ajo trozado,
            orégano y sal. Inmediatamente saltear la mezcla en un sartén con
            aceite de oliva a fuego medio.
            <br />
            <br />
            Agregar la mezcla de pimentones para luego seguir con la salsa de
            tomate en la asadera con las láminas. A continuación, cubrir la
            preparación con papel alusa para luego llevar al horno durante 30 a
            35 minutos a 180°
            <br />
            <br />
            Retirar las verduras guisadas del horno y servirlas en cada uno de
            los platos.
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            src="https://www.youtube.com/embed/6SNYzrbjICs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Ratatouille"
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Ratatouille;

import React, { useState } from "react";
import {
  Container,
  Table,
  Popover,
  PopoverHeader,
  PopoverBody, Button
} from "reactstrap";
import polenta from "../../Assets/img//menupolenta.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";
import "../../Style/Celiaco.css";
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
import MenuPrincipal from "../Principal/MenuPrincipal";
import '../../Style/Recetas.css'
import receta from '../../Assets/img/budinpolenta.pdf'

const CeliacoBudinPolenta = (props) => {

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const toggle2 = () => setPopoverOpen2(!popoverOpen2);

  const shareUrl = "https://4luquitas.netlify.app/polenta";
  const title = "Budin Polenta ";


  return (
    <>
      <MenuPrincipal />
      <Carrusel />
      <BarraBusqueda />
      <Container>
        <h3 className="mt-3 text-center">Budín de Polenta</h3>
        <div className="mt-3  card mb-3 ">
          <div className="row no-gutters ">
            <div className="col-md-4">
              <img src={polenta} className="card-img" alt="..." />
              <Button className="botonDescargar"> <a href={receta} download="BudinPolenta" className="botonDescargaA"> Descarga</a></Button>
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
                <div className="d-flex flex-row justify-content-between pilas">
                  <div>
                    <img className="d-block" src={reloj} alt="reloj" /> <span className="small">   50 min</span>
                  </div>
                  <div>
                    <img className="d-block" src={tenedor} alt="tenedor" />{" "}
                    <span className="small">  4 porciones </span>
                  </div>
                  <div>
                    <img className="d-block" src={libreGluten} alt="libreGluten" />
                    <span className="small">  Libre de gluten </span>
                  </div>
                  <div>
                    <img
                      className="d-block"
                      style={{ cursor: "pointer" }}
                      id="Popover1"
                      src={info}
                      alt="información nutricional"
                    />

                    <span className="small"> Información Nutricional</span>

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

                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <h4 className="m-3"> Preparación</h4>
          <p className="text-sm-left m-3">
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
          <p className="m-3"> A continuación puedes ver el video con la preparación </p>
        </section>
        <section className=" m-3">
          <iframe
            className='videos'
            src="https://www.youtube.com/embed/hQ5O8B0Znms"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video ñoquis"
            text-align="center"
          ></iframe>
        </section>
      </Container>
      <Caja lista="polenta" />
      <Footer />
    </>
  );
};

export default CeliacoBudinPolenta;

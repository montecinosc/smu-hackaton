import React, { useState } from "react";
import {
  Container,
  Table,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import sopaipillasPasadas from "../../Assets/img/sopaipillasPasadas.png";
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

const SopaipillasPasadas = (props) => {
 
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
        <h3 className="mt-3 text-center">Sopaipillas Pasadas</h3>
        <div class="mt-3 card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={sopaipillasPasadas} className="card-img" alt="..." />
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
                      <td>Zapallo cubo congelado Frutos del Maipo</td>
                      <td>400 gr.</td>
                    </tr>
                    <tr>
                      <td>Harina sin polvos de hornear</td>
                      <td>400 gr.</td>
                    </tr>
                    <tr>
                      <td>Manteca</td>
                      <td>20 gr.</td>
                    </tr>
                    <tr>
                      <td>Chancaca</td>
                      <td>150 gr.</td>
                    </tr>
                    <tr>
                      <td>Polvos de Hornear</td>
                      <td>1 cdta.</td>
                    </tr>
                    <tr>
                      <td>Maicena</td>
                      <td>A Gusto</td>
                    </tr>
                    <tr>
                      <td>Bastón de Canela</td>
                      <td>A Gusto</td>
                    </tr>
                    <tr>
                      <td>Cáscara de Naranja</td>
                      <td>A Gusto</td>
                    </tr>
                    <tr>
                      <td>Aceite y Sal </td>
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
                                <td>577</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-bread"></i>
                                </th>
                                <td>Carbohidratos</td>
                                <td>115 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-chicken-fry"></i>
                                </th>
                                <td>Proteínas</td>
                                <td>11.88 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-water-drop"></i>
                                </th>
                                <td>Lípidos</td>
                                <td>6.1 grs</td>
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
          <h4> Preparacion</h4>
          <p className="text-sm-left ">
            <br />
            Remover la corteza del zapallo y cortarlo en cubos pequeños. Dejar
            cocer por ocho minutos en una olla con agua hirviendo.
            <br />
            <br />
            En otra olla con agua caliente, agregar un pan de chancaca, bastones
            de canela a gusto y una cáscara de naranja limpia (sin las partes
            blancas). Una vez disuelta la chancaca, agregar maicena hasta
            obtener una consistencia viscosa.
            <br />
            <br />
            Una vez cocido el zapallo, moler y agregar a un envase con la
            harina, manteca y polvos de hornear. Mezclar y proceder al amasado.
            En caso que la masa necesite hidratarse más, usar el agua del
            zapallo.
            <br />
            <br />
            Amasar en forma envolvente y agregar una pizca de sal a la masa. Una
            vez terminado el proceso de amasado, estirar la masa de forma
            cilíndrica para cortar las porciones.
            <br />
            <br />
            Dar forma circular a las sopaipillas y hacer huequitos con el
            tenedor, para que la masa respire.
            <br />
            <br />
            Luego en un sartén agregar aceite y temperar para freír las
            sopaipillas.
            <br />
            <br />
            Cuando las sopaipillas estén fritas y la chancaca esté viscosa,
            introducir las sopaipillas en la olla con chancaca para remojarlas.
            <br />
            <br />
            Aparte, cortar una cáscara de naranja en tiras muy finas y freírlas
            con un poco de azúcar
            <br />
            <br />
            Finalmente, servir las sopaipillas remojadas en chancaca y colocar
            las tiras de naranja frita arriba, realzando su sabor y decoración.
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            src="https://www.youtube.com/embed/MXBVni4nAqc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="sopaipillas pasadas"
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default SopaipillasPasadas;

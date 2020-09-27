import React,{ useState }from "react";
import { Container, Table, Row,  
  Button,
  Popover,
  PopoverHeader,
  PopoverBody, } from "reactstrap";
import ñoquis from "../../Assets/img/ñoquisdecoliflor.jpg";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/Menu";
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";

const CeliacoÑoquis = (props) => {

  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
    <Menu />
      <Carrusel />
      <Container>
        <h3 className="text-center">Ñoquis de Coliflor</h3>
        <div class="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={ñoquis} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ingredientes</h5>
                <Table hover>
                  <tbody>
                    <tr>
                      <td>Harina de arroz Tucapel</td>
                      <td>500 gr</td>
                    </tr>
                    <tr>
                      <td>Coliflor envasada</td>
                      <td>unidad</td>
                    </tr>
                    <tr>
                      <td>Espinaca Bolsa</td>
                      <td>500 gr</td>
                    </tr>
                    <tr>
                      <td>Queso rallado parmesano Colun</td>
                      <td>40 gr</td>
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
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>
                          <Table borderless>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Calorias</td>
                                <td>545</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>CarboHidratos</td>
                                <td>106 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Proteinas</td>
                                <td>21 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Lipidos</td>
                                <td>4.5grs</td>
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
            width="1090"
            height="600"
            src="https://www.youtube.com/embed/8Fg1mDHN4w4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title='video ñoquis'
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default CeliacoÑoquis;

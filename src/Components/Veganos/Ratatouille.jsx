import React,{ useState }from "react";
import { Container, Table, Row,  
  Button,
  Popover,
  PopoverHeader,
  PopoverBody, } from "reactstrap";
import ratatouille from "../../Assets/img/ratatouille.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/Menu"
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";

const Ratatouille = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen)
  return (
    <>
    <Menu />
    <Carrusel />
      <Container>
        <h3 className="text-center">Ratatouille Verduras Guisadas</h3>
        <div class="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={ratatouille} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ingredientes</h5>
                <Table hover>
                  <tbody>
                    <tr>
                      <td>Mix de pimentones Frutos del Maipo</td>
                      <td>150 g</td>
                    </tr>
                    <tr>
                      <td>Salsa natural Unimarc B</td>
                      <td>200 g.</td>
                    </tr>
                    <tr>
                      <td>Zapallo Italiano</td>
                      <td>1 un</td>
                    </tr>
                    <tr>
                      <td>Tomate Primera</td>
                      <td>Granel kg.</td>
                    </tr>
                    <tr>
                      <td>Berenjena</td>
                      <td>Granel unidad.</td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <Row>
                    <div>
                      <img src={reloj} alt="reloj" /> <span>60 min</span>
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
            los platoso
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            width="1090"
            height="600"
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

import React from "react";
import { Container, Table, Row } from "reactstrap";
import ñoquis from "../../Assets/img/ñoquisdecoliflor.jpg";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";

const CeliacoBudinPolenta = () => {
  return (
    <>
      <Container>
        <h3 className="text-center">Budín de Polenta</h3>
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
                      <td>Azúcar grado 2 Unimarc 1 kg</td>
                      <td>1 taza</td>
                    </tr>
                    <tr>
                      <td>Levadura en polvo</td>
                      <td>1 cucharada</td>
                    </tr>
                    <tr>
                      <td>Limón Granel</td>
                      <td>1 un</td>
                    </tr>
                    <tr>
                      <td>Polenta Carozzi</td>
                      <td>200 gr</td>
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
                      <img src={info} alt="info" />
                      <span> Informacion Nutricional</span>
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
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            width="1090"
            height="600"
            src="https://www.youtube.com/embed/hQ5O8B0Znms"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="video ñoquis"
          ></iframe>
        </section>
      </Container>
    </>
  );
};

export default CeliacoBudinPolenta;


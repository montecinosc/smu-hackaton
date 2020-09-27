import React from "react";
import { Container, Table, Row } from "reactstrap";
import ñoquis from "../../Assets/img/ñoquisdecoliflor.jpg";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";

const Garbanzos = () => {
  return (
    <>
      <Container>
        <h3 className="text-center">Garbanzos con Curry de Espinacas</h3>
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
                      <td>Garbanzos Guasil Tetra</td>
                      <td>380 gr.</td>
                    </tr>
                    <tr>
                      <td>Espinaca bolsa</td>
                      <td>500 gr.</td>
                    </tr>
                    <tr>
                      <td>Curry Gourmet 15 gr</td>
                      <td>1 ½ cucharada</td>
                    </tr>
                    <tr>
                      <td>Ajo en polvo Marco Polo 15 gr</td>
                      <td>1 cucharada</td>
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
            Empezamos cortando la cebolla en cubitos y luego la ponemos a
            sofreír en una olla con aceite. Condimentamos con pimienta, sal y
            ajo en polvo y cocinamos durante 5 a 8 minutos, hasta que la cebolla
            tome un color dorado.
            <br />
            <br />
            Aromatizamos la leche con pedacitos de cáscara de limón. Ponemos la
            leche con las cáscaras a fuego medio por unos 10 minutos. Luego
            colamos y dejamos enfriar.
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
            width="1090"
            height="600"
            src="https://www.youtube.com/embed/S1R1giZyyxU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Garbanzos con Curry de Espinacas"
          ></iframe>
        </section>
      </Container>
    </>
  );
};

export default Garbanzos;

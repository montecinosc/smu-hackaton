import React from "react";
import { Container, Table,Row } from "reactstrap";
import ñoquis from "../Assets/img/ñoquisdecoliflor.jpg";
import reloj from "../Assets/img/Clock.png";
import tenedor from "../Assets/img/Fork.png";
import libreGluten from "../Assets/img/GlutenFree.png";
import info from "../Assets/img/Info.png";

const CeliacoÑoquis = () => {
  return (
    <>
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
                  <img src={tenedor} alt="tenedor" /> <span> 4 porciones </span>

                </div>
                <div>
                  <img src={libreGluten} alt="libreGluten"  /><span> Libre de gluten </span>

                </div>
                <div>
                  <img src={info} alt="info" /><span> Informacion Nutricional</span>

                </div>
                </Row>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default CeliacoÑoquis;

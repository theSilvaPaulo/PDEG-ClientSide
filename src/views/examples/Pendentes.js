/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PropTypes } from "prop-types";
// reactstrap components
import {
  Button, ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form, FormGroup, Label, Input,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";



const Pendentes = (props) => {
  const [copiedText, setCopiedText] = useState();
  

  const createMaterias = (materias) => {
    return materias.map((prop) => {
      return (
        <Row className="justify-content-center">

          <span className="mb-2"><b>1º período</b></span>

          <ButtonGroup style={{width:"100%"}}>

            <Button color="secondary" onClick="#">

              <Row className="justify-content-center">
                {prop.title}
              </Row>

              <Row className="justify-content-center">
                <small>60h</small>
              </Row>

            </Button>

          </ButtonGroup>
        </Row>
      );
    });
  };
  
  const {  materias } = props;
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              
              <CardBody>
              {/*{createMaterias(materias)}*/}
              
              <Row className="justify-content-center mb-5">

                <span className="mb-2"><b>1º período</b></span>

                <ButtonGroup style={{width:"100%"}}>

                  <Button color="secondary" onClick="#">
                    <Row className="justify-content-center">
                      Estrutura de dados
                    </Row>
                    <Row className="justify-content-center">
                      <small>60h</small>
                    </Row>
                  </Button>
                  <Button color="secondary" onClick="#">
                    <Row className="justify-content-center">
                      Estrutura de dados
                    </Row>
                    <Row className="justify-content-center">
                      <small>60h</small>
                    </Row>
                  </Button>
                 

                </ButtonGroup>
              </Row>
              <Row className="justify-content-center mb-5">

                <span className="mb-2"><b>2º período</b></span>

                <ButtonGroup style={{width:"100%"}}>

                  <Button color="secondary" onClick="#">

                    <Row className="justify-content-center">
                      Estrutura de dados
                    </Row>

                    <Row className="justify-content-center">
                      <small>60h</small>
                    </Row>

                  </Button>
                  
                  
                  <Button color="secondary" onClick="#">
                    <Row className="justify-content-center">
                      Estrutura de dados
                    </Row>
                    <Row className="justify-content-center">
                      <small>60h</small>
                    </Row>
                  </Button>

                </ButtonGroup>
              </Row>
              <Row className="justify-content-center">

                <span className="mb-2"><b>3º período</b></span>

                <ButtonGroup style={{width:"100%"}}>

                  <Button color="secondary" onClick="#">

                    <Row className="justify-content-center">
                      Estrutura de dados
                    </Row>

                    <Row className="justify-content-center">
                      <small>60h</small>
                    </Row>

                  </Button>

                </ButtonGroup>
              </Row>
               
              
              </CardBody>
            </Card>
          </div>
        </Row>

        
      </Container>
    </>
  );
};

export default Pendentes;

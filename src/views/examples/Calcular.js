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



const Calcular = (props) => {
  const [copiedText, setCopiedText] = useState();

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
              
              

              <Form className="mt-3 ">
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Carga horária mínima</Label>
                    <Input type="text" name="email" id="exampleEmail"  />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Carga horária máxima</Label>
                    <Input type="text" name="email" id="exampleEmail"  />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Distância máxima entre períodos</Label>
                    <Input type="text" name="email" id="exampleEmail"  />
                  </FormGroup>
                </Col>
              </Row>

              <Row >
                <Col className="d-flex justify-content-center">
                <Button color="primary" type="submit">Calcular</Button>
                </Col>
              </Row>
              
              </Form>
              </CardBody>
            </Card>
          </div>
        </Row>

        
      </Container>
    </>
  );
};

Calcular.defaultProps = {
  materias: [{}],
};

Calcular.propTypes = {
  // links that will be displayed inside the component
  materias: PropTypes.arrayOf(PropTypes.object),
  
};
export default Calcular;

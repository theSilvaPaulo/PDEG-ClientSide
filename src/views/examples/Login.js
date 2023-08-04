
import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import Axios from 'axios'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  const [loginStatus,setLoginStatus] = useState("");


  let history = useHistory();

  const login = () => {

    Axios.post("http://localhost:3001/api/login", {
        email: email,
        senha: senha,
    }).then((response)=>{
        if(response.data.message){
            setLoginStatus(response.data.message)
            history.push("/admin/index")
        }else{
            setLoginStatus(response.data[0].email)
        }
        console.log(response);
    })

}

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              Login
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              
              <div className="text-center">
                <Button onClick={login} className="my-4" color="primary" type="button">
                  Entrar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Esqueceu a senha?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={() => history.push('/auth/register')}
            >
              <small>Criar nova conta</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;

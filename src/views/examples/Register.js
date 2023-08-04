import React , { useState } from "react";
import Axios from 'axios'
import {useHistory} from "react-router-dom";

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

const Register = () => {

  let history = useHistory();

    const [emailReg,setEmailReg] = useState("");
    const [senhaReg,setSenhaReg] = useState("");

    const register = () => {

        Axios.post("http://localhost:3001/api/checkAccount",{
            email: emailReg,
            senha: senhaReg})
            .then((response)=> {
                if(response.data.length === 0){
                    Axios.post("http://localhost:3001/api/register", {
                    email: emailReg,
                    senha: senhaReg,
                    }).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
                    }) 
                }
            console.log(response);
        }).catch((error) => {
            console.log(error.response);
        });
    }


  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              Criar conta
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Nome" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={(e)=>{setEmailReg(e.target.value)}}
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
                    onChange={(e)=>{setSenhaReg(e.target.value)}}
                  />
                </InputGroup>
              </FormGroup>
              
              
              <div className="text-center">
                <Button onClick = {register} className="mt-4" color="primary" type="button">
                  Cadastrar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;

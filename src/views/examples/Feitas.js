import Axios from "axios";
import Nexts from './Nexts/Nexts';
import React, { useState } from "react";
import { useUnstated } from '@gitbook/unstated';
import { DadosUnstated } from "./dadosunstated";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PropTypes } from "prop-types";
import ThemeButton from "../../components/ThemeButton/ThemeButton"
import DivCheckBox from './DivCheckBox';
import Se from './se';


// reactstrap components
import {
  Button, ButtonGroup,
  Card,
  Collapse,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form, FormGroup, Label, Input,
  UncontrolledTooltip,
  Modal, ModalFooter, ModalHeader, ModalBody
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Feitas = (props) => {

  const toggleCollapseUm = () => setCollapseUm(!collapseUm);
  const toggleCollapseDois = () => setCollapseDois(!collapseDois);
  const toggleCollapseTres = () => setCollapseTres(!collapseTres);
  const toggleCollapseQuatro = () => setCollapseQuatro(!collapseQuatro);
  const toggleCollapseCinco = () => setCollapseCinco(!collapseCinco);
  const toggleCollapseUltimas = () => setCollapseUltimas(!collapseUltimas);

  // Modal open state
  const [modal, setModal] = React.useState(false);
  
  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const [collapseUm, setCollapseUm] = React.useState(false);
  const [collapseDois, setCollapseDois] = React.useState(false);
  const [collapseTres, setCollapseTres] = React.useState(false);
  const [collapseQuatro, setCollapseQuatro] = React.useState(false);
  const [collapseCinco, setCollapseCinco] = React.useState(false);
  const [collapseUltimas, setCollapseUltimas] = React.useState(false);

  const [cargaMinima,setCargaMinima] = useState("");
  const [cargaMaxima,setCargaMaxima] = useState("");
  const [distanciaMaxima,setDistanciaMaxima] = useState("");

  const dados = useUnstated(DadosUnstated);
  var jsonData;

  const fazExcel = async(e) =>{
    
    var XLSX = require("xlsx");

    const file=e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.readFile(data,{sheetRows:300});

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    var matriculaSalva=worksheet['C1'].v;

    //console.log(matriculaSalva);

    jsonData= XLSX.utils.sheet_to_json(worksheet,{range: 'B6:T206'});

  }

  function enviarArquivo(){

    for(var i=0; i<jsonData.length; i++){
      if((jsonData[i].situacao==="APROVADA" || jsonData[i].situacao==="DISPENSADA") && dados.achaItemPorLabel(jsonData[i].codigo)!==undefined){
        dados.setStatusUmLabel(jsonData[i].codigo);
        dados.atualizaVisual(jsonData[i].codigo);
      }
    }
  }

  function realizaCalculo() {

    dados.setCargaMinima(cargaMinima);
    dados.setCargaMaxima(cargaMaxima);
    dados.setDistanciaMaxima(distanciaMaxima);

    const resultado = Nexts(
      dados.state.nodesPadrao,
      dados.state.edgesPadrao,
      { minWeight: dados.state.cargaMinima, maxWeight: dados.state.cargaMaxima, maxDistance: dados.state.distanciaMaxima },
    );
      
    console.log(resultado);

    dados.setResultados(resultado);

    setModal(true);

  }

  const adicionaDisciplina = (idAluno,idDisciplina) => {

    Axios.post("http://localhost:3001/api/check",{
      idAluno: idAluno,
      idDisciplina: idDisciplina}).then((response)=> {
      console.log(response);
      if(response.data.length === 0){
        Axios.post("http://localhost:3001/api/insert",{
          idAluno: idAluno,
          idDisciplina: idDisciplina
        })
      }
    });
  }

  const removeDisciplina = (idAluno,idDisciplina) => {

    Axios.post("http://localhost:3001/api/delete",{
      idAluno: idAluno,
      idDisciplina: idDisciplina
    });

  }

  async function confere(idAluno) {
    return Axios.post("http://localhost:3001/api/checkAll", {
      idAluno: idAluno,
    });
  }

  const Carrega = async () => {
    const item = await confere(dados.state.idAluno);

    //se o id do bd é igual o id do state, marca no state

    item.data.forEach(function(p){

      console.log(p);

      dados.state.nodesPadrao.forEach(function(c){

        if(c.id===p.id_disciplina && c.status===0){
          document.getElementsByClassName(c.label)[0].checked=true;
          dados.atualizaData(c.label,c.id);
        }

      });

    });

    //se o id do state for == 1 e não existir no bd, desmarca no state

    dados.state.nodesPadrao.forEach(function(c){
      if(c.status===1){
        
        var auxiliar=0;

        item.data.forEach(function(p){
          if(p.id_disciplina===c.id){
            auxiliar=1;
          }
        });

        if(auxiliar===0){
          document.getElementsByClassName(c.label)[0].checked=false;
          dados.atualizaData(c.label,c.id);
        }

      }
    });

  }

  const Salva = async () => {
    
    //adiciona todos no bd

    dados.state.nodesPadrao.forEach(function(c){
      if(c.status===1){

        console.log('um');
        adicionaDisciplina(dados.state.idAluno,c.id); //conferencia automatica no adicionarDisciplina

      }
    });

    //get all

    const item = await confere(dados.state.idAluno);

    //rmove os diferentes

    item.data.forEach(function(p){

      dados.state.nodesPadrao.forEach(function(c){

        if(p.id_disciplina===c.id && c.status===0){
          removeDisciplina(dados.state.idAluno,c.id);
        }

      });

    });

  }

  const [copiedText, setCopiedText] = useState();

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
              
              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>1º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                dados.state.nodesPadrao.filter((e)=> e.level===1).map( (p) => {
                  return (
                    <div>
                    <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}/>
                    </div>
                )})
                }  
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>2º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                {
                dados.state.nodesPadrao.filter((e)=> e.level===2).map( (p) => {
                  return (
                    <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                  />
                )})
                }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>3º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===3).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>4º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===4).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>5º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===5).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>6º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===6).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>7º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===7).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)}dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>8º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===8).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>9º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===9).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>10º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===10).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>11º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===11).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

              <Row className="justify-content-center mb-5">
                <span className="mb-2"><b>12º período</b></span>
                <ButtonGroup style={{width:"100%"}}>
                  {
                  dados.state.nodesPadrao.filter((e)=> e.level===12).map( (p) => {
                    return (
                      <ThemeButton cor={dados.getCor(p.id)} dads={dados} nomeDisciplina={p.title} labelDisciplina={p.label} id={p.id}
                    />
                  )})
                  }
                </ButtonGroup>
              </Row>

        <br></br><br></br><br></br>
          
          <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
              <CardBody>
                <Form className="mt-3 ">
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                    <Label for="exampleEmail">Carga mínima</Label>
                    <Input type="number" onChange={(e)=>{setCargaMinima(e.target.value)}} id="entradaDeNumero" className="entradaDeNumero" min="1" max="500"/>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Carga máxima</Label>
                    <Input type="number" onChange={(e)=>{setCargaMaxima(e.target.value)}} id="entradaDeNumero" className="entradaDeNumero" min="1" max="500"/>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Distância máxima</Label>
                    <Input type="number" onChange={(e)=>{setDistanciaMaxima(e.target.value)}} id="entradaDeNumero" className="entradaDeNumero" min="1" max="500"/>
                  </FormGroup>
                </Col>
              </Row>
              
              </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
        </Container>


              <Row className="my-4">
                <Col className="d-flex justify-content-center ">
                
                <Button color="primary" type="submit" onClick={realizaCalculo}>Calcular</Button>
                <Button color="primary" type="submit" onClick={Salva}>Salvar</Button>
                <Button color="primary" type="submit" onClick={Carrega}>Carregar</Button>
                

                </Col>
              </Row>

              <Row className="my-4">
                <Col className="d-flex justify-content-center ">
                <input type = "file" onChange={(e)=>fazExcel(e)}/>
                <Button color="primary" type="submit" onClick={enviarArquivo}>Atualizar grade</Button>

                </Col>
              </Row>

              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Escolher disciplinas do próximo semestre</ModalHeader>
                <ModalBody>

                
              <div>
                <Button color="primary" onClick={toggleCollapseUm} style={{ marginBottom: '1rem' }}>Exibir melhor opção</Button>
                <Collapse isOpen={collapseUm}>
                  <Card>
                    <CardBody>
                    
                    <Se toggle={toggle} r={dados.state.resultados} opcao={0}/>

                    </CardBody>
                  </Card>
                </Collapse>
              </div>

              <div>
                <Button color="primary" onClick={toggleCollapseDois} style={{ marginBottom: '1rem' }}>Exibir segunda opção</Button>
                <Collapse isOpen={collapseDois}>
                  <Card>
                    <CardBody>
                    
                    <Se toggle={toggle} r={dados.state.resultados} opcao={1}/>

                    </CardBody>
                  </Card>
                </Collapse>
              </div>

              <div>
                <Button color="primary" onClick={toggleCollapseTres} style={{ marginBottom: '1rem' }}>Exibir terceira opção</Button>
                <Collapse isOpen={collapseTres}>
                  <Card>
                    <CardBody>
                    
                    <Se toggle={toggle} r={dados.state.resultados} opcao={2}/>

                    </CardBody>
                  </Card>
                </Collapse>
              </div>

              <div>
                 <Button color="primary" onClick={toggleCollapseQuatro} style={{ marginBottom: '1rem' }}>Exibir quarta opção</Button>
                <Collapse isOpen={collapseQuatro}>
                  <Card>
                    <CardBody>
                    
                    <Se toggle={toggle} r={dados.state.resultados} opcao={3}/>

                    </CardBody>
                  </Card>
                </Collapse>
              </div>

              <div>
                <Button color="primary" onClick={toggleCollapseCinco} style={{ marginBottom: '1rem' }}>Exibir quinta opção</Button>
                <Collapse isOpen={collapseCinco}>
                  <Card>
                    <CardBody>
                    
                    <Se toggle={toggle} r={dados.state.resultados} opcao={4}/>

                    </CardBody>
                  </Card>
                </Collapse>
              </div>

              <div>
                <Button color="primary" onClick={toggleCollapseUltimas} style={{ marginBottom: '1rem' }}>Exibir últimas opções</Button>
                <Collapse isOpen={collapseUltimas}>
                  <Card>
                    <CardBody>
                    
                    <Se toggle={toggle} r={dados.state.resultados} opcao={"ultimas"}/>

                    </CardBody>
                  </Card>
                </Collapse>
              </div>
                 
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
              </Modal>

              </CardBody>

            </Card>
          </div>
        </Row>

        
      </Container>
    </>
  );
};

export default Feitas;

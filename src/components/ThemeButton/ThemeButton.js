import React from 'react';
import {useUnstated } from '@gitbook/unstated';
import { DadosUnstated } from '../../views/examples/dadosunstated';
import { Button,Row } from 'reactstrap';

function ThemeButton(props){

    const data = useUnstated(DadosUnstated);

    return(
        <>
            <Button color={props.cor} id="disciplina" className = {props.labelDisciplina} onClick={() => data.atualizaData(props.labelDisciplina,props.id)}>
            <input id="disciplina" className = {props.labelDisciplina} type="checkbox" onClick={() => data.atualizaData(props.labelDisciplina,props.id)}/>
                <Row className="justify-content-center">
                {props.nomeDisciplina}
                </Row>
                <Row className="justify-content-center">
                    <small>60h</small>
                </Row>
            </Button>
            
        </>
       
    );

}

export default ThemeButton;



/*
import React, { Component } from 'react';
import func from './func'
import {Provider,Subscribe, Container } from 'unstated';
//import DadosContainer from 'C:/Users/decyf/Desktop/PDEG/pdeg/src/App.js';
import sharedContainer from 'C:/Users/decyf/Desktop/PDEG/pdeg/src/App.js';

function DivCheckBox(props){

    return(
        <Subscribe to={[sharedContainer]}>
        {divcheckbox => (
          <div>
          <p id = "pgh">{props.nomeDisciplina}</p>
          <input id="MAT001" class = {props.labelDisciplina} type="checkbox" onClick={() => func(props.labelDisciplina,props.id)}/>
          </div>
        )}
        //</Subscribe>
    );
    
}

export default DivCheckBox;
*/



//se o cara ta INSERINDO disciplina:
/*

    conferir se esta la 
    se nao, insere

//se o cara ta REMOVENDO disciplina:

    remover as que batem


*/
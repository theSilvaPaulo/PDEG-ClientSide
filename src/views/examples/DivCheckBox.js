import React from 'react';
import {useUnstated } from '@gitbook/unstated';
import { DadosUnstated } from './dadosunstated.js';
//import Axios from "axios";

function DivCheckBox(props){

    const data = useUnstated(DadosUnstated);

    return(
        <div>
        <p id = "pgh">{props.nomeDisciplina}</p>
        <input id="disciplina" className = {props.labelDisciplina} type="checkbox" onClick={() => data.atualizaData(props.labelDisciplina,props.id)}/>
        </div>
    );

}

export default DivCheckBox;
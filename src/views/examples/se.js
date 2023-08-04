//FEZ AGORA = INFO/DANGER/
//FEZ ANTES = PRIMARY
//NAO FEZ = SECONDARY

import React from 'react';
import { DadosUnstated } from './dadosunstated.js';
import DivResultado from './DivResultado.js';
import { useUnstated } from '@gitbook/unstated';
import { useState } from "react";

function Se(props){

    const dados = useUnstated(DadosUnstated);

    function selecionaCombinacao(resultado) {

        var cor = dados.getProximaCor();

        function atribui(posicao) {
            dados.setStatusUm(posicao.id);

            //DEFINE A COR DO QUADRADO PARA OUTRA

            dados.setCor(posicao.id,cor);
        }

        //PEGA DISCIPLINAS E TORNA ELAS CHECKED E STATUS 1

        resultado.combination.forEach(atribui);

        //FAZ SER IGUAL

        var vet = document.getElementsByTagName("input");

        function confere(posicao){

            if(vet[posicao.id-1].checked === false && dados.state.nodesPadrao[posicao.id-1].status === 1){
                vet[posicao.id-1].checked = true;
            }
        }

        dados.state.nodesPadrao.forEach(confere);

        //FIM FAZ SER IGUAL

        props.toggle();

    }

    if(props.r!=null){
            
        var opcoes = props.r.map(p => {
                return (
                  <div>
                  <DivResultado resultado={p}/>

                  <button onClick={() => selecionaCombinacao(p)}>Selecionar</button>
                  <br></br>
                  </div>
                )})

        if(props.opcao!=="ultimas"){
            if(opcoes.slice(props.opcao,props.opcao+1).length===0){
                return(<p>Não há mais opções de percurso de acordo com as opções escolhidas.</p>)
            }
            else{
                return(opcoes.slice(props.opcao,props.opcao+1));
            }
        }
        else{
            if(opcoes.slice(5).length===0){
                return(<p>Não há mais opções de percurso de acordo com as opções escolhidas.</p>)
            }
            else{
                return(opcoes.slice(5));
            }
        }
    }
    else{

        return null;

    }
    
}

export default Se;
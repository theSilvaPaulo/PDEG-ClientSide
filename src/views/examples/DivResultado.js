import React from 'react';

function DivResultado(props){

    return(

        props.resultado.combination.map(p => {
            return (
              <div>
              <p>{p.label}</p>
              </div>
            )})

    );
    
}

export default DivResultado;
import React from 'react';

import './index.css'



class Component2 extends React.Component{

   render(){
       
        return (
            <>
            
                <h2>Tempo Real do Dispositivo</h2>
                <div className="temperaturas-row1">
                    <div className="temp_insuflamento">
                        <p>22ºc</p>
                        <p>Temperatura <br/>de Retorno</p>
                    </div>
                    <div className="temp_retorno">
                        <p>16ºc</p>
                        <p>Temperatura <br/> Compressor 2</p>
                    </div>
                    <div className="delta_retorno">
                        <p>18ºc</p>
                        <p>Temp. De  <br/>Insulflamento</p>
                    </div>
                </div>
                <span className="quebra"></span>
                <div className="temperaturas-row2">
                    <div className="temp_descarga">
                        <p>139 psi</p>
                        <p>Pressão <br/>Compressor 1</p>
                    </div>
                    <div className="temp_succao">
                        <p>127 psi</p>
                        <p>Pressão  <br/>Compressor 2</p>
                    </div>
                </div>
                <span className="quebra"></span>
                <div className="status-temp">
                    <div className="item-status">
                        <p className="problema">Sujo</p>
                        <p>Diferencial<br/> Filtro de Ar</p>
                    </div>
                    <div className="item-status">
                        <p className="problema">Desligado</p>
                        <p>Corrente <br/> ventilação <br/> condensadora</p>
                    </div>
                    <div className="item-status">
                        <p className="problema">Desligado</p>
                        <p>corrente comprenssor </p>
                    </div>
                    <div className="item-status">
                        <p className="ligado">Ligado</p>
                        <p>Diferencial <br/> de ventilação</p>
                    </div>
                    <div className="item-status">
                        <p className="ligado">Ligado</p>
                        <p>Corrente <br/> de ventilação <br/> condesadora 2</p>
                    </div>
                    <div className="item-status">
                        <p className="ligado">Ligado</p>
                        <p>Corrente <br/> comprenssor 2</p>
                    </div>
                    
                </div>
                
            </>
            
        )
    
    }

}




export default Component2;
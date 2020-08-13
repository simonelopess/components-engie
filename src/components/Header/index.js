import React from 'react';

import './index.css';

function Header(){
    return (
        <>
            <header>
                <div className="select-block">
                    <select name="select-list">
                        <option value="chiller">YK Chiller</option>
                        <option value="test">YK Test</option>
                    </select>    
                    <div className="local">
                        <span>Área: </span><span className="local">Balcão Principal</span>
                    </div>           
                </div>
                <div>
                    <p className="logo">Equipe Op. Crítica</p>
                </div>            
            </header>
            <div className="info">
                <div className="serial">
                    <p className="serial-tag">Serial</p>
                    <p className="serial-number">345-755-MMF</p>
                </div>
                <div className="date-install">
                    <p className="date-install-tag">Data de Instalação</p>
                    <p sclassName="date-install-number">02/11/2006</p>
                </div>
                <div className="date-concert">
                    <p className="date-lastConcert-tag">Última Manutenção</p>
                    <p className="date-lastConcert-number">06/07/2019</p>
                </div>
            </div>
            <div className="operatingTime">
                <p>Tempo Atual de Funcionamento</p>
                <div className="current-operatingTime">16d 14h 12m 32s </div>
            </div>
            <div className="operatingTime">
                <p>Funcionamento Total Até Última Manutenção</p>
                <div className="total-operatingTime">1306 horas </div>
            </div>
        </>
    )
}

export default Header;
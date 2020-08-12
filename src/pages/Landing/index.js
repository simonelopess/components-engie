import React from 'react';
import Header_Card1 from '../../components/Card1'

import './styles.css';

function Landing() {
    return (
    
        <div className="container">
            <div className="row1">
                <div className="first-card">
                    <Header_Card1 />
                </div>
                <div className="second-card">teste2</div>
                <div className="third-card">teste3</div>
            </div>
            <div className="row2">
                <div className="fourth-card"></div>
                <div className="fifth-card"></div>
                <div className="sexth-card"></div>
            </div>
        </div>
    )
}

export default Landing;
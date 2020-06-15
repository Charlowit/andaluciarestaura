import React, { Component } from 'react';


export default class BarraInformacion extends Component {

    render() {
        return (
            <React.Fragment>
                <div >
                    <div style={{ backgroundColor: '#171c8f', marginTop: '50px' }}>
                        <div className="container has-text-centered" style={{ paddingTop: '10px' }}>
                            <div style={{ color: 'white' }}>
                                <p style={{ display: 'inline', marginTop: '-5px' }}>En breve pondremos a su disposición un télefono de contacto con el soporte técnico. Correo Electrónico</p>
                                <div style={{ display: 'inline', paddingTop: '10px' }}>
                                    <span className="icon" style={{ marginLeft: '5px', marginRight: '5px'}}>
                                        <i className="fas fa-envelope" style={{paddingTop: '4px'}}></i>
                                    </span>
                                </div>
                                <p style={{ display: 'inline' }}>: <a style={{ color: 'white' }}>soporte@hotehub.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


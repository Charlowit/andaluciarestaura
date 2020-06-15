import React, { Component } from 'react';


export default class BarraInformacion extends Component {

    render() {
        return (
            <React.Fragment>
                <div >
                    <div  style={{ backgroundColor: '#171c8f', marginTop: '50px'}}>
                        <div className="container has-text-centered" style={{ paddingTop: '15px' }}>
                            <a href="#" style={{ color: 'white', marginTop: '1px' }}>En breve pondremos a su disposición un télefono de contacto con el soporte técnico.</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


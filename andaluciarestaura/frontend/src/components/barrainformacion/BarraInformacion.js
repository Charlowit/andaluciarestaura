import React, { Component } from 'react';


export default class BarraInformacion extends Component {

    render() {
        return (
            <React.Fragment>
                <div >
                    <div  style={{ backgroundColor: '#171c8f', marginTop: '50px'}}>
                        <div className="container has-text-centered" style={{ paddingTop: '15px' }}>
                            <a href="#" style={{ color: 'white', marginTop: '1px' }}>Puedes contactar con nosotros: 665665665</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


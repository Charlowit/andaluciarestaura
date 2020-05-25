import React, { Component } from 'react';


class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="columns is-full">
                        <div className="column is-half is-centered is-offset-one-quarter">
                            <div>
                                <p>
                                    <img width="200" height="50" src={"/static/frontend/logotipo.jpeg"}></img> <br />
                                    Andalucía Restaura by Hotehub
                                    <br />
                                    Copyright@2020 Todos los derechos reservados
                                </p>
                            </div>
                        </div>
                    </div>

                </footer>
            </React.Fragment>
        );
    }
}


export default Footer;

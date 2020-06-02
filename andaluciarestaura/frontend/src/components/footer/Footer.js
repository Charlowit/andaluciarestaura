import React, { Component } from 'react';


class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer>
                    <section className="section has-text-centered"style={{minWidth:"470px"}} >
                        <p>
                            <img width="200" height="50" src={"/static/frontend/hotehub.svg"} ></img>
                            <br />
                            <span style={{marginTop: '25px'}}> Andalucía Restaura by Hotehub </span>
                            <br/>
                            Copyright@2020 Todos los derechos reservados
                        </p>
                    </section>
                </footer>
            </React.Fragment>
        );
    }
}


export default Footer;

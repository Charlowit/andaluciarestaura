import React, { Component } from 'react';


class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="level is-mobile">
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Descargar aplicación</p>
                                <p className="image is-2by1">
                                    <img src="https://netbulbsocialmedia.com/noticias/wp-content/uploads/2018/06/apps-aplicaciones-coomunity-manager-android.png"></img>
                                </p>
                                <p className="image is-3by1">
                                    <img src="https://cmsphoto.ww-cdn.com/superstatic/81328/art/grande/17360379-21870473.jpg?v=1506622198"></img>
                                </p>
                            </div>
                        </div>
                        <div className="level-item has-text-left">
                            <div>
                            <p className="heading">¿Quiénes somos?</p>
                            <p className="heading">Información de contacto</p>
                            <p className="heading">Condiciones de Uso y politica de Privacidad</p>
                            <p className="heading">Trabaja con nosotros</p>
                            </div>
                        </div>
                        <div className="level-item has-text-left">
                            <div>
                            <p className="heading">Politica de cookies</p>
                            <p className="heading">Preguntas frecuentes</p>
                            <p className="heading">Consentimiento de cookies</p>
                            <p className="heading">Blog</p>
                            </div>
                        </div>
                        <div classNameName="level-item has-text-left">
                            <div>
                                <p >2020 Andalucía Restaura</p>
                                <p className="heading">TODOS LOS DERECHOS RESERVADOS</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <p className="has-text-centered">Las ofertas promocionales están sujetas a las condiciones que figuran en la página del restaurante. las ofertas en bebidas alcohólicas están dirigidas únicamente a adultos. El consumo de alcohol es perjudicial para la salud. Bebe con moderación.</p>
                </footer>
            </React.Fragment>
        );
    }
}


export default Footer;

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCarta } from '../../actions/carta';

const div100 = {
  width:'100%',
};
const div2 = {
  marginLeft: '2%',
  marginTop: '2%'
};
const divtop = {
  marginTop: '2%'
};
const divleft = {
  marginLeft: '2%',
};

const divcenter = {
    textAlign: 'center'
};
const divcolor1 ={
    color: 'rgb(51, 153, 255)'
};
const divcolorred = {
    color: 'red'
};
const divcolor2 ={
    fontSize:'36px',
    color: 'rgb(51, 153, 255)'
};
const divmargin1 ={
  marginLeft: '4%',
  marginTop: '2%'
};
const divtop2 = {
  marginTop: '60px'
};



export class CartaPage extends Component {

    static propTypes = {
        carta: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.getCarta();
    }

    render(){
        return(
            <Fragment>
                <section className="hero is-info is-primary  hsl(54%, 15%, 143%) is-bold">
                    <div className="hero-body hsl(90%, 159%, 79%)">
                        <div className="container has-text-centered">

                            <div className='card equal-height'>
                                <div className="card-image has-text-centered">
                                    <figure className="image is-128x128 is-inline-block">
                                        <img className="is-rounded"
                                             src="https://bulma.io/images/placeholders/128x128.png"></img>
                                    </figure>
                                </div>
                            </div>

                            <h1 className="title"> {/* Marca Comercial del Negocio (mapear JSON) */} Cafetería
                                Bar/Ávila </h1>
                            <h2 className="subtitle"> {/* Slogan (mapear JSON) */} "75 años de tradición y tapas en
                                Granada" </h2>

                            <p className="field">
                                <a className="button is-rounded is-medium" id="id_boton">
                                    <span className="icon">
                                      <i className="fab fa-facebook"></i>
                                    </span>
                                </a>
                                <a className="button is-rounded is-medium">
                                    <span className="icon">
                                        <i className="fab fa-tripadvisor"></i>
                                    </span>
                                </a>
                                <a className="button is-rounded is-medium">
                                    <span className="icon">
                                      <i className="fab fa-instagram"></i>
                                    </span>
                                </a>
                            </p>
                            <hr/>
                            <div className="container">
                                <div className="buttons">
                                    <div className="columns" style={div100}>
                                        <div className="column">
                                            <button className="button">
                                    <span className="icon">
                                      <i className=" fas fa-file-pdf"></i>
                                    </span>
                                                <span>Descarga Carta en PDF</span>
                                            </button>
                                        </div>
                                        <div className="column">
                                            <h1 className="title">CARTA</h1>
                                        </div>
                                        <div className="column">
                                            <button className="button">
                                    <span className="icon is-small">
                                        <i className="fab fa-whatsapp"></i>
                                    </span>
                                                <span>Comparte por Whatsapp</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="notification">
                        <div className="tabs is-centered is-boxed">
                            <ul>
                                <li className="is-active">
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-clipboard-list"
                                                                           aria-hidden="true"></i></span>
                                        <span>Entrantes</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                            <span className="icon is-small"><i className="fas fa-utensils"
                                                               aria-hidden="true"></i></span>
                                        <span>Principales</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                            <span className="icon is-small"><i className="fas fa-stroopwafel"
                                                               aria-hidden="true"></i></span>
                                        <span>Postres</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                            <span className="icon is-small"><i className="fas fa-cocktail"
                                                               aria-hidden="true"></i></span>
                                        <span>Bebidas</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="container">
                            <div className="notification">

                                {this.props.carta.map( carta => (
                                    
                                    

                             
                                <div className='card equal-height '>
                                    <div className="columns">
                                        <div className="container">
                                            <div className="column">
                                                <div className="columns">
                                                    <div className="column is-two-thirds"
                                                         style={div2}>
                                                        <h1 className="title"> {carta.name} </h1>

                                                        <h2 className="subtitle has-text-weight-light">  {carta.productos[0].descripcion}</h2>
                                                    </div>
                                                    <div className="column" style={divtop}>
                                                        <div className="columns is-mobile" style={divcenter}>

                                                            <div className="column">
                                                                <div style={div100}>
                                                                    <span className="icon is-small"
                                                                          style={divcolor1}><i
                                                                        className="fas fa-dot-circle"
                                                                        aria-hidden="true"></i></span>
                                                                </div>
                                                                <span><b> Media Ración </b></span>
                                                                <div style={div100}>
                                                                    <span> <b style={divcolorred}>  4,50€ </b> </span>
                                                                </div>
                                                            </div>


                                                            <div className="column"
                                                                 style={divmargin1}>
                                                                <div style={div100}>
                                                                    <span className="icon is-small"
                                                                          style={divcolor2}><i
                                                                        className="fas fa-dot-circle"
                                                                        aria-hidden="true"></i></span>
                                                                </div>
                                                                <span> <b> Ración </b></span>
                                                                <div style={div100}>
                                                                    <span> <b style={divcolorred}>  5,50€ </b> </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={divleft}>
                                                    <img src="static/frontend/Allergens/huevos.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                    <img src="static/frontend/Allergens/lacteos.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                    <img src="static/frontend/Allergens/soja.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                    <img src="static/frontend/Allergens/cascara.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                    <img src="static/frontend/Allergens/moluscos.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                    <img src="static/frontend/Allergens/fish.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                <div className='card equal-height ' style={divtop2}>
                                    <div className="columns">
                                        <div className="container">
                                            <div className="column">
                                                <div className="columns">
                                                    <div className="column is-two-thirds"
                                                         style={div2}>
                                                        <h1 className="title">Ensalada Mixta</h1>
                                                        <h2 className="subtitle has-text-weight-light">Mezclum de
                                                            lechugas, cherry, pepino, cebolla,
                                                            remolacha, zanahoria, espárragos, maíz, huevo, atún,
                                                            pepinillos, aceitunas y picos </h2>
                                                    </div>
                                                    <div className="column" style={divtop}>
                                                        <div className="columns is-mobile" style={divcenter}>

                                                            <div className="column">
                                                                <div style={div100}>
                                                                    <span className="icon is-small"
                                                                          style={divcolor1}><i
                                                                        className="fas fa-dot-circle"
                                                                        aria-hidden="true"></i></span>
                                                                </div>
                                                                <span><b> Media Ración </b></span>
                                                                <div style={div100}>
                                                                    <span> <b style={divcolorred}>  4,50€ </b> </span>
                                                                </div>
                                                            </div>


                                                            <div className="column"
                                                                 style={divmargin1}>
                                                                <div style={div100}>
                                                                    <span className="icon is-small"
                                                                          style={divcolor2}><i
                                                                        className="fas fa-dot-circle"
                                                                        aria-hidden="true"></i></span>
                                                                </div>
                                                                <span> <b> Ración </b></span>
                                                                <div style={div100}>
                                                                    <span> <b style={divcolorred}>  5,50€ </b> </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={divleft}>
                                                    <img src="static/frontend/Allergens/gluten.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                    <img src="static/frontend/Allergens/fish.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                    <img src="static/frontend/Allergens/moluscos.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                    <img src="static/frontend/Allergens/crustaceos.svg"
                                                         alt="triangle with all three sides equal" width="50"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    carta: state.carta.carta
});

export default connect(mapStateToProps, { getCarta })(CartaPage);

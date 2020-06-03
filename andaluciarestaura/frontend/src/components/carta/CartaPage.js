import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCarta, deleteproducto } from '../../actions/carta';


const div100 = {
    width: '100%',
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
const divcolor1 = {
    color: 'rgb(51, 153, 255)'
};
const divcolorred = {
    color: 'red'
};
const divcolor2 = {
    fontSize: '36px',
    color: 'rgb(51, 153, 255)'
};
const divmargin1 = {
    marginLeft: '4%',
    marginTop: '2%'
};
const divtop2 = {
    marginTop: '60px'
};



export class CartaPage extends Component {

    constructor() {
        super();
        this.state = {
            cif: "",
            categories: [],
            deleted: false,
        };
    }


    static propTypes = {
        cartas: PropTypes.array.isRequired,
        auth: PropTypes.func.isRequired,

    };

    componentDidMount() {
        //this.state.arrayCartas = this.props.getCarta();
        this.state.cif = this.props.auth.user.cif;
        this.props.getCarta(this.props.auth.user.cif);
    }

    render() {
        const { cif = this.props.auth.user.cif } = this.state.cif;
        return (
            <Fragment>
                <section className="hero is-info is-primary  hsl(54%, 15%, 143%) is-bold" style={{ marginTop: '40px' }}>
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
                            <hr />
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
                {/* FORMULARIO PARA INSERTAR PRODUCTOS*/}
                <div className="container box">
                    <hr />
                    <h1 className="title has-text-centered">Añadir Producto a la Carta</h1>
                    <form>
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Nombre del Producto" />
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 1</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 2</label>
                                            <div className="control">
                                                <input className="input " type="text" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 3</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <h2 className="subtitle">Alergenos</h2>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Apio</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Altramuces</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Cacahuete</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Crustaceo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Carcara Frutal</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Gluten</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Huevo</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Lacteo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Molusco</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Mostaza</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Pescado</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Sesamo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Soja</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Descripción</label>
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Descripción del producto." size="99"></textarea>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <br />
                                        <div className="field">
                                            <label className="label">Categoria</label>
                                            <div className="control">
                                                <div className="select">
                                                    <select name="categoria" /*onChange={this.categoriaChange} defaultValue={categoria}*/>
                                                        <option>Categoria 1</option>
                                                        <option>Categoria 2</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <br />
                                        <div className="field">
                                            <label className="label">Tamaño</label>
                                            <div className="control">
                                                <div className="select">
                                                    <select name="tamanio" /*onChange={this.tamanioChange} defaultValue={tamanio}*/>
                                                        <option>S</option>
                                                        <option>M</option>
                                                        <option>L</option>
                                                        <option>XL</option>
                                                        <option>XXL</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <br />
                                        <div className="field">
                                            <label className="label">Carta</label>
                                            <div className="control">
                                                <div className="select">
                                                    <select>
                                                        <option>Carta 1</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br />
                    <div className="control buttons is-centered">
                        <button className="button">Guardar</button>
                    </div>
                </div>
                {/* FIN FORMULARIO PARA INSERTAR PRODUCTOS*/}
                {/* MOSTRAR PRODUCTOS DE UNA CARTA*/}
                {this.props.cartas.map(carta => (
                    <div class="debug">
                        {carta.productos.map(producto => (
                            <div>
                                <div>
                                    {!this.state.categories.includes(producto.category_name) ? this.state.categories.push(producto.category_name) : ""}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}


                <div className="container">
                    <div>
                        <div className="container">
                            <div>
                                {this.props.cartas.map(carta => (
                                    <div class="debug">
                                        {this.state.categories.map(categoryName => (
                                            <div style={{marginTop: '60px'}}>
                                                <div className='card equal-height' style={{ backgroundColor: '#d5c69f', height: '60px' }}>
                                                    <div className="container">
                                                        <h1 className="title has-text-centered" style={{paddingTop: '15px'}}>{categoryName}</h1>
                                                    </div>
                                                </div>
                                                {carta.productos.map(producto => (
                                                    <div style={{marginTop: '20px'}} key={producto.id}>
                                                        {categoryName == producto.category_name ?
                                                            <div className='card equal-height'>
                                                                <div className="columns">
                                                                    <div className="container">
                                                                        <div className="column">
                                                                            <div className="columns">
                                                                                <div className="column is-two-thirds"
                                                                                    style={{marginLeft: '2%', marginTop: '2%'}}>
                                                                                    <h1 className="title"> {producto.name} </h1>
                                                                                    <h2 className="subtitle has-text-weight-light">  {producto.descripcion}</h2>
                                                                                </div>
                                                                            </div>
                                                                            <div className="columns">
                                                                                <div className="column is-two-thirds" style={{marginLeft: '2%'}}>

                                                                                    {producto.is_apio ?
                                                                                        <img
                                                                                            src="/static/frontend/Allergens/alergeno_apio.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_altramuces ?

                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_altramuces.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }


                                                                                    {producto.is_cacahuete ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_cacahuete.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_crustaceo ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_crustaceo.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_frutos_con_cascara ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_frutos_con_cascara.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_gluten ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_gluten.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_huevo ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_huevo.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_lacteo ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_lacteo.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_molusco ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_moluscos.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }


                                                                                    {producto.is_mostaza ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_mostaza.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }
                                                                                    {producto.is_pescado ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_pescado.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }
                                                                                    {producto.is_sesamo ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_sesamo.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }
                                                                                    {producto.is_soja ?
                                                                                        <img
                                                                                            src="{{server}}/static/frontend/Allergens/alergeno_soja.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }
                                                                                </div>
                                                                                <div className="column is-3">
                                                                                    <div className="columns is-mobile has-text-centered"
                                                                                        style={{marginBottom: '5%'}}>
                                                                                        <div className="column">
                                                                                            <div
                                                                                                style={{width:'100%', marginTop: '5%', marginBottom: '6%'}}>
                                                                                                <span className="icon is-small" style={{color: 'rgb(51, 153, 255)'}}>
                                                                                                    <i className="fas fa-dot-circle" aria-hidden="true"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                            <span>
                                                                                                <b> Media Ración </b>
                                                                                            </span>
                                                                                            <div style={{width:'100%'}}>
                                                                                                <span>
                                                                                                    <b style={{color: 'red'}}>  {!producto.precio1 == "" ? producto.precio1 : ""}€</b>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="column"
                                                                                            style={{marginLeft: '4%', marginTop: '2%'}}>
                                                                                            <div style={{width:'100%'}}>
                                                                                                <span className="icon is-small"
                                                                                                    style={{fontSize:' 36px', color: 'rgb(51, 153, 255)'}}>
                                                                                                    <i className="fas fa-dot-circle" aria-hidden="true"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                            <span>
                                                                                                <b> Ración </b>
                                                                                            </span>
                                                                                            <div style={{width:'100%'}}>
                                                                                                <span>
                                                                                                    <b style={{color: 'red'}}>  {!producto.precio2 == "" ? producto.precio2 : ""}€</b>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <button className="button" onClick={this.props.deleteproducto.bind(this, producto.id)}>Button</button>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        ))}

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* FIN MOSTRAR PRODUCTOS DE UNA CARTA*/}
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    cartas: state.cartas.cartas,
    auth: state.auth,
});

export default connect(mapStateToProps, { getCarta, deleteproducto })(CartaPage);

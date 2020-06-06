import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCarta, deleteproducto, subirproducto } from '../../actions/carta';
import { Redirect, Link } from 'react-router-dom';


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
            cartas: [],
            cif: "",
            categories: [],
            deleted: false,
            categoria: 1,
            name: "",
            descripcion: "",
            tamanio: "S",
            precio1: "",
            precio2: "",
            precio3: "",
            is_apio: false,
            is_altramuces: false,
            is_cacahuete: false,
            is_crustaceo: false,
            is_frutos_con_cascara: false,
            is_gluten: false,
            is_huevo: false,
            is_lacteo: false,
            is_molusco: false,
            is_mostaza: false,
            is_pescado: false,
            is_sesamo: false,
            is_soja: false,
            carta: 1,
        };
    }

    onSubmit = e => {

        e.preventDefault();

        this.setState({
            added: true
        })
        const { categoria, name, descripcion, tamanio, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, carta
        } = this.state;
        const producto = { categoria, name, descripcion, tamanio, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, carta };

        this.props.subirproducto(producto);

        window.location.reload(false);

    };

    onSubmitDelete = (productoID, cartaID) => {

        console.log("ProductoID --> " + productoID)
        console.log("CartaID --> " + cartaID)
        //this.props.deleteproducto.bind(this, productoID, cartaID)

        //window.location.reload(false);

    };



    onChange = e => this.setState({ [e.target.name]: e.target.value });

    handleApioChange = (e) => {
        this.setState({
            is_apio: !this.state.is_apio
        })
    };

    handleAltramucesChange = (e) => {
        this.setState({
            is_altramuces: !this.state.is_altramuces
        })
    };

    handleCacahueteChange = (e) => {
        this.setState({
            is_cacahuete: !this.state.is_cacahuete
        })
    };

    handleCrustaceoChange = (e) => {
        this.setState({
            is_crustaceo: !this.state.is_crustaceo
        })
    };

    handleCascaraChange = (e) => {
        this.setState({
            is_frutos_con_cascara: !this.state.is_frutos_con_cascara
        })
    };

    handleGlutenChange = (e) => {
        this.setState({
            is_gluten: !this.state.is_gluten
        })
    };

    handleHuevoChange = (e) => {
        this.setState({
            is_huevo: !this.state.is_huevo
        })
    };

    handleLacteoChange = (e) => {
        this.setState({
            is_lacteo: !this.state.is_lacteo
        })
    };

    handleMoluscoChange = (e) => {
        this.setState({
            is_molusco: !this.state.is_molusco
        })
    };

    handleMostazaChange = (e) => {
        this.setState({
            is_mostaza: !this.state.is_mostaza
        })
    };

    handlePescadoChange = (e) => {
        this.setState({
            is_pescado: !this.state.is_pescado
        })
    };

    handleSesamoChange = (e) => {
        this.setState({
            is_sesamo: !this.state.is_sesamo
        })
    };

    handleSojaChange = (e) => {
        this.setState({
            is_soja: !this.state.is_soja
        })
    };


    static propTypes = {
        cartas: PropTypes.array.isRequired,
        auth: PropTypes.func.isRequired,
        deleteproducto: PropTypes.func.isRequired,
        subirproducto: PropTypes.func.isRequired
    };

    componentDidMount() {
        //this.state.arrayCartas = this.props.getCarta();
        this.state.cif = this.props.auth.user.cif;
        this.props.getCarta(this.props.auth.user.cif);
    }

    render() {
        const { categoria, name, descripcion, tamanio, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, carta
        } = this.state;
        const { cif = this.props.auth.user.cif } = this.state.cif;
        const { needReload } = this.props.auth
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
                                        <input className="input" name="name" type="text" placeholder="Nombre del Producto" onChange={this.onChange} defaultValue={name} required />
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 1</label>
                                            <div className="control">
                                                <input className="input" name="precio1" type="text" placeholder="0" onChange={this.onChange} defaultValue={precio1} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 2</label>
                                            <div className="control">
                                                <input className="input " name="precio2" type="text" placeholder="0" onChange={this.onChange} defaultValue={precio2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 3</label>
                                            <div className="control">
                                                <input className="input" name="precio3" type="text" placeholder="0" onChange={this.onChange} defaultValue={precio3} />
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
                                                        <input id="checkbox" name="is_apio" className="styled" type="checkbox" onChange={this.handleApioChange} defaultValue={is_apio} />
                                                        <label for="checkbox">  Apio</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_altramuces" className="styled" type="checkbox" onChange={this.handleAltramucesChange} defaultValue={is_altramuces} />
                                                        <label for="checkbox">  Altramuces</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_cacahuete" className="styled" type="checkbox" onChange={this.handleCacahueteChange} defaultValue={is_cacahuete} />
                                                        <label for="checkbox">  Cacahuete</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_custaceo" className="styled" type="checkbox" onChange={this.handleCrustaceoChange} defaultValue={is_crustaceo} />
                                                        <label for="checkbox">  Crustaceo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_frutas_con_cascara" className="styled" type="checkbox" onChange={this.handleCascaraChange} defaultValue={is_frutos_con_cascara} />
                                                        <label for="checkbox">  Cascara Frutal</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_gluten" className="styled" type="checkbox" onChange={this.handleGlutenChange} defaultValue={is_gluten} />
                                                        <label for="checkbox">  Gluten</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_huevo" className="styled" type="checkbox" onChange={this.handleHuevoChange} defaultValue={is_huevo} />
                                                        <label for="checkbox">  Huevo</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_lacteo" className="styled" type="checkbox" onChange={this.handleLacteoChange} defaultValue={is_lacteo} />
                                                        <label for="checkbox">  Lacteo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_molusco" className="styled" type="checkbox" onChange={this.handleMoluscoChange} defaultValue={is_molusco} />
                                                        <label for="checkbox">  Molusco</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_mostaza" className="styled" type="checkbox" onChange={this.handleMostazaChange} defaultValue={is_mostaza} />
                                                        <label for="checkbox">  Mostaza</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_pescado" className="styled" type="checkbox" onChange={this.handlePescadoChange} defaultValue={is_pescado} />
                                                        <label for="checkbox">  Pescado</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_sesamo" className="styled" type="checkbox" onChange={this.handleSesamoChange} defaultValue={is_sesamo} />
                                                        <label for="checkbox">  Sesamo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" name="is_soja" className="styled" type="checkbox" onChange={this.handleSojaChange} defaultValue={is_soja} />
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
                                        <textarea name="descripcion" className="textarea" placeholder="Descripción del producto." size="99" onChange={this.onChange} defaultValue={descripcion}></textarea>
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
                                                        <option value="S">S</option>
                                                        <option value="M">M</option>
                                                        <option value="L">L</option>
                                                        <option value="XL">XL</option>
                                                        <option value="XXL">XXL</option>
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
                        <button className="button" onClick={this.onSubmit}>Guardar</button>
                    </div>
                </div>
                {/* FIN FORMULARIO PARA INSERTAR PRODUCTOS*/}
                {/* MOSTRAR PRODUCTOS DE UNA CARTA*/}
                {this.props.cartas.map(carta => (
                    <div class="debug">
                        {this.state.carta = carta.id}
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
                                            <div style={{ marginTop: '60px' }}>
                                                <div className='card equal-height' style={{ backgroundColor: '#d5c69f', height: '60px' }}>
                                                    <div className="container">
                                                        <h1 className="title has-text-centered" style={{ paddingTop: '15px' }}>{categoryName}</h1>
                                                    </div>
                                                </div>
                                                {carta.productos.map(producto => (
                                                    <div style={{ marginTop: '20px' }} key={producto.id}>
                                                        {categoryName == producto.category_name ?
                                                            <div className='card equal-height'>
                                                                <div className="columns">
                                                                    <div className="container">
                                                                        <div className="column">
                                                                            <div className="columns">
                                                                                <div className="column is-two-thirds"
                                                                                    style={{ marginLeft: '2%', marginTop: '2%' }}>
                                                                                    <h1 className="title"> {producto.name} </h1>
                                                                                    <h2 className="subtitle has-text-weight-light">  {producto.descripcion}</h2>
                                                                                </div>
                                                                            </div>
                                                                            <div className="columns">
                                                                                <div className="column is-two-thirds" style={{ marginLeft: '2%' }}>

                                                                                    {producto.is_apio ?
                                                                                        <img
                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_apio.svg"

                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_altramuces ?

                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_altramuces.svg"

                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }


                                                                                    {producto.is_cacahuete ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_cacahuete.svg"

                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_crustaceo ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_crustaceo.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_frutos_con_cascara ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_frutos_con_cascara.svg"

                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_gluten ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com//static/frontend/Allergens/alergeno_gluten.svg"

                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_huevo ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_huevo.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_lacteo ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_lacteo.svg"

                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }

                                                                                    {producto.is_molusco ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_moluscos.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }


                                                                                    {producto.is_mostaza ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_mostaza.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }
                                                                                    {producto.is_pescado ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_pescado.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }
                                                                                    {producto.is_sesamo ?
                                                                                        <img

                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_sesamo.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }
                                                                                    {producto.is_soja ?
                                                                                        <img
                                                                                            src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_soja.svg"
                                                                                            alt="triangle with all three sides equal" width="50" />
                                                                                        :
                                                                                        ""
                                                                                    }
                                                                                </div>
                                                                                <div className="column is-3">
                                                                                    <div className="columns is-mobile has-text-centered"
                                                                                        style={{ marginBottom: '5%' }}>
                                                                                        <div className="column">
                                                                                            <div
                                                                                                style={{ width: '100%', marginTop: '5%', marginBottom: '6%' }}>
                                                                                                <span className="icon is-small" style={{ color: 'rgb(51, 153, 255)' }}>
                                                                                                    <i className="fas fa-dot-circle" aria-hidden="true"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                            <span>
                                                                                                <b> Media Ración </b>
                                                                                            </span>
                                                                                            <div style={{ width: '100%' }}>
                                                                                                <span>
                                                                                                    <b style={{ color: 'red' }}>  {!producto.precio1 == "" ? producto.precio1 : ""}€</b>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="column"
                                                                                            style={{ marginLeft: '4%', marginTop: '2%' }}>
                                                                                            <div style={{ width: '100%' }}>
                                                                                                <span className="icon is-small"
                                                                                                    style={{ fontSize: ' 36px', color: 'rgb(51, 153, 255)' }}>
                                                                                                    <i className="fas fa-dot-circle" aria-hidden="true"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                            <span>
                                                                                                <b> Ración </b>
                                                                                            </span>
                                                                                            <div style={{ width: '100%' }}>
                                                                                                <span>
                                                                                                    <b style={{ color: 'red' }}>  {!producto.precio2 == "" ? producto.precio2 : ""}€</b>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <button className="button" onClick={this.props.deleteproducto.bind(this, producto.id, producto.carta_id)}>Borrar</button>
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

export default connect(mapStateToProps, { subirproducto, getCarta, deleteproducto })(CartaPage);

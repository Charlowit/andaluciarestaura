import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategorias, deleteproducto, subirproducto, addCategoria, deleteCategoria } from '../../actions/carta';

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
            component: "CATEGORIAS",
            productos: [],
            cif: "",
            categorias: [],

            categoriaParaProducto: 0,
            name: "",
            descripcion: "",
            tamanio: "",
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

            vacio: false,
            addingProduct: false,
            addCategoria: false,

            nombreNuevaCategoria: "",
            descripcion: "",
            info_extra: "",
            posicion: -1,
        };
    }

    onSubmit = e => {

        e.preventDefault();

        const { categoriaParaProducto, name, descripcion, tamanio, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, carta
        } = this.state;
        const producto = { categoriaParaProducto, name, descripcion, tamanio, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, carta };

        this.setState({
            addingProduct: !this.state.addingProduct
        })
        
        console.log("Tamanio --> " + tamanio)
        this.props.subirproducto(producto);

    };

    onSubmitCategorias = e => {

        event.preventDefault();

        const { nombreNuevaCategoria, descripcion, posicion, info_extra, carta } = this.state;
        const categoria = { nombreNuevaCategoria, descripcion, posicion, info_extra, carta };

        this.setState({
            addCategoria: !this.state.addCategoria
        })

        this.props.addCategoria(categoria);
    }


    addProduct = e => {
        this.setState({
            addingProduct: !this.state.addingProduct
        })
    }

    addCategory = e => {
        this.setState({
            addCategoria: !this.state.addCategoria
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onChangeCategoria = e => this.setState({ categoriaParaProducto: e.target.value }, console.log("Valor del select --> " + [e.target.name] + e.target.value));
    onChangeTamanio = e => this.setState({ tamanio: e.target.value });

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
        deleteproducto: PropTypes.func.isRequired,
        subirproducto: PropTypes.func.isRequired,
        deleteCategoria: PropTypes.func.isRequired
    };

    componentDidMount() {
        //this.state.arrayCartas = this.props.getCarta();
        this.props.getCategorias(1)
        //for (categoria in this.state.categorias)
        //this.props.getProductos(2);
    }

    render() {
        const { categoriaParaProducto, name, descripcion, tamanio, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, carta
        } = this.state;
        return (
            <Fragment>
                <section className="hero is-info is-primary  hsl(54%, 15%, 143%) is-bold" style={{ marginTop: '50px' }}>
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
                <div className="section">
                    <div className="container">
                        <div className="container" style={{ marginTop: '40px' }}>
                            <div className="columns">
                                <div className="column">
                                    <button className="button is-medium" style={{ backgroundColor: '#d5c69f' }} onClick={this.addProduct}> Añadir Producto </button>

                                </div>
                                <div className="column">
                                    <button className="button is-medium" style={{ backgroundColor: '#d5c69f' }} onClick={this.addCategory}> Añadir Categoria de productos </button>

                                </div>
                                <div className="column is-half">

                                </div>
                            </div>

                        </div>


                        {/* FORMULARIO PARA INSERTAR CATEGORIA */}
                        <div className={this.state.addCategoria ? "modal is-active" : "modal"}>
                            <div className="modal-background"></div>
                            <div className="modal-content">
                                <div className="container box">
                                    <div className="has-text-right">
                                        <button className="button is-danger" onClick={this.addCategory}>x</button>
                                    </div>
                                    <div className="has-text-centered">
                                        <h1 className="title" style={{ marginTop: '10px' }}>Añadir nueva categoria</h1>
                                    </div>
                                    <hr style={{ marginTop: '30px' }} />
                                    <form  >
                                        <div className="columns">
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label" style={{ marginTop: '10px' }}>Nombre para nueva categoria</label>
                                                    <div className="control">
                                                        <input className="input" onChange={this.onChange} defaultValue={this.state.nombreNuevaCategoria} name="nombreNuevaCategoria" type="text" placeholder="Entrantes, Postres..." />
                                                    </div>
                                                    <label className="label" style={{ marginTop: '10px' }}>Descripción</label>
                                                    <div className="control">
                                                        <textarea name="descripcion" className="textarea" placeholder="Descripción del producto." size="20" onChange={this.onChange} defaultValue={this.state.descripcion}></textarea>
                                                    </div>
                                                    <label className="label" style={{ marginTop: '10px' }}>Posicion</label>
                                                    <div className="select" >
                                                        <select name="posicion" onChange={this.onChange} defaultValue={this.state.posicion}>
                                                            <option value="1">1</option>
                                                        </select>
                                                    </div>
                                                    <label className="label" style={{ marginTop: '10px' }}>Información extra</label>
                                                    <div className="control">
                                                        <input className="input" onChange={this.onChange} defaultValue={this.state.info_extra} name="info_extra" type="text" placeholder="Estas tapas llevan todas patatas fritas..." />
                                                    </div>
                                                    <div className="has-text-right">
                                                        <button className="button is-success" style={{ marginTop: '10px' }} onClick={this.onSubmitCategorias}> AÑADIR </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* FIN FORMULARIO CATEGORIA*/}
                        {/* FORMULARIO PARA INSERTAR PRODUCTOS*/}

                        <div className={this.state.addingProduct ? "modal is-active" : "modal"}>
                            <div className="modal-background"></div>
                            <div className="modal-content">
                                <div className="container box">
                                    <div className="has-text-right">
                                        <button className="button is-danger" onClick={this.addProduct}>x</button>
                                    </div>
                                    <h1 className="title has-text-centered" style={{ marginTop: '20px' }}>Añadir Producto a la Carta</h1>
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
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_apio" className="styled" type="checkbox" onChange={this.handleApioChange} defaultValue={is_apio} />
                                                                        <label >  Apio</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_altramuces" className="styled" type="checkbox" onChange={this.handleAltramucesChange} defaultValue={is_altramuces} />
                                                                        <label>  Altramuces</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_cacahuete" className="styled" type="checkbox" onChange={this.handleCacahueteChange} defaultValue={is_cacahuete} />
                                                                        <label >  Cacahuete</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_custaceo" className="styled" type="checkbox" onChange={this.handleCrustaceoChange} defaultValue={is_crustaceo} />
                                                                        <label>  Crustaceo</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_frutas_con_cascara" className="styled" type="checkbox" onChange={this.handleCascaraChange} defaultValue={is_frutos_con_cascara} />
                                                                        <label >  Cascara Frutal</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_gluten" className="styled" type="checkbox" onChange={this.handleGlutenChange} defaultValue={is_gluten} />
                                                                        <label >  Gluten</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_huevo" className="styled" type="checkbox" onChange={this.handleHuevoChange} defaultValue={is_huevo} />
                                                                        <label >  Huevo</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_lacteo" className="styled" type="checkbox" onChange={this.handleLacteoChange} defaultValue={is_lacteo} />
                                                                        <label >  Lacteo</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_molusco" className="styled" type="checkbox" onChange={this.handleMoluscoChange} defaultValue={is_molusco} />
                                                                        <label >  Molusco</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_mostaza" className="styled" type="checkbox" onChange={this.handleMostazaChange} defaultValue={is_mostaza} />
                                                                        <label >  Mostaza</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_pescado" className="styled" type="checkbox" onChange={this.handlePescadoChange} defaultValue={is_pescado} />
                                                                        <label >  Pescado</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_sesamo" className="styled" type="checkbox" onChange={this.handleSesamoChange} defaultValue={is_sesamo} />
                                                                        <label >  Sesamo</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="b-checkbox">
                                                                        <input id="checkbox" name="is_soja" className="styled" type="checkbox" onChange={this.handleSojaChange} defaultValue={is_soja} />
                                                                        <label >  Soja</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Descripción</label>
                                            <div className="control">
                                                <textarea name="descripcion" className="textarea" placeholder="Descripción del producto." size="99" onChange={this.onChange} defaultValue={descripcion}></textarea>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="field" >
                                                <div>
                                                    <label className="label">Categoria</label>
                                                    <div className="control">
                                                        <div className="select">
                                                            <select id="categoriaParaProducto" onChange={this.onChangeCategoria} defaultValue={this.state.categoriaParaProducto}>
                                                                <option>Ninguna categoria seleccionada</option>
                                                                {this.props.categorias.map(categoria => (
                                                                    <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: '20px'}}>
                                                    <label className="label">Tamaño</label>
                                                    <div className="control">
                                                        <div className="select">
                                                            <select name="tamanio" onChange={this.onChangeTamanio} defaultValue={this.state.tamanio}>
                                                                <option >Ningun tamaño seleccionado</option>
                                                                <option value="Tapa">Tapa</option>
                                                                <option value="Media racion">Media ración</option>
                                                                <option value="Racion">Ración</option>
                                                                <option value="Plato">Plato</option>
                                                                <option value="Bandeja">Bandeja</option>
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

                                        </div>
                                    </form>
                                    <br />
                                    <div className="control buttons is-centered">
                                        <button className="button is-success" onClick={this.onSubmit}>Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FIN FORMULARIO PARA INSERTAR PRODUCTOS*/}
                        {/* MOSTRAR PRODUCTOS DE UNA CARTA*/}
                        <div className="container">
                            <div>
                                <div className="container">
                                    <div>

                                        <div className="debug">
                                            {this.props.categorias.map(categoria => (
                                                <div style={{ marginTop: '60px' }} key={categoria.id}>
                                                    {/*this.state.vacio ?*/}

                                                    <div className='card equal-height' style={{ backgroundColor: '#d5c69f', height: '60px' }}>
                                                        <div className="container">
                                                            <div className="columns">
                                                                <div className="column">
                                                                    <h1 className="title has-text-centered">{categoria.name}</h1>

                                                                </div>
                                                                <div className="column has-text-right">
                                                                    <button className="button is-danger" onClick={this.props.deleteCategoria.bind(this, categoria.id, categoria.carta)}> Borrar Categoria </button>

                                                                </div>
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    {/*   :
                                                    ""
                                                 */}
                                                    {this.props.cartas.map(producto => (
                                                        <div style={{ marginTop: '20px' }} key={producto.id}>
                                                            {categoria.id == producto.categoria ?
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
                                                                                                src="{{server}}/static/frontend/Allergens/alergeno_apio.svg"
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
                                                                                                <button onClick={this.props.deleteproducto.bind(this, producto.id, producto.categoria)}> Borrar </button>                                                                                    </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {this.state.vacio = false}

                                                                </div>

                                                                :
                                                                <div>
                                                                    {this.state.vacio = false}
                                                                </div>
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FIN MOSTRAR PRODUCTOS DE UNA CARTA*/}
            </Fragment >
        )
    }

}

const mapStateToProps = state => ({
    cartas: state.cartas.cartas,
    categorias: state.cartas.categorias,
    canGetProducts: state.cartas.canGetProducts,
    is_active: state.cartas.is_active,
});

export default connect(mapStateToProps, { subirproducto, addCategoria, getCategorias, deleteproducto, deleteCategoria })(CartaPage);

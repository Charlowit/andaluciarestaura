import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategorias, deleteproducto, subirproducto, addCategoria, deleteCategoria } from '../../actions/carta';
import { getCartaExpecifica } from '../../actions/cartas';


const div100 = {
    width: '100%',
};



export class CartaPage extends Component {

    constructor() {
        super();
        this.state = {
            component: "CATEGORIAS",
            productos: [],
            cif: "",
            categorias: [],
            nameCarta: "",

            categoriaParaProducto: -1,
            name: "",
            descripcion: "",
            tamanio: "",
            tamanio2: "",
            tamanio3: "",
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
            carta: -1,

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

        const { categoriaParaProducto, name, descripcion, tamanio, tamanio2, tamanio3, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja
        } = this.state;
        const { carta } = this.props.match.params.id;
        const producto = { categoriaParaProducto, name, descripcion, tamanio, tamanio2, tamanio3, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, carta };

        this.setState({
            addingProduct: !this.state.addingProduct
        })

        console.log("categoria  --> " + categoriaParaProducto)
        this.props.subirproducto(producto);

    };

    onSubmitCategorias = e => {
        e.preventDefault();

        const { nombreNuevaCategoria, descripcion, posicion, info_extra } = this.state;
        const carta = this.props.match.params.id
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
    onChangePrecio1 = e => this.setState({ tamanio: e.target.value });
    onChangePrecio2 = e => this.setState({ tamanio2: e.target.value });
    onChangePrecio3 = e => this.setState({ tamanio3: e.target.value });


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
        deleteCategoria: PropTypes.func.isRequired,
        auth: PropTypes.func.isRequired,
        addCategoria: PropTypes.func.isRequired,
        cartaReal: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.state.cif = this.props.auth.user.cif
        //Filtrar la carta por id que tenemos que traer desde la otra ventana y una vez que lo tengamos buscamos tambien sus categorias
        console.log("Mira el nombre de la carta --> " + this.props.match.params.id)

        this.props.getCartaExpecifica(this.props.match.params.id)

        //      this.state.nameCarta = this.props.cartaReal.name
        //this.props.getCartas(this.state.cif);
        //this.props.getCategorias(this.props.match.params.id)

    };

    render() {
        const { categoriaParaProducto, name, descripcion, tamanio, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, carta
        } = this.state;
        return (
            <Fragment>



                <section className="hero is-info is-primary  hsl(54%, 15%, 143%) is-bold" style={{ marginTop: '50px' }}>
                    <div className="hero-body hsl(90%, 159%, 79%)">
                        <div className="container has-text-centered">

                            <div className='equal-height is-info'>
                                <div className=" has-text-centered">
                                    <figure className="image is-128x128 is-inline-block">
                                        <img className="is-rounded"
                                            src={`/static/clientes/${this.state.cif}/logo.jpeg`}></img>
                                    </figure>
                                </div>
                            </div>

                            <h1 className="title"> {this.props.auth.user.marca_comercial} </h1>
                            {this.props.cartaReal.map(carta => (
                                <div>
                                    <h2 className="subtitle" style={{ display: 'inline' }}> {carta.eslogan} </h2>


                                    <button class="button is-rounded is-small is-warning" style={{ display: 'inline', marginLeft: '7px', marginTop: '-3px' }} onClick={this.addingCarta}>
                                        <span class="icon is-small">
                                            <i class="fas fa-pen"></i>
                                        </span>
                                    </button>

                                    <p className="field" style={{ marginTop: '15px' }}>
                                        <a className="button is-rounded is-medium" id="id_boton" style={{ marginLeft: '10px' }}>
                                            <span className="icon">
                                                <i className="fab fa-facebook"></i>
                                            </span>
                                        </a>
                                        <button class="button is-rounded is-small is-warning" style={{ display: 'inline' }} onClick={this.addingCarta}>
                                            <span class="icon is-small">
                                                <i class="fas fa-pen"></i>
                                            </span>
                                        </button>
                                        <a className="button is-rounded is-medium" style={{ marginLeft: '10px' }}>
                                            <span className="icon">
                                                <i className="fab fa-tripadvisor"></i>
                                            </span>
                                        </a>
                                        <button class="button is-rounded is-small is-warning" style={{ display: 'inline' }} onClick={this.addingCarta}>
                                            <span class="icon is-small">
                                                <i class="fas fa-pen"></i>
                                            </span>
                                        </button>
                                        <a className="button is-rounded is-medium" style={{ marginLeft: '10px' }} >
                                            <span className="icon">
                                                <i className="fab fa-instagram"></i>
                                            </span>
                                        </a>
                                        <button class="button is-rounded is-small is-warning" style={{ display: 'inline' }} onClick={this.addingCarta}>
                                            <span class="icon is-small">
                                                <i class="fas fa-pen"></i>
                                            </span>
                                        </button>
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
                                                    <h1 className="title" style={{ display: 'inline' }}>{carta.name}</h1>
                                                    <button class="button is-rounded is-small is-warning" style={{ display: 'inline', marginLeft: '10px' }} onClick={this.addingCarta}>
                                                        <span class="icon is-small">
                                                            <i class="fas fa-pen"></i>
                                                        </span>
                                                    </button>
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
                            ))}
                        </div>

                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        <section className="hero is-info is-primary  hsl(54%, 15%, 143%) is-small" style={{ marginTop: '40px', minHeight: '100px' }}>
                            <div className="columns is-gapless has-text-centered" style={{ marginTop: '15px' }}>
                                <div className="column" style={{ marginTop: '10px' }}>
                                    <button className="button is-success is-medium" onClick={this.addProduct}>
                                        <span class="icon">
                                            <i class="fas fa-plus-circle"></i>
                                        </span>
                                        <p style={{ marginTop: '6px' }}> Añadir Producto</p>
                                    </button>

                                </div>
                                <div className="column" style={{ marginTop: '10px', marginBottom: '25px' }}>
                                    <button className="button is-success is-medium" onClick={this.addCategory}>
                                        <span class="icon">
                                            <i class="fas fa-plus-circle"></i>
                                        </span>
                                        <p style={{ marginTop: '6px' }}> Añadir Categoría</p>
                                    </button>
                                </div>

                            </div>
                        </section>

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
                                                        <button className="button is-success" style={{ marginTop: '10px' }} onClick={this.onSubmitCategorias} > AÑADIR </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


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
                                                        <div style={{ marginTop: '20px' }}>
                                                            <label className="label">Tamaño Precio 1</label>
                                                            <div className="control">
                                                                <div className="select">
                                                                    <select name="tamanio" onChange={this.onChangePrecio1} defaultValue={this.state.tamanio}>
                                                                        <option >Ninguno</option>
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
                                                        <div className="field" style={{ marginTop: '10px' }}>
                                                            <label className="label">Precio 1</label>
                                                            <div className="control">
                                                                <input className="input" name="precio1" type="text" placeholder="0.0" onChange={this.onChange} defaultValue={precio1} required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="column">
                                                        <div style={{ marginTop: '20px' }}>
                                                            <label className="label">Tamaño Precio 2</label>
                                                            <div className="control">
                                                                <div className="select">
                                                                    <select name="tamanio2" onChange={this.onChangePrecio2} defaultValue={this.state.tamanio}>
                                                                        <option >Ninguno</option>
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
                                                        <div className="field" style={{ marginTop: '10px' }}>
                                                            <label className="label">Precio 2</label>
                                                            <div className="control">
                                                                <input className="input " name="precio2" type="text" placeholder="0.0" onChange={this.onChange} defaultValue={precio2} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="column">
                                                        <div style={{ marginTop: '20px' }}>
                                                            <label className="label">Tamaño Precio 3</label>
                                                            <div className="control">
                                                                <div className="select">
                                                                    <select name="tamanio3" onChange={this.onChangePrecio3} defaultValue={this.state.tamanio}>
                                                                        <option >Ninguno</option>
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
                                                        <div className="field" style={{ marginTop: '10px' }}>
                                                            <label className="label">Precio 3</label>
                                                            <div className="control">
                                                                <input className="input" name="precio3" type="text" placeholder="0.0" onChange={this.onChange} defaultValue={precio3} />
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

                        <div className="container">
                            <div>
                                <div className="container">
                                    <div>

                                        <div className="debug">
                                            {this.props.categorias.map(categoria => (
                                                <div style={{ marginTop: '60px' }} key={categoria.id}>
                                                    <div className='card equal-height' style={{ backgroundColor: '#d5c69f' }}>
                                                        <div className="container">
                                                            <div className="columns is-mobile">
                                                                <div className="column is-four-fifths">
                                                                    <h1 className="title has-text-centered">{categoria.name}</h1>
                                                                </div>

                                                                <div className="column is-paddingless" >
                                                                    <div style={{ paddingTop: '10px' }}>
                                                                        <button class="button is-danger" onClick={this.props.deleteCategoria.bind(this, categoria.id, categoria.carta)}>
                                                                            <span class="icon is-small">
                                                                                <i class="fas fa-trash"></i>
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {this.props.cartas.map(producto => (
                                                        <div style={{ marginTop: '20px' }} key={producto.id}>
                                                            {categoria.id == producto.categoria ?

                                                                <div className='card'>
                                                                    {/*<div class="card-image">
                                                                        <figure class="image is-4by3">
                                                                            <img
                                                                                src="static/frontend/cerverzaP2.png"></img>
                                                                        </figure>
                                                            </div>*/}
                                                                    <div className="columns">


                                                                        <div className="column">
                                                                            <div className="container">
                                                                                <div className="column is-full">
                                                                                    <div className="columns ">

                                                                                        <div className="column is-two-thirds"
                                                                                            style={{ marginLeft: '2%', marginTop: '2%' }}>
                                                                                            <h1 className="title"> {producto.name} </h1>
                                                                                            <h2 className="subtitle has-text-weight-light">  {producto.descripcion}</h2>
                                                                                        </div>
                                                                                        <div className="column has-text-centered" style={{ marginTop: '10px' }}>
                                                                                            <div className="columns is-mobile">
                                                                                                {producto.precio1 != 0.0 ?
                                                                                                    <div className="column has-text-centered">
                                                                                                        <div
                                                                                                            style={{ width: '100%', marginTop: '5%', marginBottom: '6%' }}>
                                                                                                            <span className="icon is-small" style={{ color: 'rgb(51, 153, 255)' }}>
                                                                                                                <i className="fas fa-dot-circle" aria-hidden="true"></i>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <span>
                                                                                                            <b> {producto.titulo_precio1} </b>
                                                                                                        </span>
                                                                                                        <div style={{ width: '100%' }}>
                                                                                                            <span>
                                                                                                                <b style={{ color: 'red' }}>  {!producto.precio1 == "" ? producto.precio1 : ""}€</b>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    : ""}
                                                                                                {producto.precio2 != 0.0 ?
                                                                                                    <div className="column has-text-centered"
                                                                                                        style={{ marginLeft: '4%' }}>
                                                                                                        <div style={{ width: '100%' }}>
                                                                                                            <span className="icon is-small"
                                                                                                                style={{ fontSize: ' 36px', color: 'rgb(51, 153, 255)' }}>
                                                                                                                <i className="fas fa-dot-circle" aria-hidden="true"></i>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <span>
                                                                                                            <b> {producto.titulo_precio2} </b>
                                                                                                        </span>
                                                                                                        <div style={{ width: '100%' }}>
                                                                                                            <span>
                                                                                                                <b style={{ color: 'red' }}>  {!producto.precio2 == "" ? producto.precio2 : ""}€</b>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    : ""}
                                                                                                {producto.precio3 != 0.0 ?
                                                                                                    <div className="column has-text-centered"
                                                                                                        style={{ marginLeft: '4%' }}>
                                                                                                        <div style={{ width: '100%' }}>
                                                                                                            <span className="icon is-small"
                                                                                                                style={{ fontSize: ' 36px', color: 'rgb(51, 153, 255)' }}>
                                                                                                                <i className="fas fa-dot-circle" aria-hidden="true"></i>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <span>
                                                                                                            <b> {producto.titulo_precio3} </b>
                                                                                                        </span>
                                                                                                        <div style={{ width: '100%' }}>
                                                                                                            <span>
                                                                                                                <b style={{ color: 'red' }}>  {!producto.precio3 == "" ? producto.precio3 : ""}€</b>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    : ""}
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="columns is-full" style={{ marginTop: '-20px' }}>
                                                                                <div className="column is-two-thirds is-full-mobile">
                                                                                    <div className="columns is-mobile">
                                                                                        <div className="column has-text-centered" style={{ marginLeft: '2%' }}>

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
                                                                                                    src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_gluten.svg"
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
                                                                                    </div>
                                                                                </div>
                                                                                <div className="column is-full-mobile" style={{ marginTop: '20px' }}>
                                                                                    <div className="columns is-mobile has-text-centered is-gapless" >
                                                                                        <div className="column">
                                                                                        </div>
                                                                                        <div className="column" >
                                                                                            <div className="is-rounded" style={{ backgroundColor: '#d5c69f', padding: '5px' }}>
                                                                                                <button class="button is-warning">
                                                                                                    <span class="icon is-small">
                                                                                                        <i class="fas fa-pen"></i>
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="column" >
                                                                                            <section className="is-rounded" style={{ backgroundColor: '#d5c69f', padding: '5px' }}>
                                                                                                <button class="button is-danger" onClick={this.props.deleteproducto.bind(this, producto.id, producto.categoria)}>
                                                                                                    <span class="icon is-small">
                                                                                                        <i class="fas fa-trash"></i>
                                                                                                    </span>
                                                                                                </button>
                                                                                            </section>
                                                                                        </div>
                                                                                        <div className="column">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                    </div>

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
    auth: state.auth,
    cartaReal: state.reducerCartas.expecificCarta,
});

export default connect(mapStateToProps, { getCartaExpecifica, subirproducto, addCategoria, getCategorias, deleteproducto, deleteCategoria })(CartaPage);

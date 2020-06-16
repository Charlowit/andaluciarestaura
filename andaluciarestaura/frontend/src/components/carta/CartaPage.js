import React, { Component, Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uploadProducto, updateCategoria, getCategorias, deleteproducto, subirproducto, addCategoria, deleteCategoria, subirPhoto } from '../../actions/carta';
import { updateLogoRounded, updateEstablecimiento, getCartaExpecifica, updateEslogan, updateURL, updateNombreCarta } from '../../actions/cartas';
import CargarPdf from '../cartaestatica/CargarPdf'
import { Animated } from "react-animated-css";
import { Redirect, Link } from 'react-router-dom';

const div100 = {
    width: '100%',
};


const bkg = {
    marginBottom: '6%',
    backgroundPosition: 'center',
    backgroundImage: "url('https://www.dev.andaluciarestaura.com/static/frontend/backLogin.png')",
    backgroundRepeat: 'no-repeat',
    marginTop: '50px',
    backgroundSize: 'cover'

}

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
            precio2: "0.0",
            precio3: "0.0",
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
            is_sulfito: false,
            photo: null,
            file: null,
            carta: -1,

            vacio: false,
            addingProduct: false,
            addCategoria: false,
            editEslogan: false,
            newEslogan: "",
            editURLF: false,
            newUrlF: "",
            editURLI: false,
            newUrlI: "",
            editURLT: false,
            newUrlT: "",
            editNombreCarta: false,
            newCartaNombre: "",
            updatingProduct: false,
            addPhoto: false,
            newEstablecimiento: "",
            editEstablecimiento: false,

            nombreNuevaCategoria: "",
            info_extra: "-",
            posicion: 1,
            clickedProducto: null,

            updating: false,
            updated: false,

            imagenClickada: null,
            addingPhoto: false,

            addingPhotoArray: [],
            fileArray: []

        };
    }


    onSubmit = e => {

        e.preventDefault();

        const { categoriaParaProducto, name, descripcion, tamanio, tamanio2, tamanio3, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, is_sulfito, photo
        } = this.state;
        let carta = this.props.match.params.id;
        console.log("Estoy a null? --> ", carta)
        const producto = { categoriaParaProducto, name, descripcion, tamanio, tamanio2, tamanio3, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, is_sulfito, carta, photo };

        this.setState({
            addingProduct: !this.state.addingProduct
        })

        console.log("categoria  --> " + categoriaParaProducto)
        this.props.subirproducto(producto);

    };

    onSubmitPhotoProducto = (e, index, producto, cif) => {
        e.preventDefault();
        //console.log("ESTE ES EL ID DEL PRODUCTO --> ", this.state.clickedProducto)
        let form_data = new FormData();
        form_data.append('id', producto.id);
        form_data.append('cif', cif);
        form_data.append('photo', this.state.photo);



        this.props.subirPhoto(form_data, producto, cif);

        var is_primera = false;
        if (this.props.cartaReal[0] == producto.carta) {
            is_primera = true
        }
        this.props.uploadProducto(producto, cif, is_primera)
        //setTimeout(this.props.uploadProducto(this.state.clickedProducto), 5000)


        this.setState({
            addingPhotoArray: this.state.addingPhotoArray.map((item, indexDentro) => (
                index == indexDentro ? !item : item = item
            ))
        })
        //this.setState({ state: this.state });
        //window.location.reload(false)
    }

    onSubmitCategorias = e => {
        e.preventDefault();

        const { nombreNuevaCategoria, info_extra } = this.state;
        const posicion = this.props.categorias.length + 1
        const carta = this.props.match.params.id
        const categoria = { nombreNuevaCategoria, posicion, info_extra, carta };

        this.setState({
            addCategoria: !this.state.addCategoria
        })

        this.props.addCategoria(categoria);
    }

    onSubmitURL = (e, carta) => {

        e.preventDefault();

        var url = null;
        var urlType = "";

        if (this.state.editURLF) {
            url = this.state.newUrlF;
            urlType = "F";
            this.setState({
                editURLF: !this.state.editURLF
            })
        } else if (this.state.editURLI) {
            url = this.state.newUrlI;
            urlType = "I";
            this.setState({
                editURLI: !this.state.editURLI
            })
        } else if (this.state.editURLT) {
            url = this.state.newUrlT;
            urlType = "T";
            this.setState({
                editURLT: !this.state.editURLT
            })
        }

        const idCarta = this.props.match.params.id
        const propietario = this.props.auth.user.id
        const directorio = this.props.cartaReal[0].directorio
        const establecimiento = carta.establecimiento
        const name = carta.name
        const updatedCarta = { propietario, idCarta, url, directorio, establecimiento, name };




        console.log("ira el url --> ", url, " y el tipo --> ", urlType)
        this.props.updateURL(updatedCarta, urlType);
    }

    onSubmitNewSlogan = (e, carta) => {

        e.preventDefault();

        const eslogan = this.state.newEslogan
        const idCarta = this.props.match.params.id
        const propietario = this.props.auth.user.id
        const directorio = this.props.cartaReal[0].directorio
        const establecimiento = carta.establecimiento
        const name = carta.name
        const updatedCarta = { propietario, idCarta, eslogan, directorio, establecimiento, name };

        this.setState({
            editEslogan: !this.state.editEslogan
        })

        console.log("mira el nuevo eslogan --> " + eslogan)
        this.props.updateEslogan(updatedCarta);
    }

    onSubmitNewCartaNombre = (e, carta) => {

        e.preventDefault();

        const cartaName = this.state.newCartaNombre
        const idCarta = this.props.match.params.id
        const propietario = this.props.auth.user.id
        const directorio = this.props.cartaReal[0].directorio
        const establecimiento = carta.establecimiento
        const updatedCarta = { propietario, idCarta, cartaName, directorio, establecimiento };

        this.setState({
            editNombreCarta: !this.state.editNombreCarta
        })

        this.props.updateNombreCarta(updatedCarta);
    }

    onSubmitNewEstablecimiento = (e, carta) => {

        e.preventDefault();

        const establecimiento = this.state.newEstablecimiento
        const idCarta = this.props.match.params.id
        const propietario = this.props.auth.user.id
        const directorio = this.props.cartaReal[0].directorio
        const name = carta.name

        const updatedCarta = { propietario, idCarta, establecimiento, directorio, name };

        this.setState({
            editEstablecimiento: !this.state.editEstablecimiento
        })

        this.props.updateEstablecimiento(updatedCarta);
    }

    onSubmitCambiarPosiciones = (e, categoria) => {
        e.preventDefault();
        var anteriorPosicion = categoria.posicion
        categoria.posicion = e.target.value

        var posicionCategoria = -1
        for (var i = 0; i < this.props.categorias.length; i++) {
            if (this.props.categorias[i].posicion == e.target.value && this.props.categorias[i].id != categoria.id) {
                posicionCategoria = i
            }
        }


        this.props.categorias[posicionCategoria].posicion = anteriorPosicion
        console.log("Categoria con igual pocicion que vamos a cambiar --> ", this.props.categorias[posicionCategoria].posicion)
        this.props.updateCategoria(this.props.categorias[posicionCategoria])
        this.props.updateCategoria(categoria)
    }


    onSubmitDesactivateProduct = (e, producto) => {
        e.preventDefault()
        console.log("Antes --> ", producto.is_activo)

        console.log("Antes --> ", producto.is_activo)
        this.props.uploadProducto(producto)
    }

    changeLogoRounded = (e, carta) => {
        e.preventDefault()
        carta.logo_rounded = !carta.logo_rounded
        this.props.updateLogoRounded(carta)
    }

    addProduct = e => {
        this.setState({
            addingProduct: !this.state.addingProduct
        })
    }

    addPhoto = (e, producto) => {

        this.setState({
            imagenClickada: e.target.src,

        });


        this.setState({
            addPhoto: !this.state.addPhoto,

        });

        this.setState({
            clickedProducto: producto
        });

    }

    editProduct = e => {
        this.setState({
            updatingProduct: !this.state.updatingProduct
        })
    }

    addCategory = e => {
        this.setState({
            addCategoria: !this.state.addCategoria
        })
    }

    editEslogan = e => {
        console.log("Hola")
        this.setState({
            editEslogan: !this.state.editEslogan
        })
    }

    editURLF = e => {
        this.setState({
            editURLF: !this.state.editURLF
        })
    }

    editURLI = e => {
        this.setState({
            editURLI: !this.state.editURLI
        })
    }

    editURLT = e => {
        this.setState({
            editURLT: !this.state.editURLT
        })
    }

    editNombreCarta = e => {
        this.setState({
            editNombreCarta: !this.state.editNombreCarta
        })
    }


    editEstablecimiento = e => {
        this.setState({
            editEstablecimiento: !this.state.editEstablecimiento
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

    handleSulfitoChange = (e) => {
        this.setState({
            is_sulfito: !this.state.is_sulfito
        })
    };

    openNewTab = (e, carta) => {
        var directorio = "/clientes/" + this.props.auth.user.cif + "/"
        if (!carta.directorio.includes(directorio)) {
            window.open('http://127.0.0.1:8000/cartaestatica/' + this.props.auth.user.cif);
        } else {
            window.open('http://127.0.0.1:8000/cartaestatica/' + this.props.auth.user.cif + "/" + carta.id);
        }

    }

    handlePhotoChange = (e, index) => {
        this.setState({
            photo: e.target.files[0],
            file: URL.createObjectURL(e.target.files[0]),
        }, console.log("Este es el file --> ", URL.createObjectURL(e.target.files[0])))

        console.log("se va a cambiar? --> ", this.state.fileArray[index])

        this.setState({
            fileArray: this.state.fileArray.map((item, indexDentro) => (
                indexDentro == index ? item = URL.createObjectURL(e.target.files[0]) : item = item
            )),
            addingPhotoArray: this.state.addingPhotoArray.map((item, indexDentro) => (
                index == indexDentro ? !item : item = item
            ))
        })

        console.log("Se habrá cambiao? --> ", this.state.fileArray[index])

    };


    changeImageBackground(e) {
        e.target.style.opacity = '0.5';
    }

    changeImageBackgroundLeave(e) {
        e.target.style.opacity = '1';
    }

    openUrl = (e, url) => {
        if (url != '-') {
            window.open(url)
        }
    }



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
        console.log('Se ejecuta componentDidMount')

        this.props.getCartaExpecifica(this.props.match.params.id)

        //      this.state.nameCarta = this.props.cartaReal.name
        //this.props.getCartas(this.state.cif);
        //this.props.getCategorias(this.props.match.params.id)

    };



    render() {
        const { categoriaParaProducto, name, descripcion, tamanio, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, is_sulfito, carta
        } = this.state;



        return (
            <Fragment>

                <div>
                    {this.props.cartaReal.map(carta => (
                        <div>
                            {/* NO TOCAR POR FAVOR JAMÁS DE LOS JAMASES */}
                            <div className="is-hidden">
                                {this.props.cartas.map(producto => (
                                    this.state.addingPhotoArray.push(false),
                                    this.state.fileArray.push(null)

                                ))}
                            </div>

                            <section className="hero is-bold" style={bkg}>


                                <div className={this.state.editEslogan ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" style={{backgroundColor: '#bca466'}}>
                                            <div className="has-text-right">
                                                <button class="button is-danger" onClick={this.editEslogan}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-times"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <hr style={{ marginTop: '30px' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe tu nuevo eslogan</label>
                                                <div className="control">
                                                    <input className="input" onChange={this.onChange} name="newEslogan" defaultValue={this.state.newEslogan} type="text" placeholder="El mejor restaurante de Granada!" />
                                                </div>
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{color: '#bca466', backgroundColor: 'white'}} onClick={e => this.onSubmitNewSlogan(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editURLF ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" style={{backgroundColor: '#bca466'}}>
                                            <div className="has-text-right">
                                                <button class="button is-danger" onClick={this.editURLF}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-times"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <hr style={{ marginTop: '30px' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe tu URL de Facebook!</label>
                                                <div className="control">
                                                    <input className="input" type="text" name="newUrlF" onChange={this.onChange} defaultValue={this.state.newUrlF} placeholder="https://www.facebook.com/" />
                                                </div>
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{color: '#bca466', backgroundColor: 'white'}} onClick={e => this.onSubmitURL(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editURLI ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" style={{backgroundColor: '#bca466'}}>
                                            <div className="has-text-right">
                                                <button class="button is-danger" onClick={this.editURLI}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-times"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <hr style={{ marginTop: '30px' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe tu URL de Instagram!</label>
                                                <div className="control">
                                                    <input className="input" type="text" name="newUrlI" onChange={this.onChange} defaultValue={this.state.newUrlI} placeholder="https://www.instagram.com/" />
                                                </div>
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{color: '#bca466', backgroundColor: 'white'}} onClick={e => this.onSubmitURL(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editURLT ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" style={{backgroundColor: '#bca466'}}>
                                            <div className="has-text-right">
                                                <button class="button is-danger" onClick={this.editURLT}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-times"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <hr style={{ marginTop: '30px' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe tu URL de Tripadvisor!</label>
                                                <div className="control">
                                                    <input className="input" name="newUrlT" onChange={this.onChange} defaultValue={this.state.newUrlT} type="text" placeholder="https://www.tripadvisor.es/" />
                                                </div>
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{color: '#bca466', backgroundColor: 'white'}} onClick={e => this.onSubmitURL(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editNombreCarta ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" style={{backgroundColor: '#bca466'}}>
                                            <div className="has-text-right">
                                                <button class="button is-danger" onClick={this.editNombreCarta}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-times"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <hr style={{ marginTop: '30px' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe el nuevo nombre de tu carta</label>
                                                <div className="control">
                                                    <input className="input" type="text" name="newCartaNombre" onChange={this.onChange} defaultValue={this.state.newCartaNombre} placeholder="Nombre de la carta" />
                                                </div>
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{color: '#bca466', backgroundColor: 'white'}} onClick={e => this.onSubmitNewCartaNombre(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editEstablecimiento ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" style={{backgroundColor: '#bca466'}}>
                                            <div className="has-text-right">
                                                <button class="button is-danger" onClick={this.editEstablecimiento}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-times"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <hr style={{ marginTop: '30px' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe el establecimiento</label>
                                                <div className="control">
                                                    <input className="input" onChange={this.onChange} name="newEstablecimiento" defaultValue={this.state.newEstablecimiento} type="text" placeholder="El restaurante del Desarrollador" />
                                                </div>
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{color: '#bca466', backgroundColor: 'white'}} onClick={e => this.onSubmitNewEstablecimiento(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-body hsl(90%, 159%, 79%)">
                                    <div className="container has-text-centered">
                                        <div style={{ marginBottom: '20px' }}>
                                            <div className='equal-height is-info' style={{ display: 'inline' }}>

                                                <div className=" has-text-centered">
                                                    <figure className="image is-128x128 is-inline-block">
                                                        {carta.logo_rounded ?
                                                            <img className="is-rounded"
                                                                src={`/static/clientes/${this.state.cif}/logo.jpeg`}></img>
                                                            :
                                                            <img
                                                                src={`/static/clientes/${this.state.cif}/logo.jpeg`}></img>

                                                        }
                                                    </figure>
                                                </div>
                                            </div>

                                            <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline' }} onClick={e => this.changeLogoRounded(e, carta)}>
                                                <span className="icon is-small">
                                                    <i className="fas fa-camera"></i>
                                                </span>
                                            </button>

                                        </div>


                                        <h1 className="title" style={{ display: 'inline', paddingTop: '20px' }}> {carta.establecimiento} </h1>
                                        <button className="button is-rounded is-small" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline', marginLeft: '7px', marginTop: '-3px' }} onClick={this.editEstablecimiento}>
                                            <span className="icon is-small">
                                                <i className="fas fa-pen"></i>
                                            </span>
                                        </button>
                                        <div>
                                            <h2 className="subtitle" style={{ display: 'inline' }}> {carta.eslogan != '-' ? carta.eslogan : "Escribe tu slogan!"} </h2>


                                            <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline', marginLeft: '7px', marginTop: '-3px' }} onClick={this.editEslogan}>
                                                <span className="icon is-small">
                                                    <i className="fas fa-pen"></i>
                                                </span>
                                            </button>

                                            <p className="field" style={{ marginTop: '15px' }}>
                                                <a className="button is-rounded is-medium" id="id_boton" onClick={e => this.openUrl(e, carta.url_facebook)} style={{ marginLeft: '10px' }}>
                                                    <span className="icon">
                                                        <i className="fab fa-facebook"></i>
                                                    </span>
                                                </a>
                                                <button class="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline' }} onClick={this.editURLF}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-pen"></i>
                                                    </span>
                                                </button>
                                                <a className="button is-rounded is-medium" onClick={e => this.openUrl(e, carta.url_tripadvisor)} style={{ marginLeft: '10px' }}>
                                                    <span className="icon">
                                                        <i className="fab fa-tripadvisor"></i>
                                                    </span>
                                                </a>
                                                <button class="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline' }} onClick={this.editURLT}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-pen"></i>
                                                    </span>
                                                </button>
                                                <a className="button is-rounded is-medium" onClick={e => this.openUrl(e, carta.url_instagram)} style={{ marginLeft: '10px' }} >
                                                    <span className="icon">
                                                        <i className="fab fa-instagram"></i>
                                                    </span>
                                                </a>
                                                <button class="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline' }} onClick={this.editURLI}>
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
                                                            <button className="button" onClick={e => this.openNewTab(e, carta)}>
                                                                <span className="icon">
                                                                    <i className=" fas fa-file-pdf"></i>
                                                                </span>
                                                                <span>Ver visualización de la Carta</span>
                                                            </button>
                                                        </div>
                                                        <div className="column">
                                                            <h1 className="title" style={{ display: 'inline' }} > {carta.name}</h1>
                                                            <button class="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline', marginLeft: '10px' }} onClick={this.editNombreCarta}>
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
                                    </div>
                                </div>
                            </section>
                            {!carta.show_as_pdf ?
                                <div>
                                    <div className="section" style={{ marginTop: '-40px' }}>
                                        <div className="container">
                                            <section className="hero is-small" style={{ minHeight: '100px', backgroundColor: '#d5c69f' }}>
                                                <div className="columns is-gapless has-text-centered" style={{ marginTop: '15px' }}>

                                                    {this.props.categorias.length > 0 ?
                                                        <div className="column" style={{ marginTop: '10px' }}>
                                                            <button className="button is-success is-medium" style={{ backgroundColor: 'white', border: '1px solid white' }} onClick={this.addProduct}>
                                                                <span class="icon" style={{ color: '#171c8f' }}>
                                                                    <i class="fas fa-plus-circle"></i>
                                                                </span>
                                                                <p style={{ marginTop: '6px', color: '#171c8f' }}> Añadir Producto</p>
                                                            </button>

                                                        </div>
                                                        :
                                                        <div className="column" style={{ marginTop: '10px' }}>
                                                            <button disabled className="button is-success is-medium" style={{ backgroundColor: 'white', border: '1px solid white' }} onClick={this.addProduct}>
                                                                <span class="icon" style={{ color: '#171c8f' }}>
                                                                    <i class="fas fa-plus-circle"></i>
                                                                </span>
                                                                <p style={{ marginTop: '6px', color: '#171c8f' }}> Añadir Producto</p>
                                                            </button>
                                                        </div>
                                                    }
                                                    <div className="column" style={{ marginTop: '10px', marginBottom: '25px' }}>
                                                        <button className="button is-success is-medium" style={{ backgroundColor: 'white', border: '1px solid white' }} onClick={this.addCategory}>
                                                            <span class="icon" style={{ color: '#171c8f' }}>
                                                                <i class="fas fa-plus-circle"></i>
                                                            </span>
                                                            <p style={{ marginTop: '6px', color: '#171c8f' }}> Añadir Categoría</p>
                                                        </button>
                                                    </div>

                                                </div>
                                            </section>




                                            <div className={this.state.addCategoria ? "modal is-active" : "modal"}>
                                                <div className="modal-background"></div>
                                                <div className="modal-content">
                                                    <div className="container box" style={{ backgroundColor: '#bca466' }}>
                                                        <div className="has-text-right">
                                                            <button className="button is-link" onClick={this.addCategory}>
                                                                <span className="icon is-small">
                                                                    <i className="fas fa-times"></i>
                                                                </span>
                                                            </button>
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

                                                                        <label className="label" style={{ marginTop: '10px' }}>Información extra</label>
                                                                        <div className="control">
                                                                            <input className="input" onChange={this.onChange} defaultValue={this.state.info_extra} name="info_extra" type="text" placeholder="Estas tapas llevan todas patatas fritas..." />
                                                                        </div>
                                                                        <div className="has-text-right">
                                                                            <button className="button is-success" style={{ marginTop: '10px', color: '#bca466', backgroundColor: 'white' }} onClick={this.onSubmitCategorias} > AÑADIR </button>
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
                                                    <div className="container box" style={{ backgroundColor: '#bca466' }}>
                                                        <div className="has-text-right">
                                                            <button className="button is-link" onClick={this.addProduct}>
                                                                <span className="icon is-small">
                                                                    <i className="fas fa-times"></i>
                                                                </span>
                                                            </button>
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
                                                                                            <option value="">Ninguno</option>
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
                                                                                            <option value="">Ninguno</option>
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
                                                                                            <option value="">Ninguno</option>
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
                                                                                <div className="field">
                                                                                    <div className="control">
                                                                                        <div className="b-checkbox">
                                                                                            <input id="checkbox" name="is_sulfito" className="styled" type="checkbox" onChange={this.handleSulfitoChange} defaultValue={is_sulfito} />
                                                                                            <label >  Sulfitos </label>
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
                                                            <button className="button is-success"  style={{backgroundColor: 'white', color:'#bca466'}} onClick={this.onSubmit}>Guardar</button>
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
                                                                            <div className="columns">
                                                                                <div className="column is-two-thirds">
                                                                                    <h1 className="title has-text-centered">{categoria.name}</h1>
                                                                                </div>

                                                                                <div className="column is-full-mobile" >
                                                                                    <div className="columns has-text-centered">
                                                                                        <div className="column if-full-mobile">
                                                                                            <div className="control" style={{ paddingTop: '5px' }}>
                                                                                                <div className="select">
                                                                                                    <select onChange={e => this.onSubmitCambiarPosiciones(e, categoria)}>
                                                                                                        <option>Posicion actual: {categoria.posicion}</option>
                                                                                                        {this.props.categorias.map((categoria, index) => (
                                                                                                            <option value={index + 1}>Posicion {index + 1}</option>
                                                                                                        ))}

                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="column">
                                                                                            <div style={{ paddingTop: '5px' }}>
                                                                                                <button class="button is-danger" onClick={this.props.deleteCategoria.bind(this, categoria.id, categoria.carta)}>
                                                                                                    <span class="icon is-small">
                                                                                                        <i class="fas fa-trash"></i>
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>


                                                                                    </div>
                                                                                </div>


                                                                            </div>
                                                                            <div>
                                                                            </div>
                                                                        </div>
                                                                        {this.props.cartas.map((producto, index) => (
                                                                            <div style={{ marginTop: '20px' }} key={producto.id}>
                                                                                <div className={this.state.addPhoto ? "modal is-active" : "modal"}>
                                                                                    <div className="modal-background"></div>
                                                                                    <div className="modal-content">
                                                                                        <div className="container box">
                                                                                            <div className="has-text-right">
                                                                                                <button className="button is-danger" onClick={e => this.addPhoto(e, this.state.clickedProducto)}>
                                                                                                    <span className="icon is-small">
                                                                                                        <i className="fas fa-times"></i>
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="has-text-centered">
                                                                                                <label className="label  is-size-4">Sube la foto de tu producto</label>
                                                                                                <hr style={{ marginTop: '30px' }} />
                                                                                                <div className="field">
                                                                                                    <div className="file has-name">

                                                                                                    </div>
                                                                                                    <div style={{ marginTop: '10px', marginBottom: '10px' }} className="is-centered">
                                                                                                        <span style={{ marginBottom: '10px' }}>
                                                                                                            <p>Previsualización:</p>
                                                                                                        </span>
                                                                                                        <span>
                                                                                                            <img src={this.state.fileArray[index]} />
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                {/* BUSCATE EL PRODUCTO */}
                                                                                {categoria.id == producto.categoria ?


                                                                                    <div className='card' style={producto.is_activo ? { opacity: '1' } : { opacity: '0.5' }}>
                                                                                        <div className="has-text-centered">
                                                                                            <label className="file-label">
                                                                                                <input className="file-input" type="file" id="logo" accept=".jpeg" onChange={e => this.handlePhotoChange(e, index)} required />
                                                                                                <span className="file-cta">
                                                                                                    <span className="file-icon">
                                                                                                        <i className="fas fa-camera"></i>
                                                                                                    </span>
                                                                                                    <span className="file-label is-centered">
                                                                                                        Escoja su foto
                                                                                                                                </span>
                                                                                                </span>
                                                                                                <div className="control buttons is-centered" >
                                                                                                    <button className="button is-success" onClick={e => this.onSubmitPhotoProducto(e, index, producto, this.state.cif)}>Guardar</button>
                                                                                                </div>
                                                                                            </label>

                                                                                            <div class="card-image" style={{ maxWidth: '480px' }}>
                                                                                                <figure class="image is-1by1">
                                                                                                    <img src={this.state.addingPhotoArray[index] || this.state.fileArray[index] != null ? this.state.fileArray[index] : producto.photo} ></img>
                                                                                                </figure>
                                                                                            </div>
                                                                                        </div>
                                                                                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
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
                                                                                                                    {producto.is_sulfito ?
                                                                                                                        <img
                                                                                                                            src="static/frontend/Allergens/alergeno_sulfito.svg"
                                                                                                                            alt="triangle with all three sides equal" width="70" style={{ marginBottom: '-18px', marginLeft: '-9px' }} />
                                                                                                                        :
                                                                                                                        ""
                                                                                                                    }
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="column is-full-mobile" style={{ marginTop: '20px' }}>
                                                                                                            <div className="columns is-mobile has-text-centered is-gapless" >
                                                                                                                <div className="column" >
                                                                                                                    <div className="is-rounded"
                                                                                                                        style={{
                                                                                                                            backgroundColor: '#d5c69f',
                                                                                                                            padding: '5px'
                                                                                                                        }}>
                                                                                                                        <button
                                                                                                                            className="button is-warning" onClick={(e) => this.onSubmitDesactivateProduct(e, producto)}>

                                                                                                                            <span
                                                                                                                                className="icon is-small">
                                                                                                                                <i className="fas fa-power-off"></i>
                                                                                                                            </span>
                                                                                                                        </button>

                                                                                                                    </div>

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
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Animated>

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
                                </div>

                                :

                                <div style={{ paddingTop: '40px' }}>
                                    <CargarPdf />
                                </div>

                            }

                        </div>

                    ))}
                </div>
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
    isUpdatingPhoto: state.cartas.isUpdatingPhoto
});

export default connect(mapStateToProps, { updateLogoRounded, uploadProducto, updateCategoria, updateEstablecimiento, updateNombreCarta, updateURL, updateEslogan, getCartaExpecifica, subirproducto, addCategoria, getCategorias, deleteproducto, deleteCategoria, subirPhoto })(CartaPage);

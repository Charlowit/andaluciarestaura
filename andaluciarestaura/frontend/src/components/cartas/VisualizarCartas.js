import React, { Component, Fragment } from 'react';
import { getCartas, nuevaCarta, deleteCarta, updateShow } from '../../actions/cartas';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CartaPage } from '../carta/CartaPage'
import { Link } from 'react-router-dom';
import { updateuser } from '../../actions/auth';
import { Animated } from "react-animated-css";
import { createPortal } from 'react-dom';
import Tooltip from '@material-ui/core/Tooltip';

const bkg = {
    marginBottom: '6%',
    backgroundPosition: 'center',
    backgroundImage: "url('https://www.dev.andaluciarestaura.com/static/frontend/backLogin.png')",
    backgroundRepeat: 'no-repeat',
    marginTop: '0px',
    backgroundSize: 'cover'

}




export class VisualizarCartas extends Component {

    constructor() {
        super();
        this.state = {
            categoriasParaNuevaCartaObjs: [],
            categoriasParaNuevaCarta: [],
            nombreNuevaCarta: "",
            propietario: -1, //Es el id del usuario "1" deberiamos de traer el id
            url_facebook: "",
            url_instagram: "",
            url_tripadvisor: "",
            plantilla: "",
            nombreNuevaCategoria: "",
            categoriaSeleccionada: "",
            descripciones: [],
            descripcion: "",
            posiciones: [],
            posicion: -1,
            info_extra: "",
            eslogan: "",
            addingCarta: false,
            is_premium: false,
            establecimiento: "",
            addingCarta: false,
            is_premium: "",
            modal_qr: false,
            cartaClickedId: -1,
            nombreCartaVacio: false,
            establecimientoVacio: false,
            plantillaVacia: false,
        };
    }

    static propTypes = {
        cartas: PropTypes.array.isRequired,
        auth: PropTypes.func.isRequired,
        nuevaCarta: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.state.cif = this.props.auth.user.cif
        this.state.propietario = this.props.auth.user.id
        this.props.getCartas(this.props.auth.user.cif);

    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    },
        console.log("Categoria seleccionada: " + e.target.value),
    );

    addingCarta = e => {
        this.setState({
            addingCarta: !this.state.addingCarta
        })
    }

    openNewTab = e => {
        window.open('http://127.0.0.1:8000/cartaestatica/' + this.props.auth.user.cif);
    }

    onChangePremium = (e, carta) => {
        e.preventDefault();

        carta.show_as_pdf = !carta.show_as_pdf

        this.props.updateShow(carta);
    };


    onSubmit = e => {
        e.preventDefault();

        var url_facebook = this.state.url_facebook
        var url_tripadvisor = this.state.url_tripadvisor
        var url_instagram = this.state.url_instagram
        var eslogan = this.state.eslogan

        if (url_facebook == "") {
            url_facebook = "-"
        }

        if (url_instagram == "") {
            url_instagram = "-"
        }

        if (url_tripadvisor == "") {
            url_tripadvisor = "-"
        }

        if (eslogan == "") {
            eslogan = "Escribe aquí tu eslogan!"
        }

        var nombreCartaVacio = false;
        var establecimientoVacio = false;
        var plantillaVacia = false;
        if (this.state.nombreNuevaCarta == "") {
            this.setState({ nombreCartaVacio: true })
            nombreCartaVacio = true;
            console.log("Esta vacío")
        } else {
            this.setState({ nombreCartaVacio: false })
            nombreCartaVacio = false;
        }

        if (this.state.establecimiento == "") {
            this.setState({ establecimientoVacio: true })
            var establecimientoVacio = true;

        } else {
            this.setState({ establecimientoVacio: false })
        }

        if (this.state.plantilla == "") {
            this.setState({ plantillaVacia: true })
            var plantillaVacia = true;
        } else {
            this.setState({ plantillaVacia: false })
        }

        const { nombreNuevaCarta, propietario, plantilla, establecimiento } = this.state;
        const carta = { nombreNuevaCarta, propietario, url_facebook, url_instagram, url_tripadvisor, eslogan, plantilla, establecimiento };

        console.log("Esta true o false ? --> ", this.state.nombreCartaVacio)
        if (nombreCartaVacio == false && establecimientoVacio == false && plantillaVacia == false) {
            this.setState({
                addingCarta: !this.state.addingCarta
            })
            this.props.nuevaCarta(carta)
        }

    }

    onSubmitDesactivarCarta = (e, carta) => {
        e.preventDefault();
        console.log("Estoy en el submit")
        carta.is_activa = !carta.is_activa;
        console.log("Mira la carta --> " + carta.name)
        this.props.deleteCarta(carta);
    }

    modalQr = (e, cartaId) => {
        this.setState({
            modal_qr: !this.state.modal_qr,
            cartaClickedId: cartaId
        })
    }

    render() {
        return (

            <div style={{ marginBottom: '-20px' }}>
                <div className="has-text-centered" style={{ marginTop: '60px', marginBottom: '60px' }}>


                    <div className="container">
                        <h1 className="label is-size-3">CARTAS DEL NEGOCIO</h1>
                    </div>

                    <div className="has-text-centered" style={{ marginTop: '20px' }}>
                        <button className="button is-success" style={{ backgroundColor: '#bca466' }} onClick={this.addingCarta}>
                            <span className="icon is-small">
                                <i className="fas fa-plus-circle"></i>
                            </span>
                            <p style={{ marginTop: '4px', color: 'white' }}>Añadir carta</p>
                        </button>
                    </div>
                </div>

                <div className="section hero is-paddingless" style={bkg}>
                    <div className="container " style={{ width: '100%' }}>
                        <div className={this.state.addingCarta ? "modal is-active" : "modal"}>
                            <div className="modal-background"></div>
                            <div className="modal-content">
                                <div className="container box" >
                                    <div className="has-text-right">

                                        <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.addingCarta}>
                                            <span className="icon is-small">
                                                <i className="fas fa-times " style={{ color: 'white' }}></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column is-half">
                                            <div className="container">
                                                <div className="has-text-centered">

                                                    <span className="icon" >
                                                        <i className="fas fa-cocktail" style={{ fontSize: '70px', color: "#bca466" }}></i>
                                                    </span>
                                                    <h1 className="title" style={{ marginTop: '10px' }}> NUEVA CARTA </h1>

                                                </div>

                                                <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />                                                 <form>
                                                    <div className="columns ">
                                                        <div className="column ">
                                                            <div className="field">
                                                                <label className="label">Nombre</label>

                                                                {this.state.nombreCartaVacio ?
                                                                    <div>
                                                                        <div className="control">
                                                                            <input className="input is-danger" onChange={this.onChange} name="nombreNuevaCarta" defaultValue={this.state.nombreNuevaCarta} type="text" placeholder="Nombre para la carta" />
                                                                        </div>
                                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo Nombre está vacío</p>
                                                                    </div>
                                                                    :
                                                                    <div className="control">
                                                                        <input className="input" onChange={this.onChange} name="nombreNuevaCarta" defaultValue={this.state.nombreNuevaCarta} type="text" placeholder="Nombre para la carta" />
                                                                    </div>
                                                                }
                                                            </div>
                                                            <div className="field">
                                                                <label className="label">Establecimiento</label>

                                                                {this.state.establecimientoVacio ?
                                                                    <div>
                                                                        <div className="control">
                                                                            <input className="input is-danger" onChange={this.onChange} name="establecimiento" defaultValue={this.state.establecimiento} type="text" placeholder="Bar del Desarrollador!" />
                                                                        </div>
                                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo Establecimiento está vacío</p>
                                                                    </div>
                                                                    :
                                                                    <div className="control">
                                                                        <input className="input" onChange={this.onChange} name="establecimiento" defaultValue={this.state.establecimiento} type="text" placeholder="Bar del Desarrollador!" />
                                                                    </div>
                                                                }


                                                            </div>
                                                            <div className="field">
                                                                <label className="label">Plantilla</label>

                                                                {this.state.plantillaVacia ?
                                                                    <div className="control">
                                                                        <div className="select is-danger">
                                                                            <select name="plantilla" onChange={this.onChange} defaultValue={this.state.plantilla}>
                                                                                <option value="">Ninguna plantilla seleccionada</option>
                                                                                <option value="Plantilla 1">Plantilla 1</option>
                                                                                <option value="Plantilla 2">Plantilla 2</option>
                                                                                <option value="Plantilla 3">Plantilla 3</option>
                                                                            </select>
                                                                        </div>
                                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>Debes seleccionar una plantilla.</p>

                                                                    </div>

                                                                    :
                                                                    <div className="control">
                                                                        <div className="select">
                                                                            <select name="plantilla" onChange={this.onChange} defaultValue={this.state.plantilla}>
                                                                                <option>Ninguna plantilla seleccionada</option>
                                                                                <option value="Plantilla 1">Plantilla 1</option>
                                                                                <option value="Plantilla 2">Plantilla 2</option>
                                                                                <option value="Plantilla 3">Plantilla 3</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>


                                                                }
                                                            </div>
                                                            <div className="field">
                                                                <label className="label">URL Facebook</label>
                                                                <div className="control">
                                                                    <input className="input" onChange={this.onChange} name="url_facebook" defaultValue={this.state.url_facebook} type="text" placeholder="https://www.facebook.com/" />
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <label className="label">URL Instagram</label>
                                                                <div className="control">
                                                                    <input className="input" onChange={this.onChange} name="url_instagram" defaultValue={this.state.url_instagram} type="text" placeholder="https://www.instagram.com/instagram/?hl=es" />
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <label className="label">URL TripAdvisor</label>
                                                                <div className="control">
                                                                    <input className="input" onChange={this.onChange} name="url_tripadvisor" defaultValue={this.state.url_tripadvisor} type="text" placeholder="https://www.tripadvisor.es/" />
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <label className="label">Eslogan</label>
                                                                <div className="control">
                                                                    <input className="input" onChange={this.onChange} name="eslogan" defaultValue={this.state.eslogan} type="text" placeholder="El mejor restaurante de la zona!" />
                                                                </div>
                                                            </div>

                                                            <hr />
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="control buttons is-centered">
                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={this.onSubmit}>Guardar carta</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className=" has-text-centered" style={{ marginTop: '0px', marginBottom: '40px', width: '100%' }}>


                            {this.props.cartas.map((carta, index) => (
                                <div width='100%' style={{ display: 'inline-block' }}>
                                    <div className={this.state.modal_qr ? "modal is-active" : "modal"}>
                                        <div className="modal-background"></div>
                                        <div className="modal-content">

                                            <div className="box" >
                                                <div className="has-text-right">

                                                    <button className="button is-danger " onClick={this.modalQr}>
                                                        <span className="icon is-small">
                                                            <i className="fas fa-times"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <figure className="image is-4by4"  >
                                                    <img className="" src={this.props.cartas[0].id == this.state.cartaClickedId ? `/static/clientes/${this.props.auth.user.cif}/qr.jpg` : `/static/clientes/${this.props.auth.user.cif}/${carta.id}/qr.jpg`}></img>
                                                </figure>
                                                <div className="field ">
                                                    <div className="field-body" >
                                                        <div className="field" >
                                                            <a className="button" style={{ backgroundColor: '#bca466', color: 'white' }} href={this.props.cartas[0].id == this.state.cartaClickedId ? `/static/clientes/${this.props.auth.user.cif}/qr.jpg` : `/static/clientes/${this.props.auth.user.cif}/${carta.id}/qr.jpg`} download="QRcode">Descargar</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>s
                                        </div>

                                    <div style={{ margin: '5px' }}>
                                        <div >
                                            <Animated animationIn="slideInUp">
                                                <div className="card" style={carta.is_activa ? { border: '1px solid #bca466', maxWidth: '400px', marginTop: '40px' } : { backgroundColor: '#c7c7c7', opacity: '0.5', maxWidth: '400px', marginTop: '40px' }}>

                                                    <div className="card-content" >
                                                        <div >
                                                            <div className="card-image" style={{ border: '1px solid #bca466' }} onClick={e => this.modalQr(e, carta.id)}>
                                                                <figure className="image is-4by4">
                                                                    <img className="" src={index == 0 ? `/static/clientes/${this.props.auth.user.cif}/qr.jpg` : `/static/clientes/${this.props.auth.user.cif}/${carta.id}/qr.jpg`}></img>
                                                                </figure>
                                                            </div>
                                                            <div className="media" style={{ paddingTop: '40px' }}>
                                                                <div className="media-left">
                                                                    <figure className="image is-48x48">

                                                                        <img className="is-rounded" src={carta.logo_propio ? `${carta.directorio}/logo.jpeg` : `/static/clientes/${this.state.cif}/logo.jpeg`}></img>
                                                                    </figure>
                                                                </div>
                                                                <div className="media-content" height='auto'>
                                                                    <p className="title is-5" style={carta.is_activa ? { color: '#bca466' } : { color: 'black' }}>{carta.establecimiento}</p>
                                                                    <p className="subtitle is-6" style={carta.is_activa ? { color: '#bca466' } : { color: 'black' }}>{carta.name}</p>
                                                                </div>
                                                            </div>


                                                        </div>


                                                        <div className="content" style={{ paddingTop: '10px' }}>
                                                            <div className="select">
                                                                <select onChange={e => this.onChangePremium(e, carta)} defaultValue={carta.show_as_pdf}>
                                                                    <option value="true">Ver como PDF</option>
                                                                    <option value="false">Vista Premium</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <footer className="card-footer">
                                                            <div className="card-footer-item" >
                                                                <Tooltip title="Activar o desactivar carta">

                                                                    <button className="button is-link is-rounded" onClick={e => this.onSubmitDesactivarCarta(e, carta)} style={carta.is_activa ? { backgroundColor: '#bca466', color: 'white' } : { backgroundColor: 'white', border: '1px solid #bca466', color: '#bca466' }}>
                                                                        <span className="icon is-small" >
                                                                            <i className="fas fa-power-off"></i>
                                                                        </span>
                                                                    </button>
                                                                </Tooltip>

                                                            </div>
                                                            <div className="card-footer-item">
                                                                <button className="button">

                                                                    <Link className="link" style={{ width: '100%', color: '#bca466' }} to={`/carta-page/${carta.id}`}>Editar</Link>

                                                                </button>
                                                            </div>
                                                            <div className="card-footer-item">
                                                                <Tooltip title="Visitas de la carta">
                                                                    <span className="icon has-text-left"  >
                                                                        <i className="fas fa-eye" style={{ fontSize: '35px', color: '#bca466' }}></i>
                                                                    </span>
                                                                </Tooltip>

                                                                <p style={{ marginLeft: '20px', marginTop: '4px' }}>{carta.contador_visitas}</p>
                                                                {/*
                                                                <button className="button is-danger" style={{ backgroundColor: '#bca466' }}>
                                                                    <span className="icon is-small">
                                                                        <i className="fas fa-trash" ></i>
                                                                    </span>
                                                                </button>*/}
                                                            </div>
                                                        </footer>



                                                    </div>
                                                </div>
                                            </Animated>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    cartas: state.reducerCartas.cartas,
    auth: state.auth,
});

export default connect(mapStateToProps, { updateShow, updateuser, getCartas, nuevaCarta, deleteCarta })(VisualizarCartas);

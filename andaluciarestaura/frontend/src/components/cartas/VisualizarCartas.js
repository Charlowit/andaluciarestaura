import React, { Component, Fragment } from 'react';
import { getCartas, nuevaCarta, deleteCarta, updateShow } from '../../actions/cartas';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CartaPage } from '../carta/CartaPage'
import { Link } from 'react-router-dom';
import { updateuser } from '../../actions/auth';


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
            is_premium: "",
            modal_qr: false,
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
        if (this.state.url_facebook == "") {
            this.state.url_facebook = "-"
        }

        if (this.state.url_instagram == "") {
            this.state.url_instagram = "-"
        }

        if (this.state.url_tripadvisor == "") {
            this.state.url_tripadvisor = "-"
        }

        if (this.state.eslogan == "") {
            this.state.eslogan = "-"
        }

        const { nombreNuevaCarta, propietario, url_facebook, url_instagram, url_tripadvisor, eslogan, plantilla } = this.state;
        const carta = { nombreNuevaCarta, propietario, url_facebook, url_instagram, url_tripadvisor, eslogan, plantilla };
        this.setState({
            addingCarta: !this.state.addingCarta
        })
        this.props.nuevaCarta(carta)
    }

    onSubmitDesactivarCarta = (e, carta) => {
        e.preventDefault();
        console.log("Estoy en el submit")
        carta.is_activa = !carta.is_activa;
        console.log("Mira la carta --> " + carta.name)
        this.props.deleteCarta(carta);
    }

    modalQr = e => {
        this.setState({
            modal_qr: !this.state.modal_qr
        })
    }

    render() {
        return (

            <div className="section" style={{ marginTop: '100px' }}>
                <div className="container">
                    <div className={this.state.addingCarta ? "modal is-active" : "modal"}>
                        <div class="modal-background"></div>
                        <div class="modal-content">
                            <div className="container box">
                                <div className="has-text-right">
                                    <button class="button is-danger" onClick={this.addingCarta}>
                                        <span class="icon is-small">
                                            <i class="fas fa-times"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="columns is-centered">
                                    <div className="column is-half">
                                        <div className="container">

                                            <h1 className="title has-text-centered">Crear nueva carta</h1>
                                            <form>
                                                <div className="columns ">
                                                    <div className="column ">
                                                        <div className="field">
                                                            <label className="label">Nombre</label>
                                                            <div className="control">
                                                                <input className="input" onChange={this.onChange} name="nombreNuevaCarta" defaultValue={this.state.nombreNuevaCarta} type="text" placeholder="Nombre para la carta" />
                                                            </div>
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
                                                        <div className="field">
                                                            <label className="label">Plantilla</label>
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
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="control buttons is-centered">
                                                <button className="button is-success" onClick={this.onSubmit}>Guardar carta y categorias</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="button is-success" onClick={this.addingCarta}>
                            <span class="icon is-small">
                                <i class="fas fa-plus-circle"></i>
                            </span>
                            <p style={{ marginTop: '4px' }}>Añadir carta</p>
                        </button>
                    </div>

                    <div className="columns has-text-centered" style={{ marginTop: '40px' }}>
                        <div className="column">


                            {this.props.cartas.map(carta => (
                                <div style={{ display: "inline-block", margin: '10px' }}>
                                    <div className="card" style={carta.is_activa ? { backgroundColor: '#bca466', maxWidth: '300px', marginTop: '40px' } : { backgroundColor: 'grey', maxWidth: '300px', marginTop: '40px' }}>

                                        <div className="card-content">

                                            <div className={this.state.modal_qr ? "modal is-active" : "modal"}>
                                                <div className="modal-background"></div>
                                                <div className="modal-content">

                                                    <div className="box">
                                                        <div className="has-text-right">

                                                            <button class="button is-danger " onClick={this.modalQr}>
                                                                <span class="icon is-small">
                                                                    <i class="fas fa-times"></i>
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <figure className="image is-4by4">
                                                            <img className="" src={`/static/clientes/${this.props.auth.user.cif}/qr.jpg`}></img>
                                                        </figure>
                                                        <div className="field ">
                                                            <div className="field-body" >
                                                                <div className="field" >
                                                                    <a className="button" style={{ backgroundColor: '#bca466', color: 'white' }} href={`/static/clientes/${this.props.auth.user.cif}/qr.jpg`} download="QRcode">Descargar</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="card-image" onClick={this.modalQr}>
                                                <figure className="image is-4by4">
                                                    <img className="" src={`/static/clientes/${this.props.auth.user.cif}/qr.jpg`}></img>
                                                </figure>
                                            </div>
                                            <div class="media" style={{ paddingTop: '40px' }}>
                                                <div class="media-left">
                                                    <figure class="image is-48x48">
                                                        <img className="is-rounded" src={`/static/clientes/${this.props.auth.user.cif}/logo.jpeg`}></img>
                                                    </figure>
                                                </div>
                                                <div class="media-content">
                                                    <p class="title is-4">{carta.name}</p>
                                                    <p class="subtitle is-6">Carta gratuita</p>
                                                </div>
                                            </div>

                                            <div class="content">
                                                <div className="select">
                                                    <select onChange={e => this.onChangePremium(e, carta)} defaultValue={carta.show_as_pdf}>
                                                        <option value="true">Ver como PDF</option>
                                                        <option value="false">Vista Premium</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="columns">
                                                <div className="column">



                                                    <button className="button">
                                                        <Link className="link" style={{ width: '100%', color: '#bca466' }} to={`/carta-page/${carta.id}`}>Editar carta</Link>
                                                    </button>
                                                </div>
                                                <div className="column">
                                                    <button class="button is-link is-rounded" onClick={e => this.onSubmitDesactivarCarta(e, carta)}>
                                                        <span class="icon is-small">
                                                            <i class="fas fa-power-off"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                {/* ESTE ES EL DELETE DE VERDAD */}
                                                {/* onClick={this.props.deleteCarta.bind(this, carta.id, this.props.auth.user.cif)} */}
                                                <div className="column">
                                                    <button class="button is-danger">
                                                        <span class="icon is-small">
                                                            <i class="fas fa-trash"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>

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

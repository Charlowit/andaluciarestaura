import React, { Component, Fragment } from 'react';
import { getCartas, nuevaCarta, deleteCarta } from '../../actions/cartas';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CartaPage } from '../carta/CartaPage'
import { Link } from 'react-router-dom';


export class VisualizarCartas extends Component {

    constructor() {
        super();
        this.state = {
            cif: "",
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
            is_premium: false
        };
    }

    static propTypes = {
        cartas: PropTypes.array.isRequired,
        auth: PropTypes.func.isRequired,
        nuevaCarta: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.state.cif = this.props.auth.user.cif
        this.state.propietario = this.props.auth.user.id
        this.props.getCartas(this.state.cif);
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    },
        console.log("Categoria seleccionada: " + e.target.value),
    );



    onSubmitDelete = e => {
        event.preventDefault();
        console.log("Categoria --> " + this.state.categoriaSeleccionada)
        let filteredArray = this.state.categoriasParaNuevaCarta.filter(item => item !== this.state.categoriaSeleccionada)
        this.setState({ categoriasParaNuevaCarta: filteredArray });
        this.setState({ categoriaSeleccionada: this.state.categoriasParaNuevaCarta[0] })
    }

    onSubmitModify = e => {
        console.log("entrao")
        event.preventDefault();

        if (this.state.nombreNuevaCategoria != "") {
            var newArray = this.state.categoriasParaNuevaCarta.slice();
            newArray.push(this.state.nombreNuevaCategoria);

            this.setState({
                categoriasParaNuevaCarta: newArray
            });

        }
    }

    addingCarta = e => {
        this.setState({
            addingCarta: !this.state.addingCarta
        })
    }

    onSubmit = e => {
        event.preventDefault();
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
                                                                        <option value="Plantilla1">Plantilla 1</option>
                                                                        <option value="Plantilla2">Plantilla 2</option>
                                                                        <option value="Plantilla3">Plantilla 3</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="control buttons is-centered">
                                                {/* onClick={this.onSubmit}*/}
                                                <button className="button is-success">Guardar carta y categorias</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="button is-success" onClick={this.addingCarta}>
                        <span class="icon is-small">
                            <i class="fas fa-plus-circle"></i>
                        </span>
                        <p style={{ marginTop: '4px' }}>Añadir carta</p>
                    </button>
                    <div className="columns has-text-centered" style={{ marginTop: '40px' }}>
                        <div className="column">
                            <table className="table is-striped">
                                <thead>
                                    <tr>
                                        <th>Identificador del sistema</th>
                                        <th>Nombre de la carta</th>
                                        <th>Plantilla</th>
                                        <th>QR</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.cartas.map(carta => (
                                        <tr key={carta.id}>
                                            <td>{carta.id}</td>
                                            <td>{carta.name}</td>
                                            <td>
                                                <div className="select">
                                                    <select name="is_premium" onChange={this.onChange} defaultValue={this.state.plantilla}>
                                                        <option>Ninguna plantilla seleccionada</option>
                                                        <option value="false">No es Premium</option>
                                                        <option value="true">Premium</option>
                                                    </select>
                                                </div>
                                                {carta.plantilla}
                                            </td>
                                            <td>
                                                <div>
                                                    <figure className="image is-128x128 is-inline-block">
                                                        <img className="" src={`/static/clientes/${this.props.auth.user.cif}/qr.jpg`}></img>
                                                    </figure>
                                                </div>
                                            </td>
                                            {/*<td><button className="button is-warning">Editar</button></td>*/}
                                            <td>
                                                <div>
                                                    <Link className="navbar-link" style={{ width: '100%' }} to={`/carta-page/${carta.id}`}>Ver carta</Link>
                                                </div>
                                            </td>
                                            <td>
                                                <button class="button is-danger" onClick={this.props.deleteCarta.bind(this, carta.id, this.props.auth.user.cif)}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-trash"></i>
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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

export default connect(mapStateToProps, { getCartas, nuevaCarta, deleteCarta })(VisualizarCartas);

import React, { Component, Fragment } from 'react';
import { getCartas, nuevaCarta, deleteCarta } from '../../actions/cartas';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CartaPage } from '../carta/CartaPage'


export class VisualizarCartas extends Component {

    constructor() {
        super();
        this.state = {
            cif: "",
            categoriasParaNuevaCartaObjs: [],
            categoriasParaNuevaCarta: [],
            nombreNuevaCarta: "",
            propietario: 38, //Es el id del usuario "1" deberiamos de traer el id
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
            eslogan: ""
        };
    }

    static propTypes = {
        cartas: PropTypes.array.isRequired,
        auth: PropTypes.func.isRequired,
        nuevaCarta: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getCartas(1);
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

    onSubmit = e => {
        event.preventDefault();
        if (this.state.url_facebook == ""){
            this.state.url_facebook = "-"
        } 

        if (this.state.url_instagram == ""){
            this.state.url_instagram = "-"
        }

        if (this.state.url_tripadvisor == ""){
            this.state.url_tripadvisor = "-"
        }

        if (this.state.eslogan == ""){
            this.state.eslogan = "-"
        }

        const { nombreNuevaCarta, propietario, url_facebook, url_instagram, url_tripadvisor, eslogan, plantilla } = this.state;
        const carta = { nombreNuevaCarta, propietario, url_facebook, url_instagram, url_tripadvisor, eslogan, plantilla };
        this.props.nuevaCarta(carta)
    }

    render() {
        return (
            <div className="section" style={{ marginTop: '100px' }}>
                <div className="container">
                    <div className="container">

                        <div className="columns is-centered">
                            <div className="column is-one-third">
                                <div className="container box">
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
                                        <button className="button is-success" onClick={this.onSubmit}>Guardar carta y categorias</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered" style={{ marginTop: '40px' }}>
                        <div className="column is-full-mobile">
                            <table className="table is-striped">
                                <thead>
                                    <tr>
                                        <th>Identificador del sistema</th>
                                        <th>Nombre de la carta</th>
                                        <th>URL_Facebook</th>
                                        <th>URL_Instagram</th>
                                        <th>URL_Tripadvisor</th>
                                        <th>Eslogan</th>
                                        <th>Plantilla</th>
                                        <th>QR</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.cartas.map(carta => (
                                        <tr key={carta.id}>
                                            <td>{carta.id}</td>
                                            <td>{carta.name}</td>
                                            <td>{carta.url_facebook}</td>
                                            <td>{carta.url_instagram}</td>
                                            <td>{carta.url_tripadvisor}</td>
                                            <td>{carta.eslogan}</td>
                                            <td>{carta.plantilla}</td>
                                            <td>QR</td>
                                            <td><button className="button is-warning">Editar</button></td>
                                            <td><button className="button is-danger" onClick={this.props.deleteCarta.bind(this, carta.id, 1)}>Borrar</button></td>
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

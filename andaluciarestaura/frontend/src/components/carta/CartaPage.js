import React, { Component, Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uploadProducto, updateCategoria, getCategorias, deleteproducto, subirproducto, addCategoria, deleteCategoria, subirPhoto, uploadProductParams } from '../../actions/carta';
import { updateIntroduccion, subirCartaLogo, updateLogoRounded, updateEstablecimiento, getCartaExpecifica, updateEslogan, updateURL, updateNombreCarta, getCartas  } from '../../actions/cartas';
import CargarPdf from '../cartaestatica/CargarPdf'
import { Animated } from "react-animated-css";
import { Redirect, Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

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
            photoLogo: null,
            logoChange: null,
            editingLogo: false,
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
            indexEditing: -1,
            newEstablecimiento: "",
            editEstablecimiento: false,

            nombreNuevaCategoria: "",
            info_extra: "",
            posicion: 1,
            clickedProducto: null,

            updating: false,
            updated: false,

            imagenClickada: null,
            addingPhoto: false,

            addingPhotoArray: [],
            fileArray: [],
            editingProduct: false,
            productoClicked: null,

            nombreEstablecimientoVacio: false,
            esloganVacio: false,
            urlVacio: false,
            nombreCartaVacio: false,
            newIntroduccion: "",
            editIntroduccion: false,
            introduccionVacia: false,
            borrarCategoria: false,
            borrarProducto: false
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

    onSubmitPhotoProducto = e => {
        e.preventDefault();
        //console.log("ESTE ES EL ID DEL PRODUCTO --> ", this.state.clickedProducto)
        let form_data = new FormData();
        form_data.append('id', this.state.clickedProducto.id);
        form_data.append('cif', this.props.auth.user.cif);
        form_data.append('photo', this.state.photo);



        this.props.subirPhoto(form_data, this.state.clickedProducto, this.props.auth.user.cif);
        var is_primera = false;
<<<<<<< HEAD
=======
        console.log("CARTA DE 0 --> ", this.props.totalcartas[0].id)
        console.log("CARTA DE 0 --> ", this.state.clickedProducto.carta)
>>>>>>> master
        if (this.props.totalcartas[0].id == this.state.clickedProducto.carta) {
           console.log("CARTA REAL DE 0 --> ",this.props.totalcartas[0].id )
           console.log("PRODUCTO CARTA ID --> ",  this.state.clickedProducto.carta) 
           is_primera = true
        }
        console.log("ESTO ES LO QUE VALE IS_PRIMERA " , is_primera)
        this.props.uploadProducto(this.state.clickedProducto, this.props.auth.user.cif, is_primera)

        is_primera = false;
        //setTimeout(this.props.uploadProducto(this.state.clickedProducto), 5000)


        this.setState({
            addPhoto: false,
            addingPhotoArray: this.state.addingPhotoArray.map((item, indexDentro) => (
                this.state.indexEditing == indexDentro ? !item : item = item
            ))
        })
        //this.setState({ state: this.state });
        //window.location.reload(false)
    }

    onSubmitCategorias = e => {
        e.preventDefault();

        const { nombreNuevaCategoria } = this.state;
        const posicion = this.props.categorias.length + 1
        const carta = this.props.match.params.id

        var info_extra = "-"
        if (this.state.info_extra != "") {
            info_extra = this.state.info_extra
        }
        const categoria = { nombreNuevaCategoria, posicion, info_extra, carta };

        this.setState({
            addCategoria: !this.state.addCategoria
        })

        this.props.addCategoria(categoria);
    }

    onSubmitDeleteCategoria = (e, id, carta) => {
        e.preventDefault()
        this.props.deleteCategoria(id, carta)
        this.setState({
            borrarCategoria: !this.state.borrarCategoria
        })
    }

    onSubmitDeleteProducto = (e, id, categoria) => {
        e.preventDefault()
        this.props.deleteproducto(id, categoria)

        this.setState({
            borrarProducto: !this.state.borrarProducto
        })
    }

    onSubmitURL = (e, carta) => {

        e.preventDefault();

        var url = null;
        var urlType = "";

        var urlVacio = false;

        if (this.state.editURLF) {
            url = this.state.newUrlF;
            urlType = "F";

        } else if (this.state.editURLI) {
            url = this.state.newUrlI;
            urlType = "I";

        } else if (this.state.editURLT) {
            url = this.state.newUrlT;
            urlType = "T";

        }

        var urlFinal = ""
        if (url == "") {
            url = "-"
        } else {
            url = url
        }

        const idCarta = this.props.match.params.id
        const propietario = this.props.auth.user.id
        const directorio = this.props.cartaReal[0].directorio
        const establecimiento = carta.establecimiento
        const name = carta.name
        const updatedCarta = { propietario, idCarta, url, directorio, establecimiento, name };




        this.props.updateURL(updatedCarta, urlType);

        if (this.state.editURLF) {
            this.setState({
                editURLF: !this.state.editURLF
            })
        } else if (this.state.editURLI) {
            this.setState({
                editURLI: !this.state.editURLI
            })
        } else if (this.state.editURLT) {
            this.setState({
                editURLT: !this.state.editURLT
            })
        }

    }

    onSubmitNewSlogan = (e, carta) => {

        e.preventDefault();

        var esloganVacio = false;
        if (this.state.newEslogan == "") {
            this.setState({ esloganVacio: true })
            esloganVacio = true
        } else {
            this.setState({ esloganVacio: false })
        }

        if (esloganVacio == false) {
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
    }

    onSubmitNewCartaNombre = (e, carta) => {

        e.preventDefault();

        var nombreCartaVacio = false;

        if (this.state.newCartaNombre == "") {
            this.setState({ nombreCartaVacio: true })
            nombreCartaVacio = true
        } else {
            this.setState({ nombreCartaVacio: false })
        }

        if (nombreCartaVacio == false) {
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
    }

    onSubmitNewEstablecimiento = (e, carta) => {

        e.preventDefault();

        var nombreEstablecimientoVacio = false;

        if (this.state.newEstablecimiento == "") {
            this.setState({ nombreEstablecimientoVacio: true })
            nombreEstablecimientoVacio = true
        } else {
            this.setState({ nombreEstablecimientoVacio: false })
        }

        if (nombreEstablecimientoVacio == false) {
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
        this.props.updateCategoria(this.props.categorias[posicionCategoria], true)
        this.props.updateCategoria(categoria, false)
    }


    onSubmitDesactivateProduct = (e, producto) => {
        e.preventDefault()
        console.log("Antes --> ", producto.is_activo)

        console.log("Antes --> ", producto.is_activo)

        this.props.uploadProducto(producto)
    }

    onSubmitNewIntroduccion = (e, carta) => {
        e.preventDefault()

        var introduccionVacia = false
        if (this.state.newIntroduccion == "") {
            carta.introduccion = "-"
        } else {
            carta.introduccion = this.state.newIntroduccion

        }


        this.props.updateIntroduccion(carta)

        this.setState({
            editIntroduccion: !this.editIntroduccion
        })


    }

    onSubmitDesactivarIntroduccion = (e, carta) => {
        e.preventDefault()
        carta.visualizar_introduccion = !carta.visualizar_introduccion
        this.props.updateIntroduccion(carta)
    }

    onSubmitEditarProducto = (e, producto) => {

        e.preventDefault();

        const { name, descripcion, tamanio, tamanio2, tamanio3, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, is_sulfito
        } = this.state;

        var categoriaPropia = this.state.clickedProducto.categoria;
        var categoria = this.state.clickedProducto.categoria;
        if (this.state.categoriaParaProducto != -1) {
            categoria = this.state.categoriaParaProducto
        }
        let carta = this.state.clickedProducto.carta;
        let photo = this.state.clickedProducto.photo;
        var id = this.state.clickedProducto.id;
        console.log("Categoria --> ", categoria)
        const producto2 = { id, categoria, name, descripcion, tamanio, tamanio2, tamanio3, precio1, precio2, precio3, is_apio, is_altramuces, is_cacahuete, is_crustaceo, is_frutos_con_cascara, is_gluten, is_huevo, is_lacteo, is_molusco, is_mostaza, is_pescado, is_sesamo, is_soja, is_sulfito, carta, photo };


        this.props.uploadProductParams(producto2, categoriaPropia);

        this.setState({
            updatingProduct: !this.state.updatingProduct,
            clickedProducto: null,
            categoriaParaProducto: -1
        })
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

    addPhoto = (e, producto, index) => {

        this.setState({
            imagenClickada: e.target.src,

        });


        console.log("Index editing ..> ", index)
        this.setState({
            indexEditing: index
        })

        var addingPhotoArray = this.state.addingPhotoArray
        addingPhotoArray[index] = !addingPhotoArray[index]
        this.setState({
            addPhoto: !this.state.addPhoto,
            addingPhotoArray: addingPhotoArray
        });

        this.setState({
            clickedProducto: producto
        });

    }

    editIntroduccion = e => {
        this.setState({
            editIntroduccion: !this.state.editIntroduccion
        })
    }

    editProduct = (e, producto) => {

        if (producto != null) {
            this.setState({
                clickedProducto: producto
            })
            console.log("Camio de producto!")
        } else {
            this.setState({
                clickedProducto: null
            })
            console.log("Camio de producto a null!")

        }
        this.setState({
            updatingProduct: !this.state.updatingProduct,
            tamanio: producto.titulo_precio1,
            tamanio2: producto.titulo_precio2,
            tamanio3: producto.titulo_precio3,
            precio1: producto.precio1,
            precio2: producto.precio2,
            precio3: producto.precio3,
            descripcion: producto.descripcion,
            name: producto.name,
            is_apio: producto.is_apio,
            is_altramuces: producto.is_altramuces,
            is_cacahuete: producto.is_cacahuete,
            is_crustaceo: producto.is_crustaceo,
            is_frutos_con_cascara: producto.is_frutos_con_cascara,
            is_gluten: producto.is_gluten,
            is_huevo: producto.is_huevo,
            is_lacteo: producto.is_lacteo,
            is_molusco: producto.is_molusco,
            is_mostaza: producto.is_mostaza,
            is_pescado: producto.is_pescado,
            is_sesamo: producto.is_sesamo,
            is_soja: producto.is_soja,
            is_sulfito: producto.is_sulfito,
        })
    }

    borrarCategoria = e => {
        this.setState({
            borrarCategoria: !this.state.borrarCategoria
        })
    }

    borrarProducto = (e, producto) => {
        this.setState({
            borrarProducto: !this.state.borrarProducto,
            clickedProducto: producto
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
            editURLF: !this.state.editURLF,
            urlVacio: false
        })
    }

    editURLI = e => {
        this.setState({
            editURLI: !this.state.editURLI,
            urlVacio: false
        })
    }

    editURLT = e => {
        this.setState({
            editURLT: !this.state.editURLT,
            urlVacio: false
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
            window.open('https://www.andaluciarestaura.com/cartaestatica/' + this.props.auth.user.cif);
        } else {
            window.open('https://www.andaluciarestaura.com/cartaestatica/' + this.props.auth.user.cif + "/" + carta.id);
        }

    }

    hangleModalLogoCarta = e => {
        this.setState({
            editingLogo: !this.state.editingLogo,
            logoChange: null
        })
    }


    handleLogoChange = e => {
        this.setState({
            photoLogo: e.target.files[0],
            logoChange: URL.createObjectURL(e.target.files[0]),

        })
    }

    onSubmitLogoCarta = e => {
        e.preventDefault();
        //console.log("ESTE ES EL ID DEL PRODUCTO --> ", this.state.clickedProducto)
        let form_data = new FormData();
        form_data.append('id', this.props.cartaReal[0].id);
        form_data.append('cif', this.props.auth.user.cif);
        form_data.append('photo', this.state.photoLogo);

        this.props.subirCartaLogo(form_data, this.props.cartaReal[0]);

        this.setState({
            editingLogo: !this.state.editingLogo
        })

    }

    handlePhotoChange = (e) => {
        this.setState({
            photo: e.target.files[0],
            file: URL.createObjectURL(e.target.files[0]),
        }, console.log("Este es el file --> ", URL.createObjectURL(e.target.files[0])))

        console.log("se va a cambiar? --> ", this.state.fileArray[this.state.indexEditing])

        this.setState({
            fileArray: this.state.fileArray.map((item, indexDentro) => (
                indexDentro == this.state.indexEditing ? item = URL.createObjectURL(e.target.files[0]) : item = item
            )),

        })

        console.log("Se habrá cambiao? --> ", this.state.fileArray[this.state.indexEditing])

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
        totalcartas: PropTypes.array.isRequired,
        cartas: PropTypes.array.isRequired,
        deleteproducto: PropTypes.func.isRequired,
        subirproducto: PropTypes.func.isRequired,
        deleteCategoria: PropTypes.func.isRequired,
        auth: PropTypes.func.isRequired,
        addCategoria: PropTypes.func.isRequired,
        cartaReal: PropTypes.object.isRequired,
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


                                <div className={this.state.borrarProducto ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" >
                                            <div className="has-text-right">

                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.borrarProducto}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">


                                                <span className="icon" >
                                                    <i className="fas fa-trash" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                </span>
                                                <h1 className="title" style={{ marginTop: '10px' }}> BORRAR PRODUCTO </h1>
                                            </div>
                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
                                            <form>
                                                <label className="label has-text-centered" style={{ marginTop: '10px' }}>Estas intentando borrar un producto! ¿Estas seguro?</label>

                                                <div className="columns">
                                                    <div className="column"></div>
                                                    <div className="column">
                                                        <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                            <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitDeleteProducto(e, this.state.clickedProducto.id, producto.categoria)}>Si</button>
                                                        </div>
                                                    </div>
                                                    <div className="column">
                                                        <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                            <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={this.borrarProducto}>No</button>
                                                        </div>
                                                    </div>
                                                    <div className="column"></div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                                <div className={this.state.addingPhotoArray[this.state.indexEditing] ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box">
                                            <div className="has-text-right">
                                                <button className="button is-danger" onClick={e => this.addPhoto(e, this.state.clickedProducto, this.state.indexEditing)}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">
                                                <label className="label  is-size-4">Sube la foto de tu producto</label>
                                                <hr style={{ marginTop: '30px' }} />

                                                <div class="field">
                                                    <div class="file ">
                                                        <label class="file-label">
                                                            <input class="file-input" type="file" id="logo" accept=".jpeg" onChange={e => this.handlePhotoChange(e, this.state.indexEditing)} name="resume" />
                                                            <span class="file-cta">
                                                                <span class="file-icon">
                                                                    <i class="fas fa-camera"></i>
                                                                </span>
                                                                <span class="file-label">
                                                                    Escoja la nueva foto del producto
                                                                </span>
                                                            </span>

                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div style={{ marginTop: '10px', marginBottom: '10px' }} className="is-centered">
                                                        <span style={{ marginBottom: '10px' }}>
                                                            <p>Previsualización:</p>
                                                        </span>
                                                        <span>
                                                            <img src={this.state.fileArray[this.state.indexEditing]} ></img>
                                                        </span>
                                                    </div>
                                                </div>
                                                <button className="button is-success" onClick={this.onSubmitPhotoProducto}>Guardar</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editEslogan ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" >
                                            <div className="has-text-right">

                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.editEslogan}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">
                                                <span className="icon" >
                                                    <i className="fas fa-quote-right" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                </span>
                                                <h1 className="title" style={{ marginTop: '10px' }}> NOMBRE ESTABLECIMIENTO </h1>

                                            </div>

                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />                                             <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe tu nuevo eslogan</label>

                                                {this.state.esloganVacio ?
                                                    <div>
                                                        <div className="control">
                                                            <input className="input is-danger" onChange={this.onChange} name="newEslogan" defaultValue={this.state.newEslogan} type="text" placeholder="El mejor restaurante de Granada!" />
                                                        </div>
                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo está vacío</p>

                                                    </div>
                                                    :
                                                    <div className="control">
                                                        <input className="input " onChange={this.onChange} name="newEslogan" defaultValue={this.state.newEslogan} type="text" placeholder="El mejor restaurante de Granada!" />
                                                    </div>

                                                }
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitNewSlogan(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editURLF ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" >
                                            <div className="has-text-right">

                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.editURLF}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">
                                                <span className="icon" >
                                                    <i className="fab fa-facebook" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                </span>
                                                <h1 className="title" style={{ marginTop: '10px' }}> PÁGINA DE FACEBOOK </h1>
                                            </div>

                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe tu URL de Facebook!</label>
                                                {this.state.urlVacio ?
                                                    <div>
                                                        <div className="control">
                                                            <input className="input is-danger" type="text" name="newUrlF" onChange={this.onChange} defaultValue={this.state.newUrlF} placeholder="https://www.facebook.com/" />
                                                        </div>
                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo está vacío</p>

                                                    </div>
                                                    :
                                                    <div className="control">
                                                        <input className="input" type="text" name="newUrlF" onChange={this.onChange} defaultValue={this.state.newUrlF} placeholder="https://www.facebook.com/" />
                                                    </div>
                                                }
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitURL(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editURLI ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" >
                                            <div className="has-text-right">

                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.editURLI}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">
                                                <span className="icon" >
                                                    <i className="fab fa-instagram" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                </span>
                                                <h1 className="title" style={{ marginTop: '10px' }}> PÁGINA DE INSTAGRAM </h1>
                                            </div>
                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe tu URL de Instagram!</label>
                                                {this.state.urlVacio ?
                                                    <div>
                                                        <div className="control">
                                                            <input className="input is-danger" type="text" name="newUrlI" onChange={this.onChange} defaultValue={this.state.newUrlI} placeholder="https://www.instagram.com/" />
                                                        </div>
                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo está vacío</p>

                                                    </div>
                                                    :
                                                    <div className="control">
                                                        <input className="input" type="text" name="newUrlI" onChange={this.onChange} defaultValue={this.state.newUrlI} placeholder="https://www.instagram.com/" />
                                                    </div>
                                                }
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitURL(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editURLT ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box">
                                            <div className="has-text-right">

                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.editURLT}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">
                                                <span className="icon" >
                                                    <i className="fab fa-tripadvisor" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                </span>
                                                <h1 className="title" style={{ marginTop: '10px' }}> PÁGINA DE TRIPADVISOR </h1>
                                            </div>
                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe tu URL de Tripadvisor!</label>
                                                {this.state.urlVacio ?
                                                    <div>
                                                        <div className="control">
                                                            <input className="input is-danger" name="newUrlT" onChange={this.onChange} defaultValue={this.state.newUrlT} type="text" placeholder="https://www.tripadvisor.es/" />
                                                        </div>
                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo está vacío</p>
                                                    </div>
                                                    :
                                                    <div className="control">
                                                        <input className="input" name="newUrlT" onChange={this.onChange} defaultValue={this.state.newUrlT} type="text" placeholder="https://www.tripadvisor.es/" />
                                                    </div>
                                                }
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitURL(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editNombreCarta ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box" >
                                            <div className="has-text-right">

                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.editNombreCarta}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">


                                                <span className="icon" >
                                                    <i className="fas fa-file-signature" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                </span>
                                                <h1 className="title" style={{ marginTop: '10px' }}> NOMBRE CARTA </h1>
                                            </div>
                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
                                            <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe el nuevo nombre de tu carta</label>
                                                {this.state.nombreCartaVacio ?
                                                    <div>
                                                        <div className="control">
                                                            <input className="input is-danger" type="text" name="newCartaNombre" onChange={this.onChange} defaultValue={this.state.newCartaNombre} placeholder="Nombre de la carta" />
                                                        </div>
                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo está vacío</p>

                                                    </div>
                                                    :
                                                    <div className="control">
                                                        <input className="input" type="text" name="newCartaNombre" onChange={this.onChange} defaultValue={this.state.newCartaNombre} placeholder="Nombre de la carta" />
                                                    </div>
                                                }
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitNewCartaNombre(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.editEstablecimiento ? "modal is-active" : "modal"}>
                                    <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="container box">
                                            <div className="has-text-right">

                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.editEstablecimiento}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">
                                                <span className="icon" >
                                                    <i className="fas fa-map-marker-alt" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                </span>
                                                <h1 className="title" style={{ marginTop: '10px' }}> NOMBRE ESTABLECIMIENTO </h1>
                                            </div>
                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />                                                          <form>
                                                <label className="label" style={{ marginTop: '10px' }}>Escribe el establecimiento</label>
                                                {this.state.nombreEstablecimientoVacio ?
                                                    <div>
                                                        <div className="control">
                                                            <input className="input is-danger" onChange={this.onChange} name="newEstablecimiento" defaultValue={this.state.newEstablecimiento} type="text" placeholder="El restaurante del Desarrollador" />
                                                        </div>
                                                        <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo está vacío</p>

                                                    </div>

                                                    :
                                                    <div className="control">
                                                        <input className="input" onChange={this.onChange} name="newEstablecimiento" defaultValue={this.state.newEstablecimiento} type="text" placeholder="El restaurante del Desarrollador" />
                                                    </div>
                                                }
                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitNewEstablecimiento(e, carta)}>Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class={this.state.editingLogo ? "modal is-active" : "modal"}>
                                    <div class="modal-background"></div>
                                    <div class="modal-content">
                                        <div className="container box">
                                            <div className="has-text-right">
                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.hangleModalLogoCarta}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="has-text-centered">
                                                <span className="icon" >
                                                    <i className="fas fa-camera" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                </span>
                                                <h1 className="title" style={{ marginTop: '10px' }}> NUEVO LOGO DE LA CARTA </h1>
                                            </div>

                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
                                            <div class="field">
                                                <div class="file ">
                                                    <label class="file-label">
                                                        <input class="file-input" type="file" id="logo" accept=".jpeg" onChange={this.handleLogoChange} name="resume" />
                                                        <span class="file-cta">
                                                            <span class="file-icon">
                                                                <i class="fas fa-camera"></i>
                                                            </span>
                                                            <span class="file-label">
                                                                Escoja el nuevo logo
                                                            </span>
                                                        </span>

                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className="subtitle">Previsualización: </h1>
                                                <div className="has-text-centered">
                                                    <img className="is-rounded" src={this.state.logoChange}></img>
                                                </div>
                                            </div>
                                            <div className="has-text-centered">
                                                <button className="button  is-success" style={{ backgroundColor: '#bca466', color: 'white' }} onClick={this.onSubmitLogoCarta}>Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-body hsl(90%, 159%, 79%)">
                                    <div className="container has-text-centered">
                                        <div style={{ marginBottom: '20px' }}>
                                            <div className='equal-height is-info'>
                                                {this.props.totalcartas[0].id != this.props.cartaReal[0].id ?
                                                    <Tooltip title="Cambiar logo de la carta">
                                                        <button className="button " style={{ backgroundColor: 'white', color: '#bca466', marginBottom: '10px' }} onClick={this.hangleModalLogoCarta}>
                                                            <span className="icon is-small">
                                                                <i className="fas fa-pen"></i>
                                                            </span>
                                                        </button>
                                                    </Tooltip>
                                                    : ""}

                                                <div className=" has-text-centered" >
                                                    <figure className="image is-128x128 is-inline-block">
                                                        {carta.logo_rounded ?
                                                            <img className="is-rounded"
                                                                src={this.state.editingLogo || this.state.logoChange != null ? this.state.logoChange : carta.logo_propio ? `/static/${carta.directorio}/logo.jpeg` : `/static/clientes/${this.state.cif}/logo.jpeg`}></img>
                                                            :
                                                            <img
                                                                src={this.state.editingLogo || this.state.logoChange != null ? this.state.logoChange : carta.logo_propio ? `/static/${carta.directorio}/logo.jpeg` : `/static/clientes/${this.state.cif}/logo.jpeg`}></img>

                                                        }
                                                    </figure>
                                                </div>

                                            </div>
                                            {carta.logo_rounded ?
                                                <Tooltip title="Cambia la forma del logo">
                                                    <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white' }} onClick={e => this.changeLogoRounded(e, carta)}>
                                                        <span className="icon is-small" style={{ marginTop: '-5px' }}>
                                                            <i className="fas fa-camera"></i>
                                                        </span>
                                                        <span style={{ color: '#bca466', fontSize: '17px' }}>Click para logo cuadrado!</span>
                                                    </button>
                                                </Tooltip>
                                                :
                                                <Tooltip title="Cambia la forma del logo">
                                                    <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white' }} onClick={e => this.changeLogoRounded(e, carta)}>
                                                        <span className="icon is-small" style={{ marginTop: '-5px' }}>
                                                            <i className="fas fa-camera"></i>
                                                        </span>
                                                        <span style={{ color: '#bca466', fontSize: '17px' }}>Click para logo redondo!</span>
                                                    </button>
                                                </Tooltip>
                                            }

                                        </div>


                                        <h1 className="title" style={{ display: 'inline', paddingTop: '20px' }}> {carta.establecimiento} </h1>
                                        <Tooltip title="Editar el establecimiento">
                                            <button className="button is-rounded is-small" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline', marginLeft: '7px', marginTop: '-3px' }} onClick={this.editEstablecimiento}>
                                                <span className="icon is-small">
                                                    <i className="fas fa-pen"></i>
                                                </span>
                                            </button>
                                        </Tooltip>
                                        <div style={{ paddingTop: '35px' }}>
                                            <h2 className="subtitle" style={{ display: 'inline' }}> {carta.eslogan != '-' ? carta.eslogan : "Escribe tu slogan!"} </h2>

                                            <Tooltip title="Editar el eslogan actual">

                                                <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline', marginLeft: '7px', marginTop: '-3px' }} onClick={this.editEslogan}>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-pen"></i>
                                                    </span>
                                                </button>
                                            </Tooltip>
                                            <div className="field" style={{ marginTop: '15px' }}>
                                                <a className="button is-rounded is-medium" id="id_boton" onClick={e => this.openUrl(e, carta.url_facebook)} style={{ marginLeft: '10px' }}>
                                                    <span className="icon">
                                                        <i className="fab fa-facebook"></i>
                                                    </span>
                                                </a>
                                                <Tooltip title="Editar el url de Facebook">

                                                    <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline' }} onClick={this.editURLF}>
                                                        <span className="icon is-small">
                                                            <i className="fas fa-pen"></i>
                                                        </span>
                                                    </button>
                                                </Tooltip>

                                                <a className="button is-rounded is-medium" onClick={e => this.openUrl(e, carta.url_tripadvisor)} style={{ marginLeft: '10px' }}>
                                                    <span className="icon">
                                                        <i className="fab fa-tripadvisor"></i>
                                                    </span>
                                                </a>

                                                <Tooltip title="Editar el url de Tripadvisor">

                                                    <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white' }} onClick={this.editURLT}>
                                                        <span className="icon is-small">
                                                            <i className="fas fa-pen"></i>
                                                        </span>
                                                    </button>
                                                </Tooltip>

                                                <a className="button is-rounded is-medium" onClick={e => this.openUrl(e, carta.url_instagram)} style={{ marginLeft: '10px' }} >
                                                    <span className="icon">
                                                        <i className="fab fa-instagram"></i>
                                                    </span>
                                                </a>
                                                <Tooltip title="Editar el url de Instagram">
                                                    <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline' }} onClick={this.editURLI}>
                                                        <span className="icon is-small">
                                                            <i className="fas fa-pen"></i>
                                                        </span>
                                                    </button>
                                                </Tooltip>
                                            </div>
                                            <hr />
                                            <div className="container">
                                                <div className="buttons">
                                                    <div className="columns" style={div100}>
                                                        <div className="column">
                                                            <Tooltip title="Abre la carta online">
                                                                <button className="button" onClick={e => this.openNewTab(e, carta)}>
                                                                    <span className="icon">
                                                                        <i className=" fas fa-file-pdf"></i>
                                                                    </span>
                                                                    <span>Ver visualización de la Carta</span>
                                                                </button>
                                                            </Tooltip>
                                                        </div>
                                                        <div className="column">
                                                            <h1 className="title" style={{ display: 'inline' }} > {carta.name}</h1>
                                                            <Tooltip title="Cambiar el nombre actual de la carta">
                                                                <button className="button is-rounded is-small is-warning" style={{ color: '#bca466', backgroundColor: 'white', display: 'inline', marginLeft: '10px' }} onClick={this.editNombreCarta}>
                                                                    <span className="icon is-small">
                                                                        <i className="fas fa-pen"></i>
                                                                    </span>
                                                                </button>
                                                            </Tooltip>
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
                                    <div className={this.state.editIntroduccion ? "modal is-active" : "modal"}>
                                        <div className="modal-background"></div>
                                        <div className="modal-content">
                                            <div className="container box">
                                                <div className="has-text-right">

                                                    <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.editIntroduccion}>
                                                        <span className="icon is-small">
                                                            <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="has-text-centered">
                                                    <span className="icon" >
                                                        <i className="fas fa-align-justify" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                    </span>
                                                    <h1 className="title" style={{ marginTop: '10px' }}> INTRODUCCION </h1>
                                                </div>
                                                <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />                                                          <form>
                                                    <label className="label" style={{ marginTop: '10px' }}>Escribe la introduccion de la carta</label>
                                                    {this.state.introduccionVacia ?
                                                        <div>
                                                            <div className="control">
                                                                <textarea name="newIntroduccion is-danger" className="textarea" placeholder="Esta es la mejor carta de todas!" size="99" onChange={this.onChange} defaultValue={this.state.newIntroduccion} type="text"></textarea>
                                                            </div>
                                                            <p className="help is-danger" style={{ fontSize: '15px', color: 'red' }}>El campo está vacío</p>

                                                        </div>

                                                        :
                                                        <div className="control">
                                                            <textarea name="newIntroduccion" className="textarea" placeholder="Esta es la mejor carta de todas!" size="99" onChange={this.onChange} defaultValue={this.state.newIntroduccion} type="text"></textarea>
                                                        </div>
                                                    }
                                                    <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                        <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitNewIntroduccion(e, carta)}>Guardar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '-40px' }}>
                                        <div className="columns">
                                            <div className="column is-one-quarter">
                                            </div>
                                            <div className="column has-text-centered">
                                                <Tooltip title="Activar o desactivar introducción">
                                                    <button
                                                        className="button is-warning is-rounded" style={{ backgroundColor: '#bca466' }} onClick={e => this.onSubmitDesactivarIntroduccion(e, carta)}>

                                                        <span
                                                            className="icon is-small" >
                                                            <i className="fas fa-power-off" style={{ color: 'white' }}></i>
                                                        </span>
                                                    </button>
                                                </Tooltip>
                                                <Tooltip title="Editar introducción">
                                                    <button
                                                        className="button is-warning is-rounded" style={{ backgroundColor: '#bca466' }} onClick={this.editIntroduccion}>
                                                        <span
                                                            className="icon is-small" >
                                                            <i className="fas fa-pen" style={{ color: 'white' }}></i>
                                                        </span>
                                                    </button>
                                                </Tooltip>
                                                <div style={{ marginTop: '10px' }}>

                                                    {carta.introduccion == "-" ?

                                                        <p style={carta.visualizar_introduccion ? { marginLeft: '20px', marginRight: '20px', fontSize: '20px' } : { opacity: 0.5, marginLeft: '20px', marginRight: '20px', fontSize: '20px' }}><b>Escribe aquí la introducción a tu carta!</b></p>
                                                        :
                                                        <p style={carta.visualizar_introduccion ? { marginLeft: '20px', marginRight: '20px', fontSize: '20px' } : { opacity: 0.5, marginLeft: '20px', marginRight: '20px', fontSize: '20px' }}><b>{carta.introduccion}</b></p>
                                                    }
                                                </div>
                                            </div>
                                            <div className="column is-one-quarter">
                                            </div>
                                        </div>

                                    </div>
                                    <div className="section">
                                        <div className="container">
                                            <section className="hero is-small" style={{ minHeight: '100px', backgroundColor: '#d5c69f' }}>
                                                <div className="columns is-gapless has-text-centered" style={{ marginTop: '15px' }}>

                                                    {this.props.categorias.length > 0 ?
                                                        <div className="column" style={{ marginTop: '10px' }}>
                                                            <Tooltip title="Añade un producto a la carta">
                                                                <button className="button is-success is-medium" style={{ backgroundColor: 'white', border: '1px solid white' }} onClick={this.addProduct}>
                                                                    <span class="icon" style={{ color: 'black' }}>
                                                                        <i class="fas fa-plus-circle"></i>
                                                                    </span>
                                                                    <p style={{ marginTop: '6px', color: 'black' }}> Añadir Producto</p>
                                                                </button>
                                                            </Tooltip>
                                                        </div>
                                                        :
                                                        <div className="column" style={{ marginTop: '10px' }}>

                                                            <button disabled className="button is-success is-medium" style={{ backgroundColor: 'white', border: '1px solid white' }} onClick={this.addProduct}>
                                                                <span class="icon" style={{ color: 'black' }}>
                                                                    <i class="fas fa-plus-circle"></i>
                                                                </span>
                                                                <p style={{ marginTop: '6px', color: 'black' }}> Añadir Producto</p>
                                                            </button>

                                                        </div>
                                                    }

                                                    <div className="column" style={{ marginTop: '10px', marginBottom: '25px' }}>
                                                        <Tooltip title="Añade una categoria a la carta">

                                                            <button className="button is-success is-medium" style={{ backgroundColor: 'white', border: '1px solid white' }} onClick={this.addCategory}>
                                                                <span class="icon" style={{ color: 'black' }}>
                                                                    <i class="fas fa-plus-circle"></i>
                                                                </span>
                                                                <p style={{ marginTop: '6px', color: 'black' }}> Añadir Categoría</p>
                                                            </button>
                                                        </Tooltip>

                                                    </div>


                                                </div>
                                            </section>




                                            <div className={this.state.addCategoria ? "modal is-active" : "modal"}>
                                                <div className="modal-background"></div>
                                                <div className="modal-content">
                                                    <div className="container box">
                                                        <div className="has-text-right">
                                                            <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.addCategory}>
                                                                <span className="icon is-small">
                                                                    <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="has-text-centered">

                                                            <span className="icon" >
                                                                <i className="fas fa-clipboard" style={{ fontSize: '70px', color: "#bca466" }}></i>
                                                            </span>
                                                            <h1 className="title" style={{ marginTop: '10px' }}> NUEVA CATEGORIA </h1>

                                                        </div>

                                                        <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />                                                        <form  >
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
                                                                            <button className="button is-success" style={{ marginTop: '10px', color: 'white', backgroundColor: '#bca466' }} onClick={this.onSubmitCategorias} > AÑADIR </button>
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
                                                    <div className="container box" >
                                                        <div className="has-text-right">
                                                            <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.addProduct}>
                                                                <span className="icon is-small">
                                                                    <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="has-text-centered">

                                                            <span className="icon" >
                                                                <i className="fas fa-coffee" style={{ fontSize: '70px', color: "#bca466" }}></i>
                                                            </span>
                                                            <h1 className="title" style={{ marginTop: '10px' }}> NUEVO PRODUCTO </h1>

                                                        </div>

                                                        <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
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
                                                                                            <option value="Caña">Caña</option>
                                                                                            <option value="Tubo">Tubo</option>
                                                                                            <option value="Maceta">Maceta</option>
                                                                                            <option value="Copa">Copa</option>
                                                                                            <option value="Medio">Medio</option>
                                                                                            <option value="Botellin">Botellin</option>
                                                                                            <option value="Botella">Botella</option>
                                                                                            <option value="Tercio 1/3">Tercio 1/3</option>
                                                                                            <option value="Quinto 1/5">Quinto 1/5</option>
                                                                                            <option value="Medio Litro 1/2">Medio Litro 1/2</option>
                                                                                            <option value="Litro 1L">Litro 1L</option>
                                                                                            <option value="Jarra">Jarra</option>
                                                                                            <option value="Pinta">Pinta</option>
                                                                                            <option value="20cl">20cl</option>
                                                                                            <option value="25cl">25cl</option>
                                                                                            <option value="33cl">33cl</option>
                                                                                            <option value="33cl">Chupito</option>
                                                                                            <option value="33cl">Cocktel</option>
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
                                                                                            <option value="Caña">Caña</option>
                                                                                            <option value="Tubo">Tubo</option>
                                                                                            <option value="Maceta">Maceta</option>
                                                                                            <option value="Copa">Copa</option>
                                                                                            <option value="Medio">Medio</option>
                                                                                            <option value="Botellin">Botellin</option>
                                                                                            <option value="Botella">Botella</option>
                                                                                            <option value="Tercio 1/3">Tercio 1/3</option>
                                                                                            <option value="Quinto 1/5">Quinto 1/5</option>
                                                                                            <option value="Medio Litro 1/2">Medio Litro 1/2</option>
                                                                                            <option value="Litro 1L">Litro 1L</option>
                                                                                            <option value="Jarra">Jarra</option>
                                                                                            <option value="Pinta">Pinta</option>
                                                                                            <option value="20cl">20cl</option>
                                                                                            <option value="25cl">25cl</option>
                                                                                            <option value="33cl">33cl</option>
                                                                                            <option value="33cl">Chupito</option>
                                                                                            <option value="33cl">Cocktel</option>
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
                                                                                            <option value="Caña">Caña</option>
                                                                                            <option value="Tubo">Tubo</option>
                                                                                            <option value="Maceta">Maceta</option>
                                                                                            <option value="Copa">Copa</option>
                                                                                            <option value="Medio">Medio</option>
                                                                                            <option value="Botellin">Botellin</option>
                                                                                            <option value="Botella">Botella</option>
                                                                                            <option value="Tercio 1/3">Tercio 1/3</option>
                                                                                            <option value="Quinto 1/5">Quinto 1/5</option>
                                                                                            <option value="Medio Litro 1/2">Medio Litro 1/2</option>
                                                                                            <option value="Litro 1L">Litro 1L</option>
                                                                                            <option value="Jarra">Jarra</option>
                                                                                            <option value="Pinta">Pinta</option>
                                                                                            <option value="20cl">20cl</option>
                                                                                            <option value="25cl">25cl</option>
                                                                                            <option value="33cl">33cl</option>
                                                                                            <option value="33cl">Chupito</option>
                                                                                            <option value="33cl">Cocktel</option>
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
                                                                                            <input id="checkbox" name="is_crustaceo" className="styled" type="checkbox" onChange={this.handleCrustaceoChange} defaultValue={is_crustaceo} />
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
                                                            <button className="button is-success" style={{ backgroundColor: '#bca466', color: 'white' }} onClick={this.onSubmit}>Guardar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*  EDITAR PRODUCTO */}
                                            {this.state.clickedProducto != null ?
                                                <div className={this.state.updatingProduct ? "modal is-active" : "modal"}>
                                                    <div className="modal-background"></div>
                                                    <div className="modal-content">
                                                        <div className="container box" >
                                                            <div className="has-text-right">

                                                                <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={e => this.editProduct(e, null)}>
                                                                    <span className="icon is-small">
                                                                        <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div className="has-text-centered">

                                                                <span className="icon" >
                                                                    <i className="fas fa-coffee" style={{ fontSize: '70px', color: "#bca466" }}></i>
                                                                </span>
                                                                <h1 className="title" style={{ marginTop: '10px' }}> EDITAR PRODUCTO </h1>

                                                            </div>
                                                            <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
                                                            <form>
                                                                <div className="columns">
                                                                    <div className="column">
                                                                        <div className="field">
                                                                            <label className="label">Nombre</label>
                                                                            <div className="control">
                                                                                <input className="input" name="name" type="text" placeholder="Nombre del Producto" onChange={this.onChange} defaultValue={this.state.clickedProducto.name} required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="columns">
                                                                            <div className="column">
                                                                                <div style={{ marginTop: '20px' }}>
                                                                                    <label className="label">Tamaño Precio 1</label>
                                                                                    <div className="control">
                                                                                        <div className="select">
                                                                                            <select name="tamanio" onChange={this.onChangePrecio1} defaultValue={this.state.clickedProducto.titulo_precio1}>
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
                                                                                                <option value="Caña">Caña</option>
                                                                                                <option value="Tubo">Tubo</option>
                                                                                                <option value="Maceta">Maceta</option>
                                                                                                <option value="Copa">Copa</option>
                                                                                                <option value="Medio">Medio</option>
                                                                                                <option value="Botellin">Botellin</option>
                                                                                                <option value="Botella">Botella</option>
                                                                                                <option value="Tercio 1/3">Tercio 1/3</option>
                                                                                                <option value="Quinto 1/5">Quinto 1/5</option>
                                                                                                <option value="Medio Litro 1/2">Medio Litro 1/2</option>
                                                                                                <option value="Litro 1L">Litro 1L</option>
                                                                                                <option value="Jarra">Jarra</option>
                                                                                                <option value="Pinta">Pinta</option>
                                                                                                <option value="20cl">20cl</option>
                                                                                                <option value="25cl">25cl</option>
                                                                                                <option value="33cl">33cl</option>
                                                                                                <option value="33cl">Chupito</option>
                                                                                                <option value="33cl">Cocktel</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="field" style={{ marginTop: '10px' }}>
                                                                                    <label className="label">Precio 1</label>
                                                                                    <div className="control">
                                                                                        <input className="input" name="precio1" type="text" placeholder="0.0" onChange={this.onChange} defaultValue={this.state.clickedProducto.precio1} required />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="column">
                                                                                <div style={{ marginTop: '20px' }}>
                                                                                    <label className="label">Tamaño Precio 2</label>
                                                                                    <div className="control">
                                                                                        <div className="select">
                                                                                            <select name="tamanio2" onChange={this.onChangePrecio2} defaultValue={this.state.clickedProducto.titulo_precio2}>
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
                                                                                                <option value="Caña">Caña</option>
                                                                                                <option value="Tubo">Tubo</option>
                                                                                                <option value="Maceta">Maceta</option>
                                                                                                <option value="Copa">Copa</option>
                                                                                                <option value="Medio">Medio</option>
                                                                                                <option value="Botellin">Botellin</option>
                                                                                                <option value="Botella">Botella</option>
                                                                                                <option value="Tercio 1/3">Tercio 1/3</option>
                                                                                                <option value="Quinto 1/5">Quinto 1/5</option>
                                                                                                <option value="Medio Litro 1/2">Medio Litro 1/2</option>
                                                                                                <option value="Litro 1L">Litro 1L</option>
                                                                                                <option value="Jarra">Jarra</option>
                                                                                                <option value="Pinta">Pinta</option>
                                                                                                <option value="20cl">20cl</option>
                                                                                                <option value="25cl">25cl</option>
                                                                                                <option value="33cl">33cl</option>
                                                                                                <option value="33cl">Chupito</option>
                                                                                                <option value="33cl">Cocktel</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="field" style={{ marginTop: '10px' }}>
                                                                                    <label className="label">Precio 2</label>
                                                                                    <div className="control">
                                                                                        <input className="input " name="precio2" type="text" placeholder="0.0" onChange={this.onChange} defaultValue={this.state.clickedProducto.precio2} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="column">
                                                                                <div style={{ marginTop: '20px' }}>
                                                                                    <label className="label">Tamaño Precio 3</label>
                                                                                    <div className="control">
                                                                                        <div className="select">
                                                                                            <select name="tamanio3" onChange={this.onChangePrecio3} defaultValue={this.state.clickedProducto.titulo_precio3}>
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
                                                                                                <option value="Caña">Caña</option>
                                                                                                <option value="Tubo">Tubo</option>
                                                                                                <option value="Maceta">Maceta</option>
                                                                                                <option value="Copa">Copa</option>
                                                                                                <option value="Medio">Medio</option>
                                                                                                <option value="Botellin">Botellin</option>
                                                                                                <option value="Botella">Botella</option>
                                                                                                <option value="Tercio 1/3">Tercio 1/3</option>
                                                                                                <option value="Quinto 1/5">Quinto 1/5</option>
                                                                                                <option value="Medio Litro 1/2">Medio Litro 1/2</option>
                                                                                                <option value="Litro 1L">Litro 1L</option>
                                                                                                <option value="Jarra">Jarra</option>
                                                                                                <option value="Pinta">Pinta</option>
                                                                                                <option value="20cl">20cl</option>
                                                                                                <option value="25cl">25cl</option>
                                                                                                <option value="33cl">33cl</option>
                                                                                                <option value="33cl">Chupito</option>
                                                                                                <option value="33cl">Cocktel</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="field" style={{ marginTop: '10px' }}>
                                                                                    <label className="label">Precio 3</label>
                                                                                    <div className="control">
                                                                                        <input className="input" name="precio3" type="text" placeholder="0.0" onChange={this.onChange} defaultValue={this.state.clickedProducto.precio3} />
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
                                                                                                <input id="checkbox" name="is_apio" className="styled" type="checkbox" onChange={this.handleApioChange} defaultChecked={this.state.clickedProducto.is_apio ? true : false} />
                                                                                                <label >  Apio</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_altramuces" className="styled" type="checkbox" onChange={this.handleAltramucesChange} defaultChecked={this.state.clickedProducto.is_altramuces ? true : false} />
                                                                                                <label>  Altramuces</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_cacahuete" className="styled" type="checkbox" onChange={this.handleCacahueteChange} defaultChecked={this.state.clickedProducto.is_cacahuete ? true : false} />
                                                                                                <label >  Cacahuete</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_crustaceo" className="styled" type="checkbox" onChange={this.handleCrustaceoChange} defaultChecked={this.state.clickedProducto.is_crustaceo ? true : false} />
                                                                                                <label>  Crustaceo</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="column">
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_frutas_con_cascara" className="styled" type="checkbox" onChange={this.handleCascaraChange} defaultChecked={this.state.clickedProducto.is_frutos_con_cascara ? true : false} />
                                                                                                <label >  Cascara Frutal</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_gluten" className="styled" type="checkbox" onChange={this.handleGlutenChange} defaultChecked={this.state.clickedProducto.is_gluten ? true : false} />
                                                                                                <label >  Gluten</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_huevo" className="styled" type="checkbox" onChange={this.handleHuevoChange} defaultChecked={this.state.clickedProducto.is_huevo ? true : false} />
                                                                                                <label >  Huevo</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_lacteo" className="styled" type="checkbox" onChange={this.handleLacteoChange} defaultChecked={this.state.clickedProducto.is_lacteo ? true : false} />
                                                                                                <label >  Lacteo</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="column">
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_molusco" className="styled" type="checkbox" onChange={this.handleMoluscoChange} defaultChecked={this.state.clickedProducto.is_molusco ? true : false} />
                                                                                                <label >  Molusco</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_mostaza" className="styled" type="checkbox" onChange={this.handleMostazaChange} defaultChecked={this.state.clickedProducto.is_mostaza ? true : false} />
                                                                                                <label >  Mostaza</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_pescado" className="styled" type="checkbox" onChange={this.handlePescadoChange} defaultChecked={this.state.clickedProducto.is_pescado ? true : false} />
                                                                                                <label >  Pescado</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_sesamo" className="styled" type="checkbox" onChange={this.handleSesamoChange} defaultChecked={this.state.clickedProducto.is_sesamo ? true : false} />
                                                                                                <label >  Sesamo</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="column">
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_soja" className="styled" type="checkbox" onChange={this.handleSojaChange} defaultChecked={this.state.clickedProducto.is_soja ? true : false} />
                                                                                                <label >  Soja</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="field">
                                                                                        <div className="control">
                                                                                            <div className="b-checkbox">
                                                                                                <input id="checkbox" name="is_sulfito" className="styled" type="checkbox" onChange={this.handleSulfitoChange} defaultChecked={this.state.clickedProducto.is_sulfito ? true : false} />
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
                                                                        <textarea name="descripcion" className="textarea" placeholder="Descripción del producto." size="99" onChange={this.onChange} defaultValue={this.state.clickedProducto.descripcion}></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="container">
                                                                    <div className="field" >
                                                                        <div>
                                                                            <label className="label">Categoria</label>
                                                                            <div className="control">
                                                                                <div className="select">
                                                                                    <select id="categoriaParaProducto" onChange={this.onChangeCategoria} defaultValue={this.state.clickedProducto.categoria}>
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
                                                                <button className="button is-success" style={{ backgroundColor: '#bca466', color: 'white' }} onClick={this.onSubmitEditarProducto}>Guardar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                : ""}

                                            <div className="container">
                                                <div>
                                                    <div className="container">
                                                        <div>
                                                            <div className="debug">
                                                                {this.props.categorias.map(categoria => (
                                                                    <div>
                                                                        <div className={this.state.borrarCategoria ? "modal is-active" : "modal"}>
                                                                            <div className="modal-background"></div>
                                                                            <div className="modal-content">
                                                                                <div className="container box" >
                                                                                    <div className="has-text-right">

                                                                                        <button className="button" style={{ backgroundColor: '#171c8f' }} onClick={this.borrarCategoria}>
                                                                                            <span className="icon is-small">
                                                                                                <i className="fas fa-times " style={{ color: 'white' }}></i>
                                                                                            </span>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className="has-text-centered">


                                                                                        <span className="icon" >
                                                                                            <i className="fas fa-trash" style={{ fontSize: '100px', color: "#bca466" }}></i>
                                                                                        </span>
                                                                                        <h1 className="title" style={{ marginTop: '10px' }}> BORRAR CATEGORIA </h1>
                                                                                    </div>
                                                                                    <hr style={{ marginTop: '30px', backgroundColor: '#bca466', color: '#bca466' }} />
                                                                                    <form>
                                                                                        <label className="label has-text-centered" style={{ marginTop: '10px' }}>Estas intentando borrar una categoria! Debes saber que si la eliminas se borrarán todos los productos que contenga. ¿Estas seguro?</label>

                                                                                        <div className="columns">
                                                                                            <div className="column"></div>
                                                                                            <div className="column">
                                                                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={e => this.onSubmitDeleteCategoria(e, categoria.id, categoria.carta)}>Si</button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="column">
                                                                                                <div className="control buttons is-centered" style={{ marginTop: '20px' }}>
                                                                                                    <button className="button is-success" style={{ color: 'white', backgroundColor: '#bca466' }} onClick={this.borrarCategoria}>No</button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="column"></div>

                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <Animated animationIn="bounceInLeft" >
                                                                            <div style={{ marginTop: '60px' }} key={categoria.id}>
                                                                                <div className='card equal-height' style={{ backgroundColor: '#d5c69f' }}>
                                                                                    <div className="columns">
                                                                                        <div className="column is-two-thirds">
                                                                                            <h1 className="title has-text-centered">{categoria.name}</h1>
                                                                                        </div>

                                                                                        <div className="column is-full-mobile" >
                                                                                            <div className="columns has-text-centered">
                                                                                                <div className="column if-full-mobile">
                                                                                                    <div className="container" >
                                                                                                        <div className="select">

                                                                                                            <Tooltip title="Modificar posicion de la categoria en la carta">

                                                                                                                <select onChange={e => this.onSubmitCambiarPosiciones(e, categoria)}>
                                                                                                                    <option>Posicion actual: {categoria.posicion}</option>
                                                                                                                    {this.props.categorias.map((categoria, index) => (
                                                                                                                        <option value={index + 1}>Posicion {index + 1}</option>
                                                                                                                    ))}

                                                                                                                </select>
                                                                                                            </Tooltip>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="column">
                                                                                                    <Tooltip title="Borrar categoria">

                                                                                                        <div >

                                                                                                            <button class="button is-danger" style={{ backgroundColor: 'white' }} onClick={this.borrarCategoria}>
                                                                                                                <span class="icon is-small">
                                                                                                                    <i class="fas fa-trash" style={{ color: '#bca466' }}></i>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </Tooltip>

                                                                                                </div>


                                                                                            </div>
                                                                                        </div>


                                                                                    </div>
                                                                                    <div>
                                                                                    </div>
                                                                                </div>
                                                                                {categoria.info_extra != "-" ?
                                                                                    <div className="card has-text-centered" style={{ marginTop: '-10px' }}>
                                                                                        <div style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                                                                                            <p className="subtitle"><b>Información: {categoria.info_extra}</b></p>
                                                                                        </div>
                                                                                    </div>
                                                                                    : ""}
                                                                                {/* MODAL DEL LOGO DEL PRODUCTO */}
                                                                                {this.props.cartas.map((producto, index) => (


                                                                                    <div style={{ marginTop: '20px' }} key={producto.id}>

                                                                                        {/* BUSCATE EL PRODUCTO */}
                                                                                        {categoria.id == producto.categoria ?

                                                                                            <Animated animationIn="bounceInLeft" animationOut="bounceOutDown" >
                                                                                                <div className='card' style={producto.is_activo ? { opacity: '1' } : { opacity: '0.5' }}>
                                                                                                    <div>


                                                                                                        {/* FALSEAR */}
                                                                                                        <div class="card-image has-text-centered" style={{ maxWidth: '480px' }}>
                                                                                                            <figure class="image is-128x128">
                                                                                                                <img src={this.state.addingPhotoArray[index] || this.state.fileArray[index] != null ? this.state.fileArray[index] : producto.photo} ></img>
                                                                                                            </figure>
                                                                                                        </div>

                                                                                                        <button className="button" style={{ backgroundColor: '#bca466', color: 'white' }} onClick={e => this.addPhoto(e, producto, index)}>
                                                                                                            <span class="file-icon">
                                                                                                                <i class="fas fa-camera"></i>
                                                                                                            </span>
                                                                                                            <p>FOTO PRODUCTO</p>
                                                                                                        </button>

                                                                                                    </div>
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
                                                                                                                                                <i className="fas fa-cart-arrow-down" aria-hidden="true" style={{ fontSize: '30px', color: "#bca466" }}></i>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <span>
                                                                                                                                            <b> {producto.titulo_precio1} </b>
                                                                                                                                        </span>
                                                                                                                                        <div style={{ width: '100%' }}>
                                                                                                                                            <span>
                                                                                                                                                <b style={{ color: '#bca466' }}>  {!producto.precio1 == "" ? producto.precio1 : ""}€</b>
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
                                                                                                                                                <i className="fas fa-cart-arrow-down" aria-hidden="true" style={{ fontSize: '40px', color: "#bca466" }}></i>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <span>
                                                                                                                                            <b> {producto.titulo_precio2} </b>
                                                                                                                                        </span>
                                                                                                                                        <div style={{ width: '100%' }}>
                                                                                                                                            <span>
                                                                                                                                                <b style={{ color: '#bca466' }}>  {!producto.precio2 == "" ? producto.precio2 : ""}€</b>
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
                                                                                                                                                <i className="fas fa-cart-arrow-down" aria-hidden="true" style={{ fontSize: '50px', color: "#bca466" }}></i>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <span>
                                                                                                                                            <b> {producto.titulo_precio3} </b>
                                                                                                                                        </span>
                                                                                                                                        <div style={{ width: '100%' }}>
                                                                                                                                            <span>
                                                                                                                                                <b style={{ color: '#bca466' }}>  {!producto.precio3 == "" ? producto.precio3 : ""}€</b>
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
                                                                                                                                    src="https://www.andaluciarestaura.com/static/frontend/Allergens/alergeno_sulfito.svg"
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
                                                                                                                                <Tooltip title="Activar o desactivar producto">
                                                                                                                                    <button
                                                                                                                                        className="button is-warning is-rounded" style={{ backgroundColor: 'white' }} onClick={(e) => this.onSubmitDesactivateProduct(e, producto)}>

                                                                                                                                        <span
                                                                                                                                            className="icon is-small" >
                                                                                                                                            <i className="fas fa-power-off" style={{ color: '#bca466' }}></i>
                                                                                                                                        </span>
                                                                                                                                    </button>
                                                                                                                                </Tooltip>
                                                                                                                            </div>

                                                                                                                        </div>
                                                                                                                        <div className="column" >
                                                                                                                            <Tooltip title="Editar producto">

                                                                                                                                <div className="is-rounded" style={{ backgroundColor: '#d5c69f', padding: '5px' }}>
                                                                                                                                    <button class="button is-warning" style={{ backgroundColor: 'white' }} onClick={e => this.editProduct(e, producto)}>
                                                                                                                                        <span class="icon is-small">
                                                                                                                                            <i class="fas fa-pen" style={{ color: '#bca466' }}></i>
                                                                                                                                        </span>
                                                                                                                                    </button>
                                                                                                                                </div>
                                                                                                                            </Tooltip>
                                                                                                                        </div>
                                                                                                                        <div className="column" >
                                                                                                                            <Tooltip title="Borrar producto">

                                                                                                                                <section className="is-rounded" style={{ backgroundColor: '#d5c69f', padding: '5px' }}>
                                                                                                                                    <button class="button is-danger" style={{ backgroundColor: 'white' }} onClick={e => this.borrarProducto(e, producto)}>
                                                                                                                                        <span class="icon is-small">
                                                                                                                                            <i class="fas fa-trash" style={{ color: '#bca466' }}></i>
                                                                                                                                        </span>
                                                                                                                                    </button>
                                                                                                                                </section>
                                                                                                                            </Tooltip>

                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>


                                                                                                </div>
                                                                                            </Animated>
                                                                                            :
                                                                                            <div>
                                                                                                {this.state.vacio = false}
                                                                                            </div>
                                                                                        }
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </Animated>
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
    totalcartas: state.reducerCartas.cartas,
    cartas: state.cartas.cartas,
    categorias: state.cartas.categorias,
    canGetProducts: state.cartas.canGetProducts,
    is_active: state.cartas.is_active,
    auth: state.auth,
    cartaReal: state.reducerCartas.expecificCarta,
    isUpdatingPhoto: state.cartas.isUpdatingPhoto
});

export default connect(mapStateToProps, { updateIntroduccion, subirCartaLogo, uploadProductParams, updateLogoRounded, uploadProducto, updateCategoria, updateEstablecimiento, updateNombreCarta, updateURL, updateEslogan, getCartaExpecifica, subirproducto, addCategoria, getCategorias, deleteproducto, deleteCategoria, subirPhoto })(CartaPage);

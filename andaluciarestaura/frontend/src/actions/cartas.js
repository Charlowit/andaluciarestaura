import axios from 'axios';
import { GET_ALL_CARTAS, ADD_CARTA, DELETE_CARTA, GET_EXPECIFIC_CARTA, GET_CARTA, GET_CATEGORIAS, UPDATE_CARTA, GET_ERRORS } from './types';
import { tokenConfig } from './auth'
import { createMessages } from './messages'
import { createTransform } from 'redux-persist';

export const getCartas = (cif) => (dispatch, getState) => {

    //axios.get(`/api/cartaadmin/?cif=${cif}`)
    axios.get(`/api/getcartas/?cif=${cif}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_ALL_CARTAS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const getCartaExpecifica = (id) => (dispatch, getState) => {

    //axios.get(`/api/cartaadmin/?cif=${cif}`)

    axios.get(`/api/getcartas/?carta=${id}`, tokenConfig(getState))
        .then(res => {
            console.log("Me traigo la carta o que" + res.data[0].id)
            dispatch({
                type: GET_EXPECIFIC_CARTA,
                payload: res.data
            });

            axios.get(`/api/damelascategorias/?carta=${id}`, tokenConfig(getState))
                .then(res => {
                    dispatch({
                        type: GET_CATEGORIAS,
                        payload: res.data
                    });

                    res.data.map(categoria => (
                        axios.get(`/api/productact/?categoria=${categoria.id}`, tokenConfig(getState))
                            .then(res => {
                                dispatch({
                                    type: GET_CARTA,
                                    payload: res.data
                                });
                            })
                            .catch(err => console.log(err))
                    ));
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};


export const nuevaCarta = (carta) => (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name: carta.nombreNuevaCarta, propietario: carta.propietario, url_facebook: carta.url_facebook, url_instagram: carta.url_instagram, url_tripadvisor: carta.url_tripadvisor, eslogan: carta.eslogan, plantilla: carta.plantilla, establecimiento: carta.establecimiento });
    console.log("Body de la nueva carta ->", body)
    //axios.get(`/api/cartaadmin/?cif=${cif}`)
    axios.post(`/api/getcartas/?cif=${carta.propietario}`, body, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({ nuevaCarta: "Carta creada correctamente." }));
            dispatch({
                type: ADD_CARTA,
                payload: res.data
            });

        })
        .catch(err => {
            console.log("Ha dado error loco")
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};


export const deleteCarta = (carta) => (dispatch, getState) => {

    //ESTE ES EL BORRAR DE VERDAD
    /*axios.delete(`/api/getcartas/${id}/?cif=${cif}&carta=${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_CARTA,
                payload: id
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));*/

    const body = JSON.stringify({ id: carta.id, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, is_activa: carta.is_activa, directorio: carta.directorio });

    axios.put(`/api/getcartas/${carta.id}/?cif=${carta.propietario}`, body, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: UPDATE_CARTA,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("Ha dado error loco")
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
}


export const updateEslogan = (carta) => (dispatch, getState) => {


    const body = JSON.stringify({ id: carta.idCarta, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, eslogan: carta.eslogan, directorio: carta.directorio });

    axios.put(`/api/getcartas/${carta.idCarta}/`, body, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({ newEslogan: "Eslogan actualizado correctamente." }));

            dispatch({
                type: UPDATE_CARTA,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });

}

export const updateNombreCarta = (carta) => (dispatch, getState) => {


    const body = JSON.stringify({ id: carta.idCarta, establecimiento: carta.establecimiento, propietario: carta.propietario, name: carta.cartaName, directorio: carta.directorio });

    axios.put(`/api/getcartas/${carta.idCarta}/`, body, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({ newNombreCarta: "Nombre de la carta actualizado correctamente." }));
            dispatch({
                type: UPDATE_CARTA,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });

}

export const updateEstablecimiento = (carta) => (dispatch, getState) => {


    const body = JSON.stringify({ id: carta.idCarta, name: carta.name, propietario: carta.propietario, establecimiento: carta.establecimiento, directorio: carta.directorio });

    axios.put(`/api/getcartas/${carta.idCarta}/`, body, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({ newEstablecimiento: "Establecimiento actualizado correctamente." }));
            dispatch({
                type: UPDATE_CARTA,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });

}

export const updateURL = (carta, urltype) => (dispatch, getState) => {

    var body = null;

    if (urltype == "F") {
        body = JSON.stringify({ id: carta.idCarta, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, url_facebook: carta.url, directorio: carta.directorio });
    } else if (urltype == "I") {
        body = JSON.stringify({ id: carta.idCarta, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, url_instagram: carta.url, directorio: carta.directorio });
    } else if (urltype == "T") {
        body = JSON.stringify({ id: carta.idCarta, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, url_tripadvisor: carta.url, directorio: carta.directorio });
    }

    axios.put(`/api/getcartas/${carta.idCarta}/`, body, tokenConfig(getState))
        .then(res => {
            console.log("Its working?")
            dispatch(createMessages({ newUrl: "Url actualizado correctamente." }));

            dispatch({
                type: UPDATE_CARTA,
                payload: res.data
            });
        })
        .catch(err => {

            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });

}


export const updateShow = (carta) => (dispatch, getState) => {

    const body = JSON.stringify({ id: carta.id, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, show_as_pdf: carta.show_as_pdf, directorio: carta.directorio, plantilla: carta.plantilla });

    axios.put(`/api/getcartas/${carta.id}/`, body, tokenConfig(getState))
        .then(res => {
            console.log("Its working?")
            dispatch(createMessages({ nuevaVisualizacion: "Su visualizacion se ha actualizado correctamente." }));

            dispatch({
                type: UPDATE_CARTA,
                payload: res.data
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));

}


export const updateLogoRounded = (carta) => (dispatch, getState) => {

    const body = JSON.stringify({ id: carta.id, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, show_as_pdf: carta.show_as_pdf, directorio: carta.directorio, logo_rounded: carta.logo_rounded });

    axios.put(`/api/getcartas/${carta.id}/`, body, tokenConfig(getState))
        .then(res => {
            console.log("Its working?")
            dispatch({
                type: UPDATE_CARTA,
                payload: res.data
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));

}

export const updateIntroduccion = (carta) => (dispatch, getState) => {

    const body = JSON.stringify({ id: carta.id, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, directorio: carta.directorio, introduccion: carta.introduccion, visualizar_introduccion: carta.visualizar_introduccion});

    axios.put(`/api/getcartas/${carta.id}/`, body, tokenConfig(getState))
        .then(res => {
            console.log("Its working?")
            dispatch({
                type: UPDATE_CARTA,
                payload: res.data
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));

}

export const subirCartaLogo = (formdata, carta) => (dispatch, getState) => {


    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }


    axios.put(`api/subirlogocarta/?id=${carta.id}`, formdata, config)
        .then(res => {
            console.log("La foto de la carta se ha subido correctamente")

            const body = JSON.stringify({ id: carta.id, establecimiento: carta.establecimiento, name: carta.name, propietario: carta.propietario, directorio: carta.directorio,  logo_propio: true});

            axios.put(`/api/getcartas/${carta.id}/`, body, tokenConfig(getState))
                .then(res => {
                    console.log("Cambiado a logo propio")
                    dispatch({
                        type: UPDATE_CARTA,
                        payload: res.data
                    });
                })
                .catch(err => console.log("Esto ta mal? " + err));



        }).then(res => {

        }).catch(err => console.log(err));

}



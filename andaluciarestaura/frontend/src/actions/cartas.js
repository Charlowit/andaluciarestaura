import axios from 'axios';
import { GET_ALL_CARTAS, ADD_CARTA, DELETE_CARTA, GET_EXPECIFIC_CARTA, GET_CARTA, GET_CATEGORIAS} from './types';
import { tokenConfig } from './auth'

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

    const body = JSON.stringify({ name: carta.nombreNuevaCarta, propietario: carta.propietario, url_facebook: carta.url_facebook, url_instagram: carta.url_instagram, url_tripadvisor: carta.url_tripadvisor, eslogan: carta.eslogan, plantilla: carta.plantilla });
    console.log("Body de la nueva carta ->", body)
    //axios.get(`/api/cartaadmin/?cif=${cif}`)
    axios.post(`/api/getcartas/?cif=${carta.propietario}`, body, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_CARTA,
                payload: res.data
            });

        })
        .catch(err => console.log(err));
};


export const deleteCarta = (id, cif) => (dispatch, getState) => {

    axios.delete(`/api/getcartas/${id}/?cif=${cif}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_CARTA,
                payload: id
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));

}
import axios from 'axios';
import { GET_ALL_CARTAS, ADD_CARTA, DELETE_CARTA } from './types';
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


export const nuevaCarta = (carta) => (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name: carta.nombreNuevaCarta, propietario: carta.propietario });

    //axios.get(`/api/cartaadmin/?cif=${cif}`)
    axios.post(`/api/getcartas/?cif=${carta.propietario}`, body, config)
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
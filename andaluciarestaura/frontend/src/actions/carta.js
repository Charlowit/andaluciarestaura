import axios from 'axios';
import { GET_CARTA, DELETE_PRODUCTO } from './types';
import { tokenConfig } from './auth'

export const getCarta = (cif) => (dispatch, getState) => {

    //axios.get(`/api/cartaadmin/?cif=${cif}`)
    axios.get(`/api/cartaadmin/?cif=${cif}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CARTA,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const deleteproducto = (idCarta, idProducto) => (dispatch, getState) => {
    
    axios.delete(`/api/cartaadmin/?idcarta=${idCarta}/${idProducto}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTO,
                payload: res.data
            });
        })
        .catch(err => console.log("Esto ta mal? "  + err));
}


//FUNCIONA EL DELETE
/*
export const deleteproducto = id => (dispatch, getState) => {
    
    axios.get(`/api/productact/?id=${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTO,
                payload: res.data
            });
        })
        .catch(err => console.log("Esto ta mal? "  + err));
}
*/
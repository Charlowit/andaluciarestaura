import axios from 'axios';
import { GET_CARTA } from './types';
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

export const deleteproducto = id => (dispatch, getState) => {
    
    axios.delete(`/api/productact/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTO,
                payload: id
            });
        })
        .catch(err => console.log(err));
}



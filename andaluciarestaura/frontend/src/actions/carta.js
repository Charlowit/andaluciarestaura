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



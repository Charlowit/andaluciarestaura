import axios from 'axios';
import { GET_CARTA } from './types';

export const getCarta = () => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.get('/api/carta/?cif=15516510C')
        .then(res => {
            dispatch({
                type: GET_CARTA,
                payload: res.data
            });
        }).catch(err => console.log(err));
}



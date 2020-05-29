import { GET_DATOS_USUARIO } from '../actions/types';

const initialState = {
    datosuser: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATOS_USUARIO:
            return {
                ...state,
                datosuser: action.payload
            }
        default:
            return state;
    }

}

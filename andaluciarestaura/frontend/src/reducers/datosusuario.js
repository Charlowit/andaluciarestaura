import { GET_DATOS_USUARIO } from '../actions/types';

const initialState = {
    datosusuario: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATOS_USUARIO:
            return {
                ...state,
                datosusuario: action.payload
            }
        default:
            return state;
    }

}

import { GET_CARTA, DELETE_PRODUCTO, ADD_PRODUCTO } from '../actions/types.js';

const initialState = {
    cartas: [],
    needReload: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARTA:
            return {
                ...state,
                cartas: action.payload,
                needReload: false
            };
        case DELETE_PRODUCTO:
            return {
                ...state,
            };
        case ADD_PRODUCTO:
            return {
                ...state,
                needReload: true
            };
        default:
            return state;
    }
    
}

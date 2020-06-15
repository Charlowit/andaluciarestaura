import { GET_ALL_CARTAS, ADD_CARTA, DELETE_CARTA } from '../actions/types.js';

const initialState = {
    cartas: [],
};


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_CARTAS:
            return {
                ...state,
                cartas: action.payload,
            };
        case ADD_CARTA:
            return {
                ...state,
                cartas: [...state.cartas, action.payload]
            };
        case DELETE_CARTA:
            return {
                ...state,
                cartas: state.cartas.filter(carta => carta.id !== action.payload)
            };
        default:
            return state;
    }

}
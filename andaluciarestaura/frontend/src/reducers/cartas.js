import { GET_ALL_CARTAS, ADD_CARTA, DELETE_CARTA, GET_EXPECIFIC_CARTA } from '../actions/types.js';

const initialState = {
    cartas: [],
    expecificCarta: []
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
        case GET_EXPECIFIC_CARTA:
            console.log("Entrao en el reduces");
            return {
                ...state,
                expecificCarta: action.payload,
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
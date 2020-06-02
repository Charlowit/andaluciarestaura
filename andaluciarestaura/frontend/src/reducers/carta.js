import { GET_CARTA } from '../actions/types.js';

const initialState = {
    cartas: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARTA:
            return {
                ...state,
                cartas: action.payload
            };
        default:
            return state;
    }
}

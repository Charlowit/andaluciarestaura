import { GET_CARTA } from '../actions/types.js';

const initialState = {
    carta: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARTA:
            return {
                ...state,
                carta: action.payload
            };
        default:
            return state;
    }
}

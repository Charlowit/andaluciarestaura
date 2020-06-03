import { DELETE_PRODUCTO } from '../actions/types.js';

const initialState = {
    productos: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case DELETE_PRODUCTO:
            return {
                ...state,
                productos: "productos"
            }
        default:
            return state;
    }
}
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    UPDATE_LOADING,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    isUpdating: false
}

export default function(state = initialState, action){

    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
                isUpdating: false
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isUpdating: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isUpdating: false,
                isLoading: false
            }
        case UPDATE_LOADING:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isUpdating: true,
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                isUpdating: false,
            }
        case UPDATE_ERROR:
            return{
                ...state,
                isUpdating: false
            }

        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                isUpdating: false,
            }
        default:
            return state;
    }
}

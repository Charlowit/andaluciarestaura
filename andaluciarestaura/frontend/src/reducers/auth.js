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
    REGISTER_LOADING,
    REGISTER_FAILED,
    REGISTER_SUCCESS,  
    USER_LOADED_ADMIN_PAGE  
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    userAdminPage: [],
    isUpdating: false,
    isRegistering: false,
    needReload: false,
    is_active: "NONE"
}

export default function(state = initialState, action){

    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
                isUpdating: false,
                isRegistering: false,
                registerFailed: false,
                needReload: false
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isUpdating: false,
                isRegistering: false,
                registerFailed: false,
                needReload: false,
                user: action.payload,

            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isUpdating: false,
                isLoading: false,
                isRegistering: false,
                registerFailed: false,
                needReload: false

            }
        case UPDATE_LOADING:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isUpdating: true,
                isRegistering: false,
                registerFailed: false,
                updateFailed: false,
                needReload: false

            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                
                isAuthenticated: true,
                isLoading: false,
                isUpdating: false,
                isRegistering: false,
                registerFailed: false,
                updateFailed: false,
                needReload: false,
                userAdminPage: action.payload
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: false,
                isLoading: false,
                isUpdating: false,
                isRegistering: false,
                registerFailed: false,
                needReload: false

            }
        case REGISTER_LOADING:
            return{
                ...state,
                isAuthenticated: false,
                isLoading: false,
                isUpdating: false,
                isRegistering: true,
                registerFailed: false,
                needReload: false
            }
        case UPDATE_ERROR:
            return{
                ...state,
                isUpdating: false,
                isRegistering: false,
                registerFailed: false,
                updateFailed: true,
                needReload: false
            }
        case USER_LOADED_ADMIN_PAGE:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isUpdating: false,
                isRegistering: false,
                registerFailed: false,
                needReload: false,
                userAdminPage: action.payload
            }
        case REGISTER_FAILED:
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
                isRegistering: false,
                registerFailed: true,
                updateFailed: true,
                needReload: false,
            }
        default:
            return state;
    }
}

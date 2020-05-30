import { combineReducers } from 'redux';
import auth from './auth';
import datosusuario from "./datosusuario";
import carta from './carta';
import errors from './errors'
import messages from './messages'


export default combineReducers({
    auth,
    datosusuario,
    carta,
    errors,
    messages,
});

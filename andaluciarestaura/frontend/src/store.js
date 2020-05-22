//applyMiddleware es una parte intermedia para conectar
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    //Esto va a llamar al index.js dentro de la ruta ./reducers y es un punto intermedio entre otros reducers
    rootReducer,
    initialState,
    //Esto es algo para ayudar en el desarrollo
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

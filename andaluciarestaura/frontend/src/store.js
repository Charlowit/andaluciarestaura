//applyMiddleware es una parte intermedia para conectar
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
    //Esto va a llamar al index.js dentro de la ruta ./reducers y es un punto intermedio entre otros reducers
    rootReducer,
    initialState,
    //Esto es algo para ayudar en el desarrollo
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default {store, persistor};

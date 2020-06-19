import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { HashRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Login from "./accounts/Login";
import AdminPage from "./admin/AdminPage";
import ServiciosPage from "./servicios/ServiciosPage";
import ReservasPage from "./reservas/ReservasPage";
import DeliveryPage from "./delivery/DeliveryPage";
import CartaPage from "./carta/CartaPage";
import Registro from "./accounts/Registro";
import PrivateRoute from "./privateroute/PrivateRoute";
import PrivateRouteLogin from "./privateroute/PrivateRouteLogin";
import FileUpload from "./accounts/FileUpload";
import ViewPdf from "./accounts/ViewPdf";
import { Provider } from 'react-redux';
import {store, persistor} from '../store';
import { loadUser, login } from '../actions/auth';
import CreditCard from './creditcard/CreditCard';
import Logo from './avatar/Logo'
import { Provider as AlertProvider } from 'react-alert';
//import AlertTemplate from 'react-alert-template-basic';
import VisualizarCartas from './cartas/VisualizarCartas'
import { PersistGate } from 'redux-persist/integration/react'

import Alerts from './alerta/Alerts';
import PrivateRouteCartaPage from './privateroute/PrivateRouteCartaPage';
import PrivateRouteVisualizar from './privateroute/PrivateRouteVisualizar';
import { Animated } from "react-animated-css";
import BarraInformacion from './barrainformacion/BarraInformacion';
import ResetPassword from "./accounts/ResetPassword";
import PrivateRoutePass from "./privateroute/PrivateRoutePass";


//Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
}

const AlertTemplate = ({ style, options, message, close }) => (
    <div>
        {options.type === 'info' &&
            <div class="notification is-info" style={{ marginBottom: '10px', marginTop: '10px' }}>
                <button class="delete" onClick={close}></button>
                <div style={{ display: 'inline', color: 'white' }}>
                    {message}
                </div>
            </div>
        }
        {options.type === 'success' &&
            <div class="notification is-success" style={{ marginBottom: '10px', marginTop: '10px' }}>
                <button class="delete" onClick={close}></button>
                <div style={{ display: 'inline', color: 'white' }}>
                    {message}
                </div>
            </div>

        }

        {options.type === 'error' &&
            <div class="notification is-danger" style={{ marginBottom: '10px', marginTop: '10px' }}>
                <button class="delete" onClick={close}></button>
                <div style={{ display: 'inline', color: 'white' }}>
                    {message}
                </div>
            </div>

        }
    </div>

  )

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (

            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <PersistGate persistor={persistor}>
                        <Fragment>
                            <Navbar />
                            <Alerts />
                            <Switch>
                                <PrivateRouteLogin exact path="/" component={Login} />
                                <PrivateRoute exact path="/admin-page" component={AdminPage} />
                                <Route exact path="/register-page" component={Registro} />
                                <PrivateRoute exact path="/servicios-page" component={ServiciosPage} />
                                <PrivateRoute exact path="/carta-page/:id" component={CartaPage} />
                                <PrivateRoute exact path="/reservas-page" component={ReservasPage} />
                                <PrivateRoute exact path="/delivery-page" component={DeliveryPage} />
                                {/*<Route exact path="/pdf-upload" component={FileUpload} />*/}
                                {/*<Route exact path="/view-pdf" component={ViewPdf} />*/}

                                {/* PRUEBAS NIETO */}
                                {/*<Route exact path="/maps-page" component={Maps2} />*/}
                                {/*<Route exact path="/autocomplete-page" component={Roads} />*/}
                                <PrivateRoute exact path="/creditcard-page" component={CreditCard} />
                                <PrivateRoute exact path="/avatar-page" component={Logo} />
                                <PrivateRoute exact path="/visualizar" component={VisualizarCartas} />
                                <PrivateRoute exact path="/reset-password" component={ResetPassword} />
                            </Switch>
                            <Footer />
                        </Fragment>
                        </PersistGate>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

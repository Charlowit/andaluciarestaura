import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import {HashRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
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
import store from '../store';
import { loadUser, login } from '../actions/auth';
import CreditCard from './creditcard/CreditCard';
import Logo from './avatar/Logo'
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import VisualizarCartas from './cartas/VisualizarCartas'


import Alerts from './alerta/Alerts';
import PrivateRouteCartaPage from './privateroute/PrivateRouteCartaPage';


//Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {

  componentDidMount() {
      store.dispatch(loadUser());
  }
  render() {
    return (

        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Alerts />
                    <Switch>
                        <PrivateRouteLogin exact path="/" component={Login} />
                        <PrivateRoute exact path="/admin-page" component={AdminPage} />
                        <Route exact path="/register-page" component={Registro} />
                        <PrivateRoute exact path="/servicios-page" component={ServiciosPage} />
                        <PrivateRouteCartaPage exact path="/carta-page" component={CartaPage} />
                        <PrivateRoute exact path="/reservas-page" component={ReservasPage} />
                        <PrivateRoute exact path="/delivery-page" component={DeliveryPage} />
                        <Route exact path="/pdf-upload" component={FileUpload} />
                        <Route exact path="/view-pdf" component={ViewPdf} />

                        {/* PRUEBAS NIETO */}
                        {/*<Route exact path="/maps-page" component={Maps2} />*/}
                        {/*<Route exact path="/autocomplete-page" component={Roads} />*/}
                        <PrivateRoute exact path="/creditcard-page" component={CreditCard} />
                        <PrivateRoute exact path="/avatar-page" component={Logo} />
                        <Route exact path="/visualizar" component={VisualizarCartas} />

                        
                    </Switch>
                    <Footer />
                </Fragment>
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

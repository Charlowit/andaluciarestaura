import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import {HashRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";
import Login from "./accounts/Login";
import AdminPage from "./admin/AdminPage";
import ServiciosPage from "./servicios/ServiciosPage";
import ReservasPage from "./reservas/ReservasPage";
import DeliveryPage from "./delivery/DeliveryPage";
import CartaPage from "./carta/CartaPage";
import Register from "./accounts/Register";
import PrivateRoute from "./privateroute/PrivateRoute";
import PrivateRouteLogin from "./privateroute/PrivateRouteLogin";
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser, login } from '../actions/auth';
class App extends Component {

  componentDidMount() {
      store.dispatch(loadUser());
  }
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <PrivateRouteLogin exact path="/" component={Login} />
                        <PrivateRoute exact path="/admin-page" component={AdminPage} />
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute exact path="/servicios-page" component={ServiciosPage} />
                        <PrivateRoute exact path="/carta-page" component={CartaPage} />
                        <PrivateRoute exact path="/reservas-page" component={ReservasPage} />
                        <PrivateRoute exact path="/delivery-page" component={DeliveryPage} />
                    </Switch>
                    <Footer />
                </Fragment>
            </Router>
        </Provider>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

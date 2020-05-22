import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import AppLogin from './AppLogin';
import AdminPage from './AdminPage';

class Routerback extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/login" component={AppLogin} />
                    <Route path="/admin-page" component={AdminPage} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(
    <Routerback />,
    document.getElementById('app')
  )

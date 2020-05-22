import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import AppLogin from './AppLogin';
import AdminPage from './AdminPage';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/login" component={AppLogin} />
                    <Route path="/admin-page" component={AdminPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Router />,
    document.getElementById('app')
  )
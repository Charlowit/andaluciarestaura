import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRouteLogin = ({ auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>{
            if(!auth.isAuthenticated){
                return <Redirect to="/login-page" />

            } else {
                return <Redirect to="/admin-page" />
            }
        }}
    />
);

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps)(PrivateRouteLogin);

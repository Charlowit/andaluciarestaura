import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRouteRegister = ({ auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>{
            if(!auth.isAuthenticated){
                return <Redirect to="/register-page" />

            } else {
                return <Redirect to="/" />
            }
        }}
    />
);

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps)(PrivateRouteRegister);

import React from 'react';
import './App.scss';
import MainScreen from './screens/MainScreen';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


class CreditCard extends React.Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
    };

    render () {
        const { isAuthenticated } = this.props.auth
        return(
            <React.Fragment>
                {isAuthenticated ?
                <MainScreen />
                :
                    <Redirect to="/" />
                }
            </React.Fragment>
            );
    }
    
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(CreditCard);

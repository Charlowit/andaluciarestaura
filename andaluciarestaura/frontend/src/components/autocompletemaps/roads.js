import PlacesAutocomplete from './streets/street';
import React from 'react';
import { render } from 'node-sass';

export default class Roads extends React.Component {
    render() {
        return(<PlacesAutocomplete />);
    }
}


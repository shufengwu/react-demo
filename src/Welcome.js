import PropTypes from 'prop-types';
import React, { Component } from 'react';
class Welcome extends Component{
    render() {
        return (<h1>Hello, {this.props.name}</h1>);
    }
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
};

export default Welcome;
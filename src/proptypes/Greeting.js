import React from 'react';
//import PropTypes from 'prop-types';
class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

// 为属性指定默认值:
Greeting.defaultProps = {
    name: 'Stranger'
};

export default Greeting;

import React from 'react';
var createReactClass = require('create-react-class');

var SetIntervalMixin = {
    componentWillMount: function () {
        console.log('mixin componentWillMount');
        
        this.intervals = [];
    },
    setInterval: function () {
        console.log('mixin setInterval');
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function () {
        console.log('mixin componentWillUnmount');
        this.intervals.forEach(clearInterval);
    }
};



var TickTock = createReactClass({
    mixins: [SetIntervalMixin], // 使用混入
    getInitialState: function () {
        return { seconds: 0 };
    },
    componentDidMount: function () {
        console.log('real componentDidMount');
        
        this.setInterval(this.tick, 1000); // 调用混入的方法
        console.log('real setInterval');
    },
    tick: function () {
        this.setState({ seconds: this.state.seconds + 1 });
    },
    render: function () {
        return (
            <p>
                React has been running for {this.state.seconds} seconds.
            </p>
        );
    }
});

export default TickTock;
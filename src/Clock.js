import React, { Component } from 'react';
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date1:new Date(),date2:new Date()};
    }

    componentDidMount(){
        this.timer1 = setInterval(
            ()=>this.tick1()
        ,1000);
        this.timer2 = setInterval(
            ()=>this.tick2()
        ,5000);
    }

    componentWillUnmount(){
        clearInterval(this.timer1);
        clearInterval(this.timer2);
    }

    tick1(){
        this.setState({date1:new Date()});
    }

    tick2(){
        this.setState({date2:new Date()});
    }

    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date1.toLocaleTimeString()}.</h2>
                <h3>It is {this.state.date2.toLocaleTimeString()}.</h3>
            </div>
        );
    }
}

export default Clock;
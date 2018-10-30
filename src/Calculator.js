import React from 'react';
import Temperature from './Temperature';
import {tryConvert,toCelsius,toFahrenheit} from './Utils';

class BoilingVerdict extends React.Component {
    render(){
        if (this.props.celsius >= 100) {
            return <p>水会烧开</p>;
        }
        return <p>水不会烧开</p>;
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange_c = this.handleChange_c.bind(this);
        this.handleChange_f = this.handleChange_f.bind(this);
        this.state = { t: '',type:'c' };
    }

    handleChange_c(temp) {
        this.setState({ t: temp,type:'c' });
    }

    handleChange_f(temp) {
        this.setState({ t: temp,type:'f' });
    }

    render() {
        const type= this.state.type;
        const temp = this.state.t;
        const c_temperature = type==='c'?temp:tryConvert(temp,toCelsius);
        const f_temperature = type==='c'?tryConvert(temp,toFahrenheit):temp;
        return (
            <fieldset>
                <legend>输入一个温度</legend>
                <Temperature type="c" temperature={c_temperature} onTemperatureChange={this.handleChange_c}/>
                <Temperature type="f" temperature={f_temperature} onTemperatureChange={this.handleChange_f}/>

                <BoilingVerdict
                    celsius={parseFloat(c_temperature)} />

            </fieldset>
        );
    }
}
export default Calculator;

import React from 'react';
import {scaleNames} from './Utils';
class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const type = this.props.type;
        return (
            <div>
                <div>{scaleNames[type]}</div>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </div>

        );
    }
}
export default Temperature;
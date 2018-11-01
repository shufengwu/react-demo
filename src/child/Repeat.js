
import React from 'react';
class Repeat extends React.Component {
    render() {
        let items = [];
        for (let i = 0; i < this.props.numTimes; i++) {
            items.push(this.props.children(i));
        }
        return (
            <div>{items}</div>
        );
    }
}
export default Repeat;
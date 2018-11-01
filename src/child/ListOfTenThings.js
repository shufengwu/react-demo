
import React from 'react';
import Repeat from './Repeat';
class ListOfTenThings extends React.Component {
    render() {
        return (
            <Repeat numTimes={10}>
                {(index) => <div key={index}>This is item {index} in the list</div>}
            </Repeat>
        );
    }
}
export default ListOfTenThings;
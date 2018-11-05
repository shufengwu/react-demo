
import React from 'react';
import './ProductTable.css';
class TableItemTitle extends React.Component {
    render() {
        const titleName = this.props.titleName;

        // JSX
        // return (
        //     <div className="tableItemTitle">{titleName}</div>
        // );
        const tableItemTitle = React.createElement(
            'div',
            { className: 'tableItemTitle'},
            titleName
        );
        return tableItemTitle;
        
    }
}

export default TableItemTitle;

import React from 'react';
import './ProductTable.css';
class TableItemTitle extends React.Component{
    render(){
        const titleName = this.props.titleName;
        return(<div className="tableItemTitle">{titleName}</div>);
    }
}

export default TableItemTitle;
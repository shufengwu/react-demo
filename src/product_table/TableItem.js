import React from 'react';
class TableItem extends React.Component {
    render() {
        const itemName = this.props.itemName;
        const itemPrice = this.props.itemPrice;
        // const inStock = this.props.inStock;
        // const inStockStyle = inStock?"#000":"#F00"; 
        return (
            <div className="tableItem">
                <div>{itemName}</div>
                <div>{itemPrice}</div>
            </div>
        );
    }
}

export default TableItem;
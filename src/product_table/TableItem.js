
import React from 'react';
class TableItem extends React.Component {
    render() {
        const itemName = this.props.itemName;
        const itemPrice = this.props.itemPrice;
        const inStock = this.props.inStock;
        const inStockStyle = inStock?"stock_true":"stock_false"; 
        console.log(inStockStyle);
        
        return (
            <div className="tableItem">
                <div className={inStockStyle}>{itemName}</div>
                <div>{itemPrice}</div>
            </div>
        );
    }
}

export default TableItem;
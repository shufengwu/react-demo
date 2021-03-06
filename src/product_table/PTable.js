
import React from 'react';
import './ProductTable.css';
import TableType from './TableType';
class PTable extends React.Component{
    render(){
        const productData = this.props.product;
        const key_words = this.props.key_words;
        const checked = this.props.checked;
        return(
            <div className="p_table">
                <div>
                    <div>Name</div>
                    <div>Price</div>
                </div>
                {productData.map(
                    (item,index)=>(<TableType key = {index} content={item} key_words={key_words} checked={checked}></TableType>)
                )}
                
            </div>
        );
    }
}

export default PTable;
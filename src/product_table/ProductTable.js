
import React from 'react';
import SearchBar from './SearchBar';
import PTable from './PTable';
// import TableItemTitle from './TableItemTitle';
// import TableItem from './TableItem';
import { getProductData, parseProductData } from './Utils';
class ProductTable extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
        this.state = {key_words:'',checked:false};
    }

    handleChange(value){
        this.setState({key_words:value});
    }

    handleStockChange(checked){
        this.setState({checked:checked});
    }

    render() {
        const productData = parseProductData(getProductData());
        const key_words = this.state.key_words;
        const checked = this.state.checked;
        return (
            <div className="product_table">
                <SearchBar handleChange={this.handleChange} handleStockChange={this.handleStockChange}></SearchBar>
                <PTable product={productData} key_words = {key_words} checked = {checked}>
                </PTable>
            </div>
        );
    }
}
export default ProductTable;
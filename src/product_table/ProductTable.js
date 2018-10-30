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
        this.state = {key_words:''};
    }

    handleChange(value){
        this.setState({key_words:value});
    }

    render() {
        const productData = parseProductData(getProductData());
        const key_words = this.state.key_words;
        return (
            <div className="product_table">
                <SearchBar handleChange={this.handleChange}></SearchBar>
                <PTable product={productData} key_words = {key_words}>
                </PTable>
            </div>
        );
    }
}
export default ProductTable;
import React from 'react';
import './ProductTable.css';
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {key_words:'',onlyShowStock:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
    }

    handleChange(e){
        this.props.handleChange(e.target.value);
    }

    handleStockChange(e){
        this.props.handleStockChange(e.target.checked);
    }
    render(){
        const checked = this.state.onlyShowStock;
        return (
            <div className="search_bar">
                <input type="text" placeholder="Search..." onChange={this.handleChange}/>
                <div>
                    <input type="checkbox" onChange={this.handleStockChange}/>Only show products in stock
                </div>
                
            </div>
        );
    }
}

export default SearchBar;
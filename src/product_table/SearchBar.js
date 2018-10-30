import React from 'react';
import './ProductTable.css';
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {key_words:''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.handleChange(e.target.value);
    }
    render(){
        return (
            <div className="search_bar">
                <input type="text" placeholder="Search..." onChange={this.handleChange}/>
                <div>
                    <input type="checkbox" />Only show products in stock
                </div>
                
            </div>
        );
    }
}

export default SearchBar;
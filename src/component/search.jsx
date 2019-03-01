import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    this.handleQuery=this.handleQuery.bind(this)

    }
    handleQuery(event){
        //console.log(event.target.value)
        this.props.onQuery(event.target.value)
    }
    render() { 
        return ( 
            <div className="search-bar">
            <input 
            onChange={this.handleQuery} 
            placeholder="search" 
            />
            </div>   
         );
    }
}
 
export default SearchBar;
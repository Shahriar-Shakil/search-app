import React, { Component } from 'react';
import SearchBar from './component/search';
import Results from './component/results';

import './App.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      query:''
    }
    this.handleQuery=this.handleQuery.bind(this)
  }
  handleQuery(query){
this.setState({query: query.toLowerCase().trim()})
  }
  render() {
    //console.log(this.state.query)
    return (
      <div className="search">
        <SearchBar onQuery={this.handleQuery}/>
        <Results products={this.props.products} query={this.state.query}/>
  </div>
    );
  }
}

export default Search;

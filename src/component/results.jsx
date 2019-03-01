import React, { Component } from 'react';
import Result from './result'
class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            foundProducts:this.props.products
         }
    }
    componentWillReceiveProps(nextProps) {
       var foundProducts = nextProps.products.filter(product=>{
           return product.name.toLowerCase().match(nextProps.query) ||
           product.description.toLowerCase().match(nextProps.query)
       })
       this.setState({foundProducts})
    }
    render() { 
        //console.log(this.state.foundProducts)
        return ( 
            <div className="result">
            {this.state.foundProducts.map((product,i)=>
                <Result key={i} product={product}/>
                )}
        
            </div>  
         );
    }
}
 
export default Results;

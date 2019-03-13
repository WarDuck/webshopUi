import React, { Component } from 'react';
import Product from "./Product"

const fakeData = [
    {
        "id": "10ba038e-48da-487b-96e8-8d3b99b6d18a",
        "name": "Fancy beer",
        "description": "IPA, 4.2%",
        "image": "https://via.placeholder.com/150",
        "price": 4.2
    },

    {
        "id": "7b057629-5dfe-4994-bcaf-63c501bd7720",
        "name": "Cool beer",
        "description": "Lager, 5%",
        "image": "https://via.placeholder.com/150",
        "price": 13.37
    },
];

class ProductList extends Component {
    state = {
        products: []
    }
    componentDidMount(){
        //TODO: load data from product API
        this.setState({products:fakeData})
    }
    render() {
      return (
        <div>
            <h2>Products</h2>
            {this.state.products.map(prod => 
                <Product product={prod} key={prod.id} addToCart={this.props.addToCart} loggedIn={this.props.loggedIn}/>
            )}
        </div>
      );
    }
  }
  
  export default ProductList;
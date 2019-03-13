import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
      <div className="cartitem">
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.description}</p>
        <img src={this.props.product.image}></img>
        <p>Eur: {this.props.product.price}</p>
      </div>
    );
  }
}

export default CartItem;
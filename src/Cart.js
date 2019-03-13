import React, { Component } from 'react';
import CartItem from "./CartItem"


class Cart extends Component {
  render() {
    return (
      <div className="cart">
      <h2>Your Cart</h2>
      {this.props.items.map(prod => <CartItem product={prod} key={prod.id}/>)}
      </div>
    );
  }
}

export default Cart;
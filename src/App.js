import React, { Component } from 'react';
import ProductList from "./ProductList";
import Cart from "./Cart";
import LoginForm from "./LoginForm"
import './App.css';

class App extends Component {
  state = {
    cartItems: [],
    loggedIn: false
  }
  addToCart = (prod) => {
    this.setState(state => {
      return {
        cartItems: [...state.cartItems, prod]
      }
    })
  }
  logIn = (username,password) => {
    //TODO: Log user in wiht username and password
    this.setState({
      loggedIn: true
    })
  }
  render() {
    return (
      <div className="App">
        <LoginForm loggedIn={this.state.loggedIn} logIn={this.logIn} />
        {this.state.loggedIn && (
          <Cart items={this.state.cartItems} />
        )}
        
        <hr />
        <ProductList addToCart={this.addToCart} loggedIn={this.state.loggedIn}/>
      </div>
    );
  }
}

export default App;

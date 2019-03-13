import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }
  handleSubmit = (event) => {
      event.preventDefault()
      this.props.logIn(this.state.username, this.state.password)
  }
  handleUsernameChange = (event) => {
      this.setState({
          username: event.target.value
      })
  }
  handlepasswordChange = (event) => {
    this.setState({
        password: event.target.value
    })
  }
  render() {
    if (this.props.loggedIn){
        return (
            <div className="Login">
                Welcome user
            </div>
          ); 
    }
    return (
      <div className="Login">
      <h2>please login</h2>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username} id="username" onChange={this.handleUsernameChange} placeholder="username"/>
            <input type="password" value={this.state.password} id="password" onChange={this.handlepasswordChange} placeholder="password"/>
            <button>login</button>
        </form>
      </div>
    );
  }
}

export default Login;
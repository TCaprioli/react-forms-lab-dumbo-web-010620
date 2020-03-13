import React from "react";

class LoginForm extends React.Component {
  state={
    username:"",
    password:""

  }

  handleSubmit=(event)=>{
    event.preventDefault()
    let {username} = this.state
    let {password} = this.state
    // let logData = [{username: username}, {password: password}]
    username !== "" && password !== "" ?
    this.props.handleLogin({username,password})
    :
    console.log('nope')
  }

  handleLogChange = event =>{
    this.setState({[event.target.name]:event.target.value})
  }

  render() {
    
    return (
      <form onSubmit={event=>this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleLogChange(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleLogChange(event)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

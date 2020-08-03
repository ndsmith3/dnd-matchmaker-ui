import React from 'react';
import '../App.css';
import Axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();
    try {
      await Axios.post('/login', {
        username: this.state.username,
        password: this.state.password
      });
      this.props.history.push('/');
      window.location.reload(false);
    } catch(e) {
      console.log(e);
    }
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="Login">
        <h1> Login </h1>
        <form onSubmit={this.onSubmit}>
          Username: 
          <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} />
          <br/>
          Password: 
          <input type="text" value={this.state.password} name="password" onChange={this.handleInputChange}/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;

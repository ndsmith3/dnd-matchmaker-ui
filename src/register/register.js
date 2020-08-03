import React from 'react';
import '../App.css';
import Axios from 'axios';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();
    try {
      await Axios.post('/register', {
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }
      });
      this.props.history.push('/');
    } catch(e) {
      console.log(e);
    }
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="Register">
        <h1> Registration </h1>
        <form onSubmit={this.onSubmit}>
          Username: 
          <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} />
          <br/>
          Email: 
          <input type="text" value={this.state.email} name="email" onChange={this.handleInputChange}/>
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

export default RegisterForm;

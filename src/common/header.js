import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

import './header.css'
import Axios from 'axios';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  async componentDidMount() {
    try {
      const userResponse = await Axios.get('/user');
      this.setState({
        userId: userResponse.data.data.id,
        username: userResponse.data.data.username,
        email: userResponse.data.data.email,
        isLoggedIn: true
      });
    } catch(err) {
      if (err.response.data.error.message !== 'no_session_token_found') {
        console.log(err)
      }
    }
  }

  render() {
    return (
      <div className="Header">
        <h1>
          <Link to="/" className="HomeButton">
            <img src={logo} alt="Home" />
          </Link>
          <LoginOrLogoutLink isLoggedIn={this.state.isLoggedIn} />
          <Link to="/register" className="RegisterButton">Register</Link>
        </h1>
      </div>
    );
  }
}

class LoginOrLogoutLink extends React.Component {
  async logout() {
    try {
      await Axios.post('/logout')
      window.location.reload(false);
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Link to="/" className="LoginButton" onClick={this.logout}>Logout</Link>;
    } else {
      return <Link to="/login" className="LoginButton">Login</Link>;
    }
  }
}

export default Header
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import Header from './common/header';

Axios.defaults.baseURL = "http://localhost:4000/api/v1"
Axios.defaults.withCredentials = true

const Home = lazy(() => import('./home/home'));
const RegisterForm = lazy(() => import('./register/register'));
const Login = lazy(() => import('./login/login'));

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={RegisterForm}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
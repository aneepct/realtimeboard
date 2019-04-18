import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from "./components/layout/Landing";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

import PrivateRoute from './common/PrivateRoute';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from './components/dashboard/Dashboard';
import User from './components/user/User';
import Post from './components/posts/Post';
import MyPosts from './components/posts/MyPosts';
import ComparisionReport from './components/configurations/ComparisionReport';
import AdsCalculator from './components/configurations/AdsCalculator';
import AudienceTrust from './components/configurations/AudienceTrust';

import './App.css';

// Check for token
if(localStorage.jwtToken) {
  // set auth & token in header
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // set current user & Authenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expire token
  const currentTime = Date.now() / 1000;
  if(currentTime > decoded.exp) {
    // logout user
    store.dispatch(setCurrentUser());
    // window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/users" component={User} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/posts" component={Post} />
                <PrivateRoute exact path="/my_posts" component={MyPosts} />
                <PrivateRoute exact path="/configuration_report" component={ComparisionReport} />
                <PrivateRoute exact path="/ads_calculator" component={AdsCalculator} />
                <PrivateRoute exact path="/audience_trust" component={AudienceTrust} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>;
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { loginUser } from '../../actions/authActions';

export class Login extends Component {
  constructor() {
    super();

    this.state = { 
      email: "", 
      password: "", 
      errors: {} 
    };
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    
    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    const userInput = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userInput);
    
  }

  render() {

    const { errors } = this.state;

    return <div className="login">
        <div className="container">
          <div className="row align-items-center" style={{height: 630}}>
            <div className="col">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input 
                    type="email" 
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })} 
                    placeholder="Email Address" 
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })} 
                    placeholder="Password" 
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password} 
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" value="Login" />
              </form>
            </div>

            <div className="col"></div>

            <div className="col">
                <h3>Data Platform</h3>
                <p>Before you get started with a complete influencer discovery plateform</p>
                <p>try out a free Instagram influencer search tool. Select what should be</p>
                <p>the influencer's intrests and location to find the right people in seconds</p>
            </div>
          </div>
        </div>
      </div>;
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

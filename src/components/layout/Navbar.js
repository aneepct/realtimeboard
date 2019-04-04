import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../actions/authActions';


export class Navbar extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.logOut();
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <span
          style={{ cursor: 'pointer' }} 
          onClick={this.onLogoutClick.bind(this)} 
          className="nav-link">
            <img style={{ width: "25px", marginRight: "5px" }} className="rounded-circle" src={user.avatar} alt={user.name} /> Logout
          </span>
        </li>
      </ul>;

    const guestLinks = <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <Link className="navbar-brand" to="/">
          Demo App
        </Link>
      </div>
      <ul class="nav navbar-nav">
        <li>
          <Link className="nav-link" to="/users">
            Users
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        </ul>
</div>
</nav>;

    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>;
  }
}

Navbar.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logOut })(Navbar);


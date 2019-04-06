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

    let imageDom = <img />;
    if(user){
      imageDom = <img style={{ width: "25px", marginRight: "5px" }} className="rounded-circle" src={user.avatar} alt={user.name} />
    };

    const authLinks = <ul className="navbar-nav ml-auto">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      </form>
      <li class="nav-item">
        <a class="nav-link" href="#">My Posts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Planner</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Analytics</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">New Post</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Upgrade My Plan</a>
      </li>
      <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {imageDom}
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <span
            style={{ cursor: 'pointer', color:'#000' }} 
            onClick={this.onLogoutClick.bind(this)} 
            className="nav-link dropdown-item">
              Logout
            </span>
        </div>
      </li>
      {/* <li className="nav-item">
        <span
          style={{ cursor: 'pointer' }} 
          onClick={this.onLogoutClick.bind(this)} 
          className="nav-link">
             {imageDom} Logout
          </span>
        </li> */}
      </ul>;

    const guestLinks = <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>;

    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DataPlatForm
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon" />
          </button>

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


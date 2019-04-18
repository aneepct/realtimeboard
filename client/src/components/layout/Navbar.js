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
    let userName = '';
    if(user){
      imageDom = <img style={{ width: "25px", marginRight: "5px" }} className="rounded-circle" src={user.avatar} alt={user.name} />
      userName = user.name;
    };

    const authLinks = <ul className="navbar-nav ml-auto">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      </form>
      <li className="nav-item">
        <a className="nav-link" href="/my_posts">My Posts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Planner</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Analytics</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/posts">New Post</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/configuration_report">Upgrade My Plan</a>
      </li>
      <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {imageDom}
          {userName}
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


        <div className="modal fade" id="newPostModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Post Name</label>
                  <input type="text" className="form-control" placeholder="Enter post name" />
                  <small className="form-text text-muted">Enter your post name here.</small>
                </div>
                <div className="form-group">
                  <label>Post Description</label>
                  <textarea className="form-control" rows="3" placeholder="Enter description name"></textarea>
                  <small className="form-text text-muted">Enter your post description here.</small>
                </div>
                <div className="form-group">
                  <label>Select Media</label>
                  <input type="file" className="form-control-file" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Schedule for later</button>
                <button type="button" className="btn btn-primary">Post Now</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      ;
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


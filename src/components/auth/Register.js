import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from "../../actions/authActions";
import mongodb from 'mongodb';

export class Register extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    const MongoClient = mongodb.MongoClient;
    // const uri = "";
    // const client = new MongoClient(uri, { useNewUrlParser: true });
    // client.connect(err => {
    //   const collection = client.db("test").collection("devices");
    //   // perform actions on the collection object
    //   console.log(collection)
    //   client.close();
    // });

    // const MongoClient = require('mongodb').MongoClient;
    console.log('hello')
    const MONGO_URL = 'mongodb://kailapratik13@gmail.com:Kpratik@13@cluster0-0qhtu.mongodb.net/test?retryWrites=true';
    MongoClient.connect(MONGO_URL, {useNewUrlParser: true})
    .then(() => console.log('connecting to database successful'))
    .catch(err => console.error('could not connect to mongo DB', err))
    // alert('hello')
    // MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, (err, db) => {  
    //   if (err) {
    //     return console.log(err);
    //   }

    //   // Do something with db here, like inserting a record
    //   db.collection('notes').insertOne(
    //     {
    //       title: 'Hello MongoDB',
    //       text: 'Hopefully this works!'
    //     },
    //     function (err, res) {
    //       if (err) {
    //         db.close();
    //         return console.log(err);
    //       }
    //       // Success
    //       db.close();
    //     }
    //   )
    // });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    

    return <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input 
                    type="text"
                    className={ classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    }) } 
                    placeholder="Name" 
                    name="name" 
                    onChange={this.onChange} 
                    value={this.state.name} 
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
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
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image,
                    use a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })} 
                    placeholder="Password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.onChange} 
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password2
                    })} 
                    placeholder="Confirm Password" 
                    name="password2" 
                    value={this.state.password2} 
                    onChange={this.onChange} 
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>;
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

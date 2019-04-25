import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from 'classnames';
import FileBase64 from 'react-file-base64';
import { createPost, setFBToken } from "../../actions/postActions";

export class Post extends Component {
    constructor() {
        super();
    
        this.state = { 
          name: "", 
          post_details: "", 
          media: "",
          fbAccessToken: "",
          errors: {},
        };
      }

  async componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
    this.props.setFBToken();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    } 
  }

  async getFiles(files){
    this.setState({ media: files.base64 });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  async createPost() {
      console.log(this.state); 
      await this.setState({ fbAccessToken: this.props.post.fbClient.access_token })
      console.log(this.state);
      await this.props.createPost(this.state);
      this.props.history.push('/');
  }

  render() {
    const { post } = this.props;
    const { errors } = this.state;
    
    let htmlDom = '';
    // if(errors.token === false){
    //   htmlDom = <div className="col-md-12">
    //               <div className="card">
    //                 <div className="card-body">
    //                     <h2>Connect to facebook first</h2>
    //                     <a href="http://localhost:5000/api/fbauth">Connect</a>
    //                 </div>
    //               </div>
    //             </div>
    // } else {
      htmlDom = <div className="col-md-12">
                  <h3>New Post</h3>
                  <div className="form-group">
                  <label>Post Name</label>
                      <input 
                          type="text" 
                          className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.name
                          })} 
                          placeholder="Enter post name" 
                          name="name"
                          onChange={this.onChange}
                          value={this.state.name}
                      />
                      {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                      )}
                      <small className="form-text text-muted">Enter post title here.</small>
                  </div>
                  <div className="form-group">
                      <label>Post Description</label>
                      <textarea 
                          type="text" 
                          className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.post_details
                          })} 
                          rows="3"
                          placeholder="Enter post description" 
                          name="post_details"
                          onChange={this.onChange}
                          value={this.state.post_details}
                      ></textarea>
                      {errors.post_details && (
                          <div className="invalid-feedback">{errors.post_details}</div>
                      )}
                      <small className="form-text text-muted">Enter your post description here.</small>
                  </div>
                  <div className="form-group">
                      <FileBase64
                          multiple={ false }
                          onDone={ this.getFiles.bind(this) } />
                      {errors.media && (
                          <div className="invalid-feedback">{errors.media}</div>
                      )}
                  </div>
                </div>
    // }
    
    return <div className="row m-5">
      <div className="col">
        <div className="row">
          {htmlDom}  
          <div className="col-md-12">
            <a href="/dashboard" className="m-2">
                <button type="cancel" className="btn btn-primary">Back</button>
            </a>
            <button type="submit" onClick={() => this.createPost()} className="btn btn-primary m-2">Submit</button>
          </div>
        </div>
      </div>
      <div className="col">
        {this.state.media && (
            <img src={this.state.media} alt="" />
        )}
      </div>
    </div>;
  }
}

Post.propTypes = {
  auth: PropTypes.object.isRequired,
  createPost: PropTypes.func.isRequired,
  setFBToken: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors,
  fbClient: state.fbClient,
});

export default connect(mapStateToProp, { createPost, setFBToken })(Post);

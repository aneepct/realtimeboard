import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from 'classnames';
import FileBase64 from 'react-file-base64';
import { createPost } from "../../actions/postActions";

export class Post extends Component {
    constructor() {
        super();
    
        this.state = { 
          name: "", 
          details: "", 
          media: "",
          errors: {}
        };
      }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
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
      await this.props.createPost(this.state);
      this.props.history.push('/');
  }

  render() {
    const { post } = this.props;
    const { errors } = this.state;
    console.log(post, this.state);
    
    return <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
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
                      'is-invalid': errors.details
                    })} 
                    rows="3"
                    placeholder="Enter post description" 
                    name="details"
                    onChange={this.onChange}
                    value={this.state.details}
                ></textarea>
                {errors.details && (
                    <div className="invalid-feedback">{errors.details}</div>
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
                {this.state.media && (
                    <img style={{width: 100, height: 100,}} src={this.state.media} />
                )}
            </div>
          </div>
          <div className="col-md-12">
            <a href="/dashboard">
                <button type="cancel" className="btn btn-primary pull-right">Back</button>
            </a>
            <button type="submit" onClick={() => this.createPost()} className="btn btn-primary pull-left">Submit</button>
          </div>
        </div>
      </div>
    </div>;
  }
}

Post.propTypes = {
  auth: PropTypes.object.isRequired,
  createPost: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors
});

export default connect(mapStateToProp, { createPost })(Post);

import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts, deletPost } from "../../actions/postActions";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

library.add(faHandshake)

class MyPosts extends Component {

    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }
      
        this.props.getPosts(10);
    }

  render() {
    const { post } = this.props;

    let feedsDom = []
    for (const value of post.all.reverse()) {
        feedsDom.push(<div className="col-md-12 m-3" key={value._id} >
                      <div className="card">
                        <img src={value.media} className="card-img-top" alt=" " />
                        <div className="card-body">
                          <h5 className="card-title">{value.name}</h5>
                          <p className="card-text">{value.post_details}</p>
                          <button className="btn btn-primary m-2">View</button>
                          <button className="btn btn-danger pull-right" onClick={() => this.removePosts(value._id)}>Remove</button>
                        </div>
                      </div>
                    </div>)

    }

    return (
      <div className="row">
        <div className="col-md-6 pt-5">
            { feedsDom }
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 pt-5">
            <div className="row">
              <div className="col-md-12">
                <select class="form-control">
                  <option>Facebook</option>
                </select>
              </div>
              <div className="col-md-6 text-center p-2">
                <h1><strong style={{color: '#cc3743'}}>71</strong></h1>
                <span> New Messages</span>
              </div>
              <div className="col-md-6 text-center p-2">
                <h1><strong style={{color: '#cc3743'}}>51</strong></h1>
                <span> New Comments</span>
              </div>
              <div className="col-md-6 text-center p-2">
                <h1><strong style={{color: '#cc3743'}}>7</strong></h1>
                <span> New Mentions</span>
              </div>
              <div className="col-md-6 text-center p-2">
                <h1><strong style={{color: '#cc3743'}}>3</strong></h1>
                <span> New Reviews</span>
              </div>
            </div> 
        </div>
      </div>
    )
  }
}

MyPosts.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    deletPost: PropTypes.func.isRequired,
}

const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post,
    errors: state.errors
});

export default connect(mapStateToProp, { getPosts, deletPost })(MyPosts);

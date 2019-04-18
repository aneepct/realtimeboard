import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts, deletPost } from "../../actions/postActions";

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
        feedsDom.push(<div className="col-md-12" key={value._id} >
                      <div className="card">
                        <img src={value.media} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{value.name}</h5>
                          <p className="card-text">{value.post_details}</p>
                          <button className="btn btn-primary">View</button>
                          <button className="btn btn-danger pull-right" onClick={() => this.removePosts(value._id)}>Remove</button>
                        </div>
                      </div>
                    </div>)

    }

    return (
      <div className="row">
        <div className="col-md-8">
            { feedsDom }
        </div>
        <div className="col-md-4">
            <h3>All</h3>    
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

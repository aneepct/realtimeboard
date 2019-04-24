import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Analytics extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

Analytics.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
  }
  
  const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post
  });
  
  export default connect(mapStateToProp, {  })(Analytics);

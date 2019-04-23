import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Planner extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

Planner.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
  }
  
  const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post
  });
  
  export default connect(mapStateToProp, {  })(Planner);

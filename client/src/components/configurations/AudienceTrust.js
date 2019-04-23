import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AudienceTrust extends Component {
  render() {
    return (
        <div className="row align-item-center">
  
        <div className="col-md-12">
            <h3> Find Influencers Your Audience Trusts </h3>
        </div>

        <div className="col-md-6">
            <p>Before you get started with a complete influencer discovery plateform</p>
            <p>try out a free Instagram influencer search tool. Select what should be</p>
            <p>the influencer's intrests and location to find the right people in seconds</p>
        </div>

        
        <div className="col-md-6">
            <img src={ require('../../img/4.png') } className="card-img-top" alt="..." />
        </div>

        <div className="col-md-6">
              <div className="form-group">
                  <label>Select Region</label>
                  <select className="form-control">
                      <option>Region</option>
                  </select>
              </div>
        </div>

        <div className="col-md-6">
              <div className="form-group">
                  <label>Intrest</label>
                  <select className="form-control">
                      <option>Intrest</option>
                  </select>
              </div>
        </div>

        <div className="col-md-12">
            <img src={ require('../../img/2.png') } className="card-img-top" alt="..." />
            <div className="text-center">
                <h4>Try Facebook PostPromotion Effectiveness</h4>
                <p>Learn if you are investing your Facebook budget efficiently and if you are maximizing the return on</p>
                <p>your advertising investment. Compare your promotion effectiveness to your competitors.</p>
            </div>
        </div>

        <div className="col-md-12 text-center">
            <h4>Need a more capable solution? Get started with the complete influencer marketing plateform.</h4>
        </div>


        <div className="col-md-12 text-center">
            <br/>
            <a href="#">
                <button className="btn btn-lg btn-warning">Try Premium</button>
            </a>
        </div>
        
      </div>
    )
  }
}

AudienceTrust.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post,
    errors: state.errors
});

export default connect(mapStateToProp, { })(AudienceTrust);

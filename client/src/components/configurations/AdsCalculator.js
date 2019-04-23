import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AdsCalculator extends Component {
  render() {
    return (
        <div className="row align-item-center">
  
          <div className="col-md-12">
              <h3> Your Free Facebook Ads Calculator </h3>
          </div>
  
          <div className="col-md-6">
              <h4>What will your Facebook ads cost?</h4>
              <p>Get a prediction based on millions of ads and over US$500 million</p>
              <p>In Facebook ad spend in the database.</p>

              <h4>Here is our free tool will help your answer:</h4>
              <ul>
                  <li>How much your facebook ads cost you?</li>
                  <li>How much do you need to spend accross Objectives?</li>
                  <li>How will content quality impace your cost?</li>
                  <li>Which regiouns are most cost-effective to target?</li>
                  <li>What will US$1,000 buy you on facebook today?</li>
                  <li>How can you justify an increase on budget?</li>
              </ul>
          </div>

          
          <div className="col-md-6">
              <img src={ require('../../img/2.png') } className="card-img-top" alt="..." />
          </div>
  
          <div className="col-md-12 text-center">
            <h2>Get Started</h2>
          </div>

          <div className="col-md-6">
                <div className="form-group">
                    <label>Objective</label>
                    <select className="form-control">
                        <option>Objective</option>
                    </select>
                </div>
          </div>

          <div className="col-md-6">
                <div className="form-group">
                    <label>Region</label>
                    <input type="email" className="form-control" aria-describedby="facebookHelp" placeholder="Region" />
                </div>
          </div>

          <div className="col-md-6">
                <div className="form-group">
                    <label>Age</label>
                    <input type="email" className="form-control" aria-describedby="facebookHelp" placeholder="Age" />
                </div>
          </div>

          <div className="col-md-6">
                <div className="form-group">
                    <label>Intrest</label>
                    <input type="email" className="form-control" aria-describedby="facebookHelp" placeholder="Intrest" />
                </div>
          </div>

  
          <div className="col-md-12 text-right">
              <br/>
              <a href="/audience_trust">
                  <button className="btn btn-primary">Submit</button>
              </a>
          </div>
          
        </div>
      )
  }
}

AdsCalculator.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post,
    errors: state.errors
});

export default connect(mapStateToProp, { })(AdsCalculator);

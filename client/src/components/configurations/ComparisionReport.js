import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ComparisionReport extends Component {
  render() {
    return (
        <div>
            <div className="row">

                <div className="col-md-12">
                    <h3> Your Free Facebook Performance Report </h3>
                </div>

            </div>
            <div className="row align-item-center">

                <div className="col-md-6">
                    <p>Learn how effective your Facebook marketing</p>
                    <p>stretagy is. Add the url of your Facebook page</p>
                    <p>and that of your competitors to see how you</p>
                    <p>performed on Facebook in the last 90 days.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Your Facebook Page</label>
                                <input type="email" className="form-control" aria-describedby="facebookHelp" placeholder="Enter URL" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Your Competitor's Page</label>
                                <input type="email" className="form-control"  aria-describedby="competitorHelp" placeholder="Enter URL" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <img src={ require('../../img/2.png') } className="card-img-top" alt="..." />
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={ require('../../img/5.png') } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Feed title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={ require('../../img/5.png') } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Feed title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={ require('../../img/5.png') } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Feed title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 text-right">
                    <br/>
                    <a href="/ads_calculator">
                        <button className="btn btn-primary">Next</button>
                    </a>
                </div>
                
            </div>
        </div>
    )
  }
}

ComparisionReport.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }
  
  const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post,
    errors: state.errors
  });
  
  export default connect(mapStateToProp, { })(ComparisionReport);

import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Services extends Component {
  render() {
    return (
        <div>
            <div className="row">

                <div className="col text-center p-5">
                    <h3>Select the plan that </h3>
                    <h3>suits your requirements</h3>
                </div>

            </div>

            <div className="row">
                <div className="col">
                    <div class="card">
                        <div className="card-body text-center">
                            <h4>
                                <span className="title">Basic</span>
                            </h4>
                            <h5>Maximize your return from social media investment</h5>
                            <p>Measure your social media ROI, </p>
                            <p>create more different content</p>
                            <p>and use budget smartly to decrease</p>
                            <p>ads costs and increate efficiency</p>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div className="card-body text-center">
                            <h4>
                                <span className="title">From <strong>US $20 per</strong> profile</span>
                            </h4>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div className="card-body text-center">
                            <button className="btn btn-info">Buy Online</button>
                            <p>or <a href="/free_trial">Start free trial</a></p>
                        </div>
                    </div>

                    <div className="card mt-2">
                        <div className="card-body">
                            <ul>
                                <li>Cross platform publishing</li>
                                <li>Reporting & Exporting</li>
                                <li>Social Medial Analytics</li>
                                <li>Dashboard</li>
                                <li>Content Calender</li>
                                <li>20+ Social Media Profiles</li>
                                <li>20+ User Seats</li>
                                <li>Full Historical Data</li>
                                <li>Mobile Approvals</li>
                                <li>Customizable Approvals</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div class="card">
                        <div className="card-body text-center">
                            <h4>
                                <span className="title">Bussiness</span>
                            </h4>
                            <h5>Maximize your return from social media investment</h5>
                            <p>Measure your social media ROI, </p>
                            <p>create more different content</p>
                            <p>and use budget smartly to decrease</p>
                            <p>ads costs and increate efficiency</p>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div className="card-body text-center">
                            <h4>
                                <span className="title">From <strong>US $40 per</strong> profile</span>
                            </h4>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div className="card-body text-center">
                            <button className="btn btn-info">Buy Online</button>
                            <p>or <a href="/free_trial">Start free trial</a></p>
                        </div>
                    </div>

                    <div className="card mt-2">
                        <div className="card-body">
                            <ul>
                                <li>Cross platform publishing</li>
                                <li>Reporting & Exporting</li>
                                <li>Social Medial Analytics</li>
                                <li>Dashboard</li>
                                <li>Content Calender</li>
                                <li>20+ Social Media Profiles</li>
                                <li>20+ User Seats</li>
                                <li>Full Historical Data</li>
                                <li>Mobile Approvals</li>
                                <li>Customizable Approvals</li>
                                <li>Promoted Post Detection</li>
                                <li>Content Discovery</li>
                                <li>Google Analytics Integration</li>
                                <li>4 Ads or Video Benchmarks</li>
                                <li>Prime Time Publishing Recommandation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div class="card">
                        <div className="card-body text-center">
                            <h4>
                                <span className="title">Premium</span>
                            </h4>
                            <h5>Maximize your return from social media investment</h5>
                            <p>Measure your social media ROI, </p>
                            <p>create more different content</p>
                            <p>and use budget smartly to decrease</p>
                            <p>ads costs and increate efficiency</p>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div className="card-body text-center">
                            <h4>
                                <span className="title">For 50+ profile</span>
                            </h4>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div className="card-body text-center">
                            <button className="btn btn-info">Buy Online</button>
                            <p>or <a href="/free_trial">Start free trial</a></p>
                        </div>
                    </div>

                    <div className="card mt-2">
                        <div className="card-body">
                            <ul>
                                <li>Cross platform publishing</li>
                                <li>Reporting & Exporting</li>
                                <li>Social Medial Analytics</li>
                                <li>Dashboard</li>
                                <li>Content Calender</li>
                                <li>20+ Social Media Profiles</li>
                                <li>20+ User Seats</li>
                                <li>Full Historical Data</li>
                                <li>Mobile Approvals</li>
                                <li>Customizable Approvals</li>
                                <li>Promoted Post Detection</li>
                                <li>Content Discovery</li>
                                <li>Google Analytics Integration</li>
                                <li>4 Ads or Video Benchmarks</li>
                                <li>Prime Time Publishing Recommandation</li>
                                <li>Post Performance Prediction</li>
                                <li>Live Video Analytics</li>
                                <li>Sentimental Analytics</li>
                                <li>Community Management (Add-on)</li>
                                <li>Influencer Discovery (Add-on)</li>
                                <li>Audiences (Add-on)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row text-center p-5">
                <div className="col">
                    <h1 className="title">FAQ</h1>
                </div>
            </div>

            <div className="row text-center p-5">
                <div className="col">
                    <p>Before you get started with a complete influencer discovery plateform</p>
                    <p>try out a free Instagram influencer search tool. Select what should be</p>
                    <p>the influencer's intrests and location to find the right people in seconds</p>
                </div>
            </div>
        </div>
    )
  }
}

Services.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post,
    errors: state.errors
});

export default connect(mapStateToProp, { })(Services);


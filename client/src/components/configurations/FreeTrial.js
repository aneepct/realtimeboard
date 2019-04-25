import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class FreeTrial extends Component {
  render() {
    return (
        <div>

            <div className="row">

                <div className="col text-center p-5">
                    <h3>Select the plan that </h3>
                    <p>suits your requirements</p>
                </div>

            </div>

            <div className="row">

                <div className="col-md-5 text-center p-3">
                    <h3>Start free Trial </h3>
                    <p>suits your requirements</p>

                    <div className="form-group">
                        
                        <input type="email" className="form-control"placeholder="Enter email" />
                        
                    </div>

                    <div className="form-group">
                        
                        <input type="password" className="form-control" placeholder="Enter email" />
                        
                    </div>

                    
                    <p> 
                        <small>
                        
                            By click
                        </small>
                    </p>

                    <button type="submit" className="btn btn-primary">Submit</button>

                    <a href=""> already have a account</a>
                </div>

                <div className="col-md-2 text-center p-3">
                    <p> sign up using</p>
                    <button type="submit" className="btn btn-primary">FaceBook</button>
                    <h3><strong>Or </strong> </h3>
                    <button type="submit" className="btn btn-primary">Google</button> 
                </div>

                <div className="col-md-5 text-center p-3">
                        <img src="..." alt="..." className="img-thumbnail"/>
                </div>

            </div>


        </div>
    )
  }
}
FreeTrial.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post,
    errors: state.errors
});

export default connect(mapStateToProp, { })(FreeTrial);

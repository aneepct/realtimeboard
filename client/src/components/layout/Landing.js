import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Landing extends Component {
  
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          </ol>
          <div className="carousel-inner" style={{height: '600px'}}>
            <div className="carousel-item active">
              <img 
                className="d-block w-100" 
                // src={ require('../../img/2.png') }
                src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA0LTIzVDE4OjM2OjEwKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0yM1QxODozNzozMiswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNC0yM1QxODozNzozMiswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MzczYzY5OS1lMmIyLTQzZTktYjMyOC1lMTE4MjIxMDYxYTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM3M2M2OTktZTJiMi00M2U5LWIzMjgtZTExODIyMTA2MWE2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzM3M2M2OTktZTJiMi00M2U5LWIzMjgtZTExODIyMTA2MWE2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzczYzY5OS1lMmIyLTQzZTktYjMyOC1lMTE4MjIxMDYxYTYiIHN0RXZ0OndoZW49IjIwMTktMDQtMjNUMTg6MzY6MTArMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rKc7aAAAADElEQVQImWM4Y+4MAAMZAUfLC+qTAAAAAElFTkSuQmCC" 
                alt="First slide" 
              />
              <div class="carousel-caption d-none d-md-block">

                  <a href="/free_trial" class="btn btn-outline-light m-2">Free Trial</a>
                  <a href="/login" class="btn btn-outline-light">Login</a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="row">
          <div className="col text-center">
            <h1 className="title p-5">Services</h1>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col text-center">
            <h2 className="title">Scheduling</h2>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>

          <div className="col text-center">
            <img src={ require('../../img/8.png') } alt=""/>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col text-center">
            <img src={ require('../../img/5.png') } alt=""/>
          </div>

          <div className="col text-center">
            <h2 className="title">Content Monitoring</h2>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col text-center">
            <h2 className="title">Community Management</h2>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>

          <div className="col text-center">
            <img src={ require('../../img/4.png') } alt=""/>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col text-center">
            <img src={ require('../../img/3.png') } alt=""/>
          </div>

          <div className="col text-center">
            <h2 className="title">Analytics</h2>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <div className="row">
                  <div className="col">
                    <h1 class="display-4" style={{color: '#fff'}}>Get Started For Free</h1>
                    <p class="lead" style={{color: '#fff'}}>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-right">
                    <span className="m-2">
                      <button type="button" class="btn btn-outline-light">Free Tools</button>
                    </span>
                    <span className="m-2">
                      <button type="button" class="btn btn-outline-light">Create Account</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <h1 className="title p-5">States</h1>
          </div>
        </div>

        <div className="row align-item-center">
          <div className="col text-center">
            <h2>50+</h2>
            <h2>Clients</h2>
          </div>

          <div className="col text-center">
            <h2>200+</h2>
            <h2>Campaings</h2>
          </div>

          <div className="col text-center">
            <h2>1000+</h2>
            <h2>Stories Everyday</h2>
          </div>

          <div className="col text-center">
            <h2>1000000+</h2>
            <h2>People Reached Everyday</h2>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <h1 className="title p-5">Try our free tools</h1>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <a className="btn btn-danger m-5 w-75" href="/configuration_report">Facebook Performance Report</a>
            <a className="btn btn-danger m-5 w-75" href="/ads_calculator">Facebook Ads Calculator</a>
            <a className="btn btn-danger m-5 w-75" href="/audience_trust">Influence Search Tool</a>
          </div>

          <div className="col text-center">
            <button className="btn btn-danger m-5 w-75">Instagram Performance Report</button>
            <button className="btn btn-danger m-5 w-75">Instagram Analytics</button>
            <button className="btn btn-danger m-5 w-75">Influence Hastag Tool</button>
          </div>

          <div className="col text-center">
            <button className="btn btn-danger m-5 w-75">Marketing Persoa Template</button>
            <button className="btn btn-danger m-5 w-75">Report Generation</button>
            <button className="btn btn-danger m-5 w-75">Social Content Inspiration</button>
          </div>
        </div>

      </div>
      
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
  auth: state.auth
});

export default connect(mapStateToProp, {})(Landing);

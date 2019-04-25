import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from 'chart.js';
import { getPosts } from "../../actions/postActions";

class Analytics extends Component {

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
    this.props.getPosts();

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.post.all.length);
    let lineChart = document.getElementById('lineChart');
    let pieChart = document.getElementById('pieChart');
    let pieEnChart = document.getElementById('pieEnChart');
    let fanData = {
        labels: ['', '', '', '', ''],
        datasets: [{
            label: '# of Posts',
            data: [nextProps.post.all.length+4, nextProps.post.all.length, nextProps.post.all.length+2, nextProps.post.all.length, nextProps.post.all.length+6],
            backgroundColor: [
                '#5173be',
                '#5173be',
                '#5173be',
                '#5173be',
                '#5173be'
            ],
            borderColor: [
                '#5173be',
                '#5173be',
                '#5173be',
                '#5173be',
                '#5173be'
            ],
            borderWidth: 1
        }]
    };
    let pageData = {
        labels: ['', '', '', '', ''],
        datasets: [{
            label: '# of Posts',
            data: [1, 0, 1, 0, 0],
            backgroundColor: [
                '#5173be',
                '#5173be',
                '#5173be',
                '#5173be',
                '#5173be'
            ],
            borderColor: [
                '#5173be',
                '#5173be',
                '#5173be',
                '#5173be',
                '#5173be'
            ],
            borderWidth: 1
        }]
    };
    let interactionsData = {
      labels: ['', '', '', '', ''],
      datasets: [{
          label: '# of Posts',
          data: [1, 0, 5, 0, 0],
          backgroundColor: [
              '#5173be',
              '#5173be',
              '#5173be',
              '#5173be',
              '#5173be'
          ],
          borderColor: [
              '#5173be',
              '#5173be',
              '#5173be',
              '#5173be',
              '#5173be'
          ],
          borderWidth: 1
      }]
  };
    let options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    new Chart(lineChart, {
        type: 'bar',
        data: fanData,
        options: options
    });

    new Chart(pieChart, {
        type: 'bar',
        data: pageData,
        options: options
    });

    new Chart(pieEnChart, {
        type: 'bar',
        data: interactionsData,
        options: options
    });
  }


  render() {

    const { post } = this.props;

    let feedsDom = [];
    let i = 0;
    for (const value of post.all.reverse()) {
      feedsDom.push(<div className="col" key={value._id} >
                    <div className="card">
                      <img src={value.media} className="card-img-top" height="200" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">{value.post_details}</p>
                      </div>
                    </div>
                    <div className="card">
                      <ul>
                        <li>Interactions: {Math.floor((Math.random() * 10) + 1)}</li>
                        <li>Likes: {Math.floor((Math.random() * 10) + 1)}</li>
                        <li>Comments: {Math.floor((Math.random() * 10) + 1)}</li>
                        <li>Shares: {Math.floor((Math.random() * 10) + 1)}</li>
                      </ul>
                    </div>
                  </div>)
      i++;
      if(i === 5){
        break;
      }
    }
    
    return (
      <div className="row">

        <div className="col">

          <div className="row">
            <div className="col">
              <div className="card m-5">
                <div className="card-header">
                  Facebook Pages
                </div>
                <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <canvas id="lineChart" width="400" height="400"></canvas>
                        <h5 className="card-title">Groth of total fans</h5>
                      </div>
                      <div className="col-md-4">
                        <canvas id="pieChart" width="400" height="400"></canvas>
                        <h5 className="card-title">Number of pages posts</h5>
                      </div>
                      <div className="col-md-4">
                        <canvas id="pieEnChart" width="400" height="400"></canvas>
                        <h5 className="card-title">Number of interections</h5>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card">
                <div className="card-header">
                  Top 5 Posts by Interactions
                </div>
                <div className="card-body">
                  <div className="row">
                    {feedsDom}
                  </div>
                </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <p>User Questions Overview</p>

                        <h3>0.00</h3>
                        <p>Average User</p>
                        <p>Questions per day</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <p>Responses rate to user questions</p>

                        <h3>N/A</h3>
                        <p>Awarded</p>
                        <p>UnAwarded</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <p>Average response time for user questions</p>

                        <h3>N/A</h3>
                        <p>-</p>
                        <p>-</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

Analytics.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
  }
  
  const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post
  });
  
  export default connect(mapStateToProp, { getPosts })(Analytics);

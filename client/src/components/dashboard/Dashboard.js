import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from 'chart.js';
import { getPosts } from "../../actions/postActions";

export class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }

    this.props.getPosts(10);

    let lineChart = document.getElementById('lineChart');
    let pieChart = document.getElementById('pieChart');
    let pieEnChart = document.getElementById('pieEnChart');
    let data = {
        labels: ['Landing', 'Site', 'App', 'Board', 'Bill'],
        datasets: [{
            label: '# of Posts',
            data: [3, 5, 9, 12, 16],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
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
        type: 'horizontalBar',
        data: data,
        options: options
    });

    new Chart(pieChart, {
        type: 'pie',
        data: data,
        options: options
    });

    new Chart(pieEnChart, {
        type: 'pie',
        data: data,
        options: options
    });
    
  }

  render() {
    const { user } = this.props.auth;
    const { post } = this.props;

    let feedsDom = []
    let scheduleDom = []
    for (const value of post.all.reverse()) {
      feedsDom.push(<div className="col-md-12">
                    <div className="card">
                      <img src={value.media} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">{value.name}</p>
                        <button className="btn btn-primary">View</button>
                      </div>
                    </div>
                  </div>)

        scheduleDom.push(<div className="col-md-12">
                          <div className="card">
                            <img src={value.media} height="200" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{value.name}</h5>
                              <p className="card-text">{value.name}</p>
                              <button className="btn btn-primary">View</button>
                            </div>
                          </div>
                        </div>)
    }

    console.log(feedsDom);
    
    return <div className="row">
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-12">
            <h1>Feeds</h1>
          </div>

          {feedsDom}

        </div>
      </div>

      <div className="col-md-8">
        <div className="row">
          <div className="col-md-4 offset-md-8">
            <div className="form-group">
              <select className="form-control">
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <canvas id="lineChart" width="400" height="400"></canvas>
                    <h5 className="card-title">No of posts</h5>
                  </div>
                  <div className="col-md-4">
                    <canvas id="pieChart" width="400" height="400"></canvas>
                    <h5 className="card-title">Reach</h5>
                  </div>
                  <div className="col-md-4">
                    <canvas id="pieEnChart" width="400" height="400"></canvas>
                    <h5 className="card-title">Engagement</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="card-title">Scheduled Posts</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {scheduleDom}
        </div>
      </div>
    </div>;
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
}

const mapStateToProp = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(mapStateToProp, { getPosts })(Dashboard);

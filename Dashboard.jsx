// @flow
import React from 'react';

class Dashboard extends React.Component<{}> {

  constructor() {

    super();

    this.styles = {
      progressBar : {
        width: "65%",
        height: "4px"
      }
    }

  }

  render() {
    return (<main className="main-container">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card card-body">
                      <h6>
                        <span className="text-uppercase">Total calls</span>
                        <span className="float-right">
                          <a className="btn btn-xs btn-primary" href="#">View</a>
                        </span>
                      </h6>
                      <br />
                      <p className="fs-28 fw-100">17.876</p>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={this.styles.progressBar}>
                        </div>
                      </div>
                      <div className="text-gray fs-12">
                        <i className="ti-stats-up text-success mr-1" aria-hidden="true"></i>%18 decrease from last day
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card card-body">
                      <h6>
                        <span className="text-uppercase">Latency</span>
                        <span className="float-right">
                          <a className="btn btn-xs btn-primary" href="#">View</a>
                        </span>
                      </h6>
                      <br />
                      <p className="fs-28 fw-100">0.13 sec.</p>
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar"style={this.styles.progressBar}>
                        </div>
                      </div>
                      <div className="text-gray fs-12">
                        <i className="ti-stats-down text-danger mr-1"></i>%18 decrease from last hour
                      </div>

                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card card-body">
                      <h6>
                        <span className="text-uppercase">Errors</span>
                        <span className="float-right">
                          <a className="btn btn-xs btn-primary" href="#">View</a>
                        </span>
                      </h6>
                      <br />
                      <p className="fs-28 fw-100">3</p>
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={this.styles.progressBar}>
                        </div>
                      </div>
                      <div className="text-gray fs-12">
                        <i className="ti-stats-down text-danger mr-1"></i>%3 decrease from last hour
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h5>
                          <strong>Calls Distribution</strong>
                        </h5>
                      </div>
                      <div className="card-body">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            );
  }

}

export default Dashboard;
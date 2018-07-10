// @flow
import React from 'react';
import { createFragmentContainer, graphql} from 'react-relay';
import { css } from 'glamor';
import DocumentTitle from 'react-document-title';

const SummaryCalls = ({title, totals, relay}) => {

    let todayCalls = 0;
    let percentage = 0;
    if( totals.totalCalls && totals.totalCalls.length > 0 && totals.todayTotalCalls.length > 0 ){
      todayCalls = totals.todayTotalCalls[0].value.toLocaleString();
      percentage = Math.floor(totals.todayTotalCalls[0].value / totals.totalCalls[0].value * 100) ;
    }

    let progressBarWidth = percentage + '%';
    let progressBarCss = css({
        width: progressBarWidth,
        height: "4px",
        backgroundColor: "#33cabb"
    });

    return (<DocumentTitle title='Dashboard - ESB Monitor'>
            <div className="col-lg-4">
              <div className="card card-body esbCard">
              <h6>
                <span className="text-uppercase esbCaption">{title}</span>
                <span className="float-right">
                  <a className="btn btn-xs btn-primary" href="#">View</a>
                </span>
              </h6>
              <br />
              <p className="fs-28 fw-100">{todayCalls}</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" className={progressBarCss}>
                </div>
              </div>
              <div className="text-gray fs-12">
                <i className="ti-stats-up text-success mr-1" aria-hidden="true"></i>
                {percentage}% increase from last day
              </div>
            </div>
          </div>
        </DocumentTitle>);


}

export default createFragmentContainer(SummaryCalls,
graphql`
  fragment SummaryCalls_totals on Runtime
  @argumentDefinitions(
    before: { type: "Date", defaultValue: 2 }
  )
  {
    todayTotalCalls: totalCalls(before: 0) {
      value
    }
    totalCalls(before: $before) {
      date
      value
    }
  }
`);

import React from 'react';
import {
  Row,
  Col,
  Progress,
  Table,
  Label,
  Input,
} from 'reactstrap';
import Slider from "react-slick";
import Widget from '../../components/Widget';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';
import Rickshaw from './components/rickshaw/Rickshaw';
import MainChart from './components/Charts/MainChart';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import AnimateNumber from 'react-animated-number';
import { receiveDataRequest } from '../../actions/analytics';

//import s from './Dashboard.module.scss';
import './Widgets.scss';
import s from './WidgetsMetro.module.scss';
import mock from './mock';
import Trend from 'react-trend';
import TableContainer from './components/TableContainer/TableContainer';
import BigStat from './components/BigStat/BigStat';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA5 from '../../images/people/a5.jpg';
import peopleA4 from '../../images/people/a4.jpg';


class Dashboard extends React.Component {

  static propTypes = {
    mainChart: PropTypes.any,
    performance:PropTypes.any,
    server: PropTypes.any,
    visits: PropTypes.any,
    isReceiving: PropTypes.bool,
  };

  static defaultProps = {
    mainChart: [],
    performance:{},
    server: {},
    visits: {},
    isReceiving: false
  };

  constructor(props) {

    super(props);


    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  getRandomData = () => {
    const arr = [];
    for (let i = 0; i < 25; i += 1) {
      arr.push(Math.random().toFixed(1) * 10);
    }
    return arr;
  }

  donut = () => {
    let series = [
      {
        name: 'Revenue',
        data: this.props.revenue.map(s => {
          return {
            name: s.label,
            y: s.data
          }
        })
      }
    ];
    return {
      chart: {
        type: 'pie',
        height: 120,
        backgroundColor: 'rgba(0,0,0,0)',
      },
      credits: {
        enabled: false
      },
      title: false,
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false
          },
          borderWidth: 0,
          showInLegend: true,
          innerSize: 80,
          size: 100,
          states: {
            hover: {
              halo: {
                size: 1
              }
            }
          }
        }
      },
      colors: ['#2d8515', '#2477ff', '#db2a34'],
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        itemStyle: {
          color: 'rgba(244, 244, 245, 0.6)',
          fontWeight: 400,
        },
        itemHoverStyle: {
          color: "#cccccc"
        },
        itemMarginBottom: 5,
        symbolRadius: 0
      },
      exporting: {
        enabled: false
      },
      series
    };
  }

  componentDidMount() {
    this.props.dispatch(receiveDataRequest());
  }
  render() {
    const { isReceiving, mainChart, server, visits, performance } = this.props;
    let settings = {
      dots: false,
      infinite: true,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
    };


    return (
      <div className={s.root}>
        <h1 className="page-title">Dashboard &nbsp;

        </h1>
        <Row>
          <Col xl={3} lg={4} md={6} xs={12}>
            <Widget>
              <div className="clearfix">
                <Row className="flex-nowrap">
                  <Col xs={3}>
                    <span className="widget-icon">
                      <i className="fi flaticon-like text-primary" />
                    </span>
                  </Col>
                  <Col xs="9">
                    <h6 className="m-0 text-white">New Clients Enrolled</h6>
                    <p className="h2 m-0 fw-normal">370,400</p>
                  </Col>
                </Row>
                <Row className="flex-nowrap">
                  <Col xs={6}>
                    <h6 className="m-0 text-white">In care</h6>
                    <p className="value5">24%</p>
                  </Col>
                  <Col xs="6">
                    <h6 className="m-0 text-white">NLIC In care</h6>
                    <p className="value5">9.5%</p>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
          <Col xl={3} lg={4} md={6} xs={12}>
            <Widget>
              <div className="clearfix">
                <Row className="flex-nowrap">
                  <Col xs="3">
                    <span className="widget-icon">
                      <i className="fi flaticon-magic-wand text-success" />
                    </span>
                  </Col>
                  <Col xs="9">
                    <Slider {...settings} className={`${s.hideOverflow} ${s.itemMinWidth}`}>
                      <div>
                        <h6 className="m-0 text-white">TESTING DONE</h6>
                        <p className="h2 m-0 fw-normal">3,633,210</p>
                      </div>
                      <div>
                        <h6 className="m-0 text-white">POSITIVE CASES</h6>
                        <p className="h2 m-0 fw-normal">117,015</p>
                      </div>
                    </Slider>
                  </Col>
                </Row>
                <Row className="flex-nowrap">
                  <Col xs="6">
                    <h6 className="m-0 text-white">New</h6>
                    <Slider {...settings} className={s.hideOverflow}>
                      <div>
                        <p className="value5">120,332</p>
                      </div>
                      <div>
                        <p className="value5">12,701</p>
                      </div>
                    </Slider>
                  </Col>
                  <Col xs="6">
                    <h6 className="m-0 text-white">Increase Rate</h6>
                    <Slider {...settings} className={s.hideOverflow}>
                      <div>
                        <p className="value5">23%</p>
                      </div>
                      <div>
                        <p className="value5">2.3%</p>
                      </div>
                    </Slider>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
          <Col xl={3} lg={4} md={6} xs={12}>
            <Widget>
              <div className="clearfix">
                <Slider {...settings} className={`${s.hideOverflow} ${s.itemMinWidth}`}>
                  <div>
                    <Row className="flex-nowrap">
                      <Col xs={3}>
                        <span className="widget-icon">
                          <i className="fi flaticon-notebook-4 text-white" />
                        </span>
                      </Col>
                      <Col xs="9">
                        <h6 className="m-0 text-white">IN CARE</h6>
                        <p className="h2 m-0 fw-normal">1,282,765</p>
                      </Col>
                    </Row>
                    <Row className="flex-nowrap">
                      <Col xs={6}>
                        <h6 className="m-0 text-white">Facilities</h6>
                        <p className="value5">790</p>
                      </Col>
                      <Col xs={6}>
                        <h6 className="m-0 text-white">Pediatrics In Care</h6>
                        <p className="value5">37,456</p>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row className="flex-nowrap">
                      <Col xs={3}>
                        <span className="widget-icon">
                          <i className="fi flaticon-shuffle text-white" />
                        </span>
                      </Col>
                      <Col xs={9}>
                        <h6 className="m-0 text-white">PLHIV IN CARE</h6>
                        <p className="h2 m-0 fw-normal">1,561,899</p>
                      </Col>
                    </Row>
                    <Row className="flex-nowrap">
                      <Col xs={6}>
                        <h6 className="m-0 text-white">In Wellness Clinics</h6>
                        <p className="value5">27,712</p>
                      </Col>
                      <Col xs="6">
                        <h6 className="m-0 text-white">Adults In Care</h6>
                        <p className="value5">1,441,566</p>
                      </Col>
                    </Row>
                  </div>
                </Slider>
              </div>
            </Widget>
          </Col>
          <Col xl={3} lg={4} md={6} xs={12}>
            <Widget>
              <div className="clearfix">
                <Row className="flex-nowrap">
                  <Col xs={3}>
                    <span className="widget-icon">
                      <i className="fi flaticon-diamond text-danger" />
                    </span>
                  </Col>
                  <Col xs={9}>
                    <h6 className="m-0">REVENUE INDICATOR</h6>
                    <p className="h2 m-0 fw-normal">$76,448,900</p>
                  </Col>
                </Row>
                <Row className="flex-nowrap">
                  <Col xs="6">
                    <h6 className="m-0">Last Month</h6>
                    <p className="value5">$93,541</p>
                  </Col>
                  <Col xs={6}>
                    <h6 className="m-0">Last Year</h6>
                    <p className="value5">$67,926,909</p>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Widget
              settings
              refresh
              close
            >
              <Map />
            </Widget>
          </Col>
          <Col lg={1} />

          <Col lg={3}>
            <Widget
              title={<h5> Map
                <span className="fw-semi-bold">&nbsp;Statistics</span></h5>} settings refresh close
            >
              <p>Status: <strong>Live</strong></p>
              <p>
                <span className="circle bg-default text-white"><i className="fa fa-map-marker" /></span> &nbsp;
                146 Countries, 2759 Cities
              </p>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Foreign Visits</h6>
                  <p className="description deemphasize mb-xs text-white">Some Cool Text</p>
                  <Progress color="primary" value="60" className="bg-subtle-blue progress-xs" />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small><AnimateNumber value={75} />%</small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Local Visits</h6>
                  <p className="description deemphasize mb-xs text-white">P. to C. Conversion</p>
                  <Progress color="danger" value="39" className="bg-subtle-blue progress-xs" />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small><AnimateNumber value={84} />%</small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Sound Frequencies</h6>
                  <p className="description deemphasize mb-xs text-white">Average Bitrate</p>
                  <Progress color="success" value="80" className="bg-subtle-blue progress-xs" />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small><AnimateNumber value={92} />%</small>
                  </span>
                </div>
              </div>
              <h6 className="fw-semi-bold mt">Map Distributions</h6>
              <p>Tracking: <strong>Active</strong></p>
              <p>
                <span className="circle bg-default text-white"><i className="fa fa-cog" /></span>
                &nbsp; 391 elements installed, 84 sets
              </p>
              <div className="input-group mt">
                <input type="text" className="form-control bg-custom-dark border-0" placeholder="Search Map" />
                <span className="input-group-btn">
                  <button type="submit" className={`btn btn-subtle-blue ${s.searchBtn}`}>
                    <i className="fa fa-search text-light" />
                  </button>
                </span>
              </div>

            </Widget>
          </Col>

        </Row>

        <Row>
          <Col lg={12} xs={12}>
            <MainChart data={mainChart} isReceiving={isReceiving} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} xl={3} md={6}>
            <div className="pb-xlg h-100">
              <Widget
                className="mb-0 h-100"
                close
                bodyClass="mt-lg"
                fetchingData={isReceiving}
                title={<h5>Condom Distribution</h5>}
              >
                <div className="d-flex justify-content-between align-items-center mb h3">
                  <h2 style={{ fontSize: '2.1rem' }}>{visits.count}</h2>
                  <i className="la la-arrow-right text-success rotate-315" />
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                  <div className={cx('mt')}>
                    <h6>+{visits.target}</h6>
                    <p className="text-muted mb-0 me-2">
                      <small>Targeted</small>
                    </p>
                  </div>
                  <div className={cx('mt')}>
                    <h6>{visits.success_pct}%</h6>
                    <p className="text-muted mb-0">
                      <small>%ge Reach</small>
                    </p>
                  </div>
                  <div className={cx('mt')}>
                    <h6>{visits.rate_pct}%</h6>
                    <p className="text-muted mb-0 me-2">
                      <small>Use Rate</small>
                    </p>
                  </div>
                </div>
              </Widget>
            </div>
          </Col>
          <Col xs={12} xl={3} md={6}>
            <div className="pb-xlg h-100">
              <Widget
                bodyClass="mt"
                close
                className="mb-0 h-100"
                fetchingData={isReceiving}
                title={<h5>Infection Breakdown</h5>}
              >
                <HighchartsReact highcharts={Highcharts} options={this.donut()} />
              </Widget>
            </div>
          </Col>
          <Col xs={12} xl={3} md={6}>
            <div className="pb-xlg h-100">
              <Widget
                bodyClass="mt"
                close
                className="mb-0 h-100"
                fetchingData={isReceiving}
                title={<h5>Perfomance</h5>}
              >
                <p className="text-muted d-flex flex-wrap">
                  <small className="me-3 d-flex align-items-center">
                    <span className="circle bg-success text-success me-1" style={{ fontSize: '4px' }}>.</span>
                    This Period
                  </small>
                  <small className="me-3 d-flex align-items-center">
                    <span className="circle bg-primary text-primary me-1" style={{ fontSize: '4px' }}>.</span>
                    Last Period
                  </small>
                </p>
                <h6 className="fs-sm text-muted">Testing</h6>
                <Progress color="success" className="progress-sm" style={{ height: '10px', marginBottom: '5px' }}
                  value={performance.sdk?.this_period_pct} />
                <Progress color="primary" className="progress-sm" style={{ height: '10px' }}
                  value={performance.sdk?.last_period_pct} />
                <h6 className="mt fs-sm text-muted">Condom Distribution</h6>
                <Progress color="success" className="progress-sm" style={{ height: '10px', marginBottom: '5px' }}
                  value={performance.integration?.this_period_pct} />
                <Progress color="primary" className="progress-sm" style={{ height: '10px' }}
                  value={performance.integration?.last_period_pct} />
              </Widget>
            </div>
          </Col>
          <Col xs={12} xl={3} md={6}>
            <div className="pb-xlg h-100">
              <Widget
                bodyClass="mt-lg"
                close
                className="mb-0 h-100"
                fetchingData={isReceiving}
                title={<h5>Service Overview</h5>}
              >
                <div className="d-flex justify-content-between mb-sm">
                  <p><small>{server[1]?.pct}% <span style={{ color: '#a3aeb7' }}>/</span> {server[1]?.temp}°С <span style={{ color: '#a3aeb7' }}>/</span> {server[1]?.frequency} Ghz</small></p>
                  <div className={s.sparklineWrapper}>
                    <Trend
                      gradient={['#db2a34']}
                      height={30}
                      strokeWidth={6}
                      smooth
                      data={this.getRandomData()}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-sm">
                  <p><small>{server[2]?.pct}% <span style={{ color: '#a3aeb7' }}>/</span> {server[2]?.temp}°С <span style={{ color: '#a3aeb7' }}>/</span> {server[2]?.frequency} Ghz</small></p>
                  <div className={s.sparklineWrapper}>
                    <Trend
                      gradient={['#2d8515']}
                      height={30}
                      strokeWidth={6}
                      smooth
                      data={this.getRandomData()}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-sm">
                  <p><small>{server[2]?.pct}% <span style={{ color: '#a3aeb7' }}>/</span> {server[2]?.temp}°С <span style={{ color: '#a3aeb7' }}>/</span> {server[2]?.frequency} Ghz</small></p>
                  <div className={s.sparklineWrapper}>
                    <Trend
                      gradient={['#2477ff']}
                      height={30}
                      strokeWidth={6}
                      smooth
                      data={this.getRandomData()}
                    />
                  </div>
                </div>
              </Widget>
            </div>
          </Col>

          <Col xs={12} className="mb-lg">
            <Widget
              className="pb-0"
              bodyClass={`mt p-0`}
              title={<h4> Support <strong>Requests</strong></h4>}
              close settings
            >
              <TableContainer data={mock.table} />
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget
              title={<h6><span className="badge bg-danger">News</span>Messages</h6>}
              refresh close
            >
              <div className="widget-body undo_padding">
                <div className="list-group list-group-lg">
                  <button className="list-group-item text-start">
                    <span className="thumb-sm float-start me-3">
                      <img className="rounded-circle" src={peopleA2} alt="..." />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Chris Gray</h6>
                      <p className="help-block text-ellipsis m-0">Hey! What&apos;s up? Our tests indicators are not going up</p>
                    </div>
                  </button>
                  <button className="list-group-item text-start">
                    <span className="thumb-sm float-start me-3">
                      <img className="rounded-circle" src={peopleA4} alt="..." />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Jamey Brownlow</h6>
                      <p className="help-block text-ellipsis m-0">Our Budget is too high. Seems they agreed to
                        proceed</p>
                    </div>
                  </button>
                  <button className="list-group-item text-start">
                    <span className="thumb-sm float-start me-3">
                      <img className="rounded-circle" src={peopleA1} alt="..." />
                      <i className="status status-bottom bg-primary" />
                    </span>
                    <div>
                      <h6 className="m-0">Livia Walsh</h6>
                      <p className="help-block text-ellipsis m-0">Check my latest Data burst please!</p>
                    </div>
                  </button>

                </div>
              </div>
              <footer className="bg-widget-transparent mt">
                <input type="search" className="form-control form-control-sm bg-custom-dark border-0" placeholder="Search" />
              </footer>

            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={<h6> Budget <span className="fw-semi-bold">Stats</span></h6>} close
            >

              <div className="widget-body">
                <h3>$7M Targeted for 2024</h3>
                <p className="fs-mini text-muted mb mt-sm">
                  2023 Revenue Up to <span className="fw-semi-bold">$87M</span> annual earnings <span className="fw-semi-bold">96% Target</span> reached.
                </p>
              </div>
              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size="sm">
                  <thead>
                    <tr>
                      <th>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox210" type="checkbox" onClick={() => this.checkTable(0)}
                            checked={this.state.checkedArr[0]}
                            readOnly
                          />{' '}
                          <Label for="checkbox210" />
                        </div>
                      </th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox212" type="checkbox" onClick={() => this.checkTable(1)}
                            checked={this.state.checkedArr[1]}
                            readOnly
                          />{' '}
                          <Label for="checkbox212" />
                        </div>
                      </td>
                      <td className={"text-white"}>Donor fund</td>
                      <td className="text-align-right fw-semi-bold text-white">$36.1M</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox214" onClick={() => this.checkTable(2)} type="checkbox"
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{' '}
                          <Label for="checkbox214" />
                        </div>
                      </td>
                      <td>Direct Outreach Rev</td>
                      <td className="text-align-right fw-semi-bold">$5.1M</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="widget-body mt-xlg chart-overflow-bottom" style={{ height: '100px' }}>
                <Rickshaw height={100} />
              </div>

            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget title={<h6>Upcoming Events</h6>} settings close bodyClass={"pt-2 px-0 py-0"}>
              <Calendar />
              <div className="list-group fs-mini">
                <button className="list-group-item text-ellipsis">
                  <span className="badge rounded-pill bg-primary float-end">6:45</span>
                  Revenue Drive Call
                </button>
                <button className="list-group-item text-ellipsis">
                  <span className="badge rounded-pill bg-success float-end">9:41</span>
                  Data modelin Round up
                </button>
              </div>
            </Widget>
          </Col>

        </Row>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visits: state.analytics.visits,
    isReceiving: state.analytics.isReceiving,
    performance: state.analytics.performance,
    revenue: state.analytics.revenue,
    server: state.analytics.server,
    mainChart: state.analytics.mainChart,
  }
}

export default connect(mapStateToProps)(Dashboard);



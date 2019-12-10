import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import {
  Wrap,
  Header,
}
  from './styled';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: 'false',
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.fetchChart = this.fetchChart.bind(this);
  }

  componentDidMount() {
    this.fetchChart();
  }

  onLoading(value) {
    this.setState({
      isLoading: value,
    });
  }

  onSuccess() {
    this.onLoading(false);
  }

  onError(err) {
    try {
      const { status } = err.response;
      switch (status) {
        case 404:
          break;

        case 401:
          break;

        default: break;
      }
    } catch (e) {
      // Do something
    } finally {
      this.onLoading(false);
    }
  }

  fetchChart() {
    this.onLoading(true);
    this.props.fetchChart(this.onSuccess, this.onError);
  }

  renderChartTemperature() {
    const { chart } = this.props;
    return (
      <LineChart
        width={1500}
        height={400}
        data={chart.index}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis unit="h" dataKey="hour" />
        <YAxis
          unit=" độ C"
          tickCount={8}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="DHT-22" stroke="#ffc107" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="GY-68" stroke="#28a745" />
      </LineChart>
    );
  }

  renderChartHumidity() {
    const { chart } = this.props;
    return (
      <LineChart
        width={1500}
        height={400}
        data={chart.index}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis unit="h" dataKey="hour" />
        <YAxis
          domain={100000}
          unit="%"
          tickCount={8}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="h" stroke="#007bff" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }

  renderChartBarometric() {
    const { chart } = this.props;
    return (
      <LineChart
        width={1500}
        height={400}
        data={chart.index}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis unit="h" dataKey="hour" />
        <YAxis
          domain={10000}
          unit="pa"
          dataKey="p"
          tickCount={8}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="p" stroke="#17a2b8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }

  render() {
    const { chart } = this.props;
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <>
        <Header color='#ffc107'>Biểu đồ nhiệt độ trong ngày: {chart.date}</Header>
        {this.renderChartTemperature()};
        <Header color='#007bff'>Biểu đồ độ ẩm trong ngày: {chart.date}</Header>
        {this.renderChartHumidity()};
        <Header color='#17a2b8'>Biểu đồ khí áp trong ngày: {chart.date}</Header>
        {this.renderChartBarometric()};
      </>
    );
  }
}

Chart.propTypes = {
  chart: PropTypes.any.isRequired,
  fetchChart: PropTypes.func.isRequired,
};

export default Chart;

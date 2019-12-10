import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as homeActions from '../actions/home';
import Index from '../components/home/Index';
import Chart from '../components/home/Chair';

class Home extends PureComponent {
  render() {
    const { data, actions } = this.props;
    console.log('index home', data);
    return (
      <>
        <Index fetchIndex={actions.actionHome.fetchIndex} index={data.index} />
        <Chart fetchChart={actions.actionHome.fetchChart} chart={data.chart} />
      </>
    );
  }
}

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    data: {
      index: state.indexValue,
      chart: state.chart,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      actionHome: bindActionCreators(homeActions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

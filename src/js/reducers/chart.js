import { HOME_SET_CHART } from '../constants/home';

const initState = [];

const chart = (state = initState, action = {}) => {
  switch (action.type) {
    case HOME_SET_CHART: {
      console.log("reducers", action.chart);
      return action.chart;
    }

    default:
      return state;
  }
};

export default chart;

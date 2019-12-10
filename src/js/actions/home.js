import {
  HOME_FETCH_INDEX,
  HOME_SET_INDEX,
  HOME_FETCH_CHART,
  HOME_SET_CHART,
} from '../constants/home';

export const fetchIndex = (onSuccess, onError) => ({
  type: HOME_FETCH_INDEX,
  onSuccess,
  onError,
});

export const setIndex = (index) => ({
  type: HOME_SET_INDEX,
  index,
});

export const fetchChart = (onSuccess, onError) => ({
  type: HOME_FETCH_CHART,
  onSuccess,
  onError,
});

export const setChart = (chart) => ({
  type: HOME_SET_CHART,
  chart,
});

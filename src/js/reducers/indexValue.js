import { HOME_SET_INDEX } from '../constants/home';

const initState = [];

const index = (state = initState, action = {}) => {
  switch (action.type) {
    case HOME_SET_INDEX: {
      console.log("reducers",action.index);
      return action.index;
    }

    default:
      return state;
  }
};

export default index;

import { TOGGLE_SHOW_ALL } from '../actions';

const showAll = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_ALL:
      return !state;
    default:
      return state;
  }
};

export default showAll;

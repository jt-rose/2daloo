import { TOGGLE_IMPORTANT } from '../actions';

const filterImportant = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_IMPORTANT:
      return !state;
    default:
      return state;
  }
};

export default filterImportant;

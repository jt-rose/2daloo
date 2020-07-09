import { TOGGLE_TAG_COLORS } from '../actions';

const useTagColors = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_TAG_COLORS:
      return !state;
    default:
      return state;
  }
};

export default useTagColors;

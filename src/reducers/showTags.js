import { TOGGLE_TAG_VISIBILITY } from '../actions';

const showTags = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_TAG_VISIBILITY:
      return !state;
    default:
      return state;
  }
};

export default showTags;

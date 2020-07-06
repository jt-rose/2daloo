import {
  SORT_BY_NEWEST,
  SORT_BY_OLDEST,
  SORT_BY_ABC,
  SORT_BY_TAGS
} from '../actions';

const sortOptions = (state = SORT_BY_NEWEST, action) => {
  switch (action.type) {
    case SORT_BY_NEWEST:
      return SORT_BY_NEWEST;
    case SORT_BY_OLDEST:
      return SORT_BY_OLDEST;
    case SORT_BY_ABC:
      return SORT_BY_ABC;
    case SORT_BY_TAGS:
      return SORT_BY_TAGS;
    default:
      return state;
  }
};

export default sortOptions;

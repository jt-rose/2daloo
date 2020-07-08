import manageTasks from './manageTasks';
import manageTrash from './manageTrash';
import manageTags from './manageTags';
import filterImportant from './filterImportant';
import filterTags from './filterTags';
import sortOptions from './sortOptions';
import showTags from './showTags';
import loggedIn from './manageLogin';
import showAll from './showAll';
import useTagColors from './useTagColors';

import { combineReducers } from 'redux';

export default combineReducers({
  tasks: manageTasks,
  trash: manageTrash,
  tags: manageTags,
  filterImportant,
  filterTags,
  sortOptions,
  showTags,
  loggedIn,
  showAll,
  useTagColors
});

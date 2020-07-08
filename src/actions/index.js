// Action Types
export const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
export const SORT_BY_OLDEST = 'SORT_BY_OLDEST';
export const SORT_BY_ABC = 'SORT_BY_ABC';
export const SORT_BY_TAGS = 'SORT_BY_TAGS';

export const UPDATE_TASK = 'UPDATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const UPDATE_TRASH = 'UPDATE_TRASH';
export const REMOVE_TRASH = 'REMOVE_TRASH';

export const CREATE_TAG = 'CREATE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';

export const UPDATE_TAG_FILTER = 'UPDATE_TAG_FILTER';

export const TOGGLE_TAG_VISIBILITY = 'TOGGLE_TAG_VISIBILITY';

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

// Action Creators

const actionTypeObj = (typeDesc) => ({ type: typeDesc });
export const sortByNewest = actionTypeObj(SORT_BY_NEWEST);
export const sortByOldest = actionTypeObj(SORT_BY_OLDEST);
export const sortByABC = actionTypeObj(SORT_BY_ABC);
export const sortByTags = actionTypeObj(SORT_BY_TAGS);

export const toggleImportant = actionTypeObj(TOGGLE_IMPORTANT);
export const toggleTagVisibility = actionTypeObj(
  TOGGLE_TAG_VISIBILITY
);
export const toggleLogin = actionTypeObj(TOGGLE_LOGIN);

export const createSlug = (title) =>
  title.trim().toLowerCase().replace(/,/g, '').replace(/ /g, '-');

export const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// creates task object which is then passed to updateTask dispatch
export const createTask = (title, content, important, tags) => ({
  title,
  content,
  important,
  tags,
  created: new Date(),
  slug: createSlug(title)
});

// apply visibility filters to list of tasks
const applyImportantFilter = (tasks, onlyShowImportant) => {
  if (onlyShowImportant) {
    return tasks.filter((task) => task.important);
  } else {
    return tasks;
  }
};

const applyTagFilter = (tasks, filteredTags) => {
  if (filteredTags.length === 0) {
    return tasks;
  } else {
    return tasks.filter((task) =>
      task.tags.find((tagName) => filteredTags.includes(tagName))
    );
  }
};

export const filterVisibility = (
  tasks,
  onlyImportant,
  filteredTags
) => {
  const filteredForImportant = applyImportantFilter(
    tasks,
    onlyImportant
  );
  const filteredForTags = applyTagFilter(
    filteredForImportant,
    filteredTags
  );
  return filteredForTags;
};

export const updateTask = (newTask, oldSlug = null) => ({
  type: UPDATE_TASK,
  task: newTask,
  oldSlug
});

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  task
});

export const updateTrash = (task) => ({
  type: UPDATE_TRASH,
  task
});

export const removeTrash = (task) => ({
  type: REMOVE_TRASH,
  task
});

export function moveToTrash(task) {
  return function (dispatch) {
    dispatch(removeTask(task));
    dispatch(updateTrash(task));
  };
}

export function restoreTrash(task) {
  return function (dispatch) {
    dispatch(removeTrash(task));
    dispatch(updateTask(task));
  };
}

export const createTag = (tag) => ({
  type: CREATE_TAG,
  tag
});

export const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tag
});

export const updateTagFilter = (tagName) => ({
  type: UPDATE_TAG_FILTER,
  tagName
});

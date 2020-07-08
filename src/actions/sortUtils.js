import {
  SORT_BY_NEWEST,
  SORT_BY_OLDEST,
  SORT_BY_ABC,
  SORT_BY_TAGS
} from './index';
import { sort as Rsort } from 'ramda';

// The sorting function below is modeled on redux and takes the tasks or trash items and sorts them according to the sortAction provided
// this acts as an intermediary between the sortOptions, tasks, and trash state
const applySorting = (tasks, tags, sortAction) => {
  switch (sortAction) {
    case SORT_BY_NEWEST:
      return Rsort((a, b) => b.created - a.created, tasks);
    case SORT_BY_OLDEST:
      return Rsort((a, b) => a.created - b.created, tasks);
    case SORT_BY_ABC:
      return Rsort((a, b) => a.title.localeCompare(b.title), tasks);
    case SORT_BY_TAGS:
      const tagNames = tags.map((tag) => tag.name);
      const tasksWithTags = tasks.filter(
        (task) => task.tags.length > 0
      );
      const tasksWithoutTags = tasks.filter(
        (task) => task.tags.length === 0
      );
      const sortedTasks = tagNames.flatMap((tagName) =>
        tasksWithTags.filter((task) => task.tags[0].name === tagName)
      );

      return [...sortedTasks, ...tasksWithoutTags];
    default:
      return tasks;
  }
};

export default applySorting;

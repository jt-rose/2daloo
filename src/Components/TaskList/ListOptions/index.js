import React from 'react';

import { TaskSortButtons, TrashSortButtons } from './SortAndFilter';
import TagOptions from './TagOptions';
import ShowAllButton from './ShowAllButton';

import './index.css';

const listOptionsTemplate = (SortButtons) => () => (
  <div className="list-options-container">
    <ShowAllButton />
    <TagOptions />
    <SortButtons />
  </div>
);

export const TaskOptions = listOptionsTemplate(TaskSortButtons);
export const TrashOptions = listOptionsTemplate(TrashSortButtons);

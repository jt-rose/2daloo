import React from 'react';
import { List } from 'semantic-ui-react';

import {
  TaskSortButtons,
  TrashSortButtons
} from '../SortAndFilterButtons/index';
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

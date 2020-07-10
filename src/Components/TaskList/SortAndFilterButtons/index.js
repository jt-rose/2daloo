// show abc sort, date sort, important filter, category filter
import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';

import '../ListOptions/index.css';

import {
  sortByNewest,
  sortByOldest,
  sortByABC,
  sortByTags,
  updateTagFilter,
  toggleImportant
} from '../../../actions';

const SortAndFilterButtons = (props) => (
  <Dropdown
    className="list-options-item"
    pointing
    text="sort and filter"
  >
    <Dropdown.Menu>
      <Dropdown.Header>Sort</Dropdown.Header>
      <Dropdown.Item
        icon="sort alphabet down"
        text="A to Z"
        onClick={props.sortByABC}
      />
      <Dropdown.Item
        icon="sort numeric down"
        text="Newest"
        onClick={props.sortByNewest}
      />
      <Dropdown.Item
        icon="sort numeric up"
        text="Oldest"
        onClick={props.sortByOldest}
      />
      <Dropdown.Item
        icon="tags"
        text="Tag groups"
        onClick={props.sortByTags}
      />
      {props.tags.length > 0 && (
        <Dropdown.Menu scrolling>
          <Dropdown.Header>Filter Tags</Dropdown.Header>
          {props.tags.map((tag) => (
            <Dropdown.Item
              key={tag.name}
              value={tag.name}
              text={tag.name}
              label={{
                color: tag.color,
                empty: true,
                circular: true
              }}
              active={props.filterTags.includes(tag.name)}
              onClick={() => props.updateTagFilter(tag.name)}
            />
          ))}
        </Dropdown.Menu>
      )}

      <Dropdown.Divider />
      <Dropdown.Header>Important</Dropdown.Header>
      <Dropdown.Item onClick={props.toggleImportant}>
        {
          <Icon
            name="exclamation"
            inverted
            color={props.filterImportant ? 'black' : 'red'}
          />
        }
        {props.filterImportant ? 'unfocus' : 'focus'}
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const mapStateToProps = ({ tags, filterImportant, filterTags }) => ({
  tags,
  filterImportant,
  filterTags
});
const mapDispatchToProps = (dispatch) => ({
  sortByABC: () => dispatch(sortByABC),
  sortByNewest: () => dispatch(sortByNewest),
  sortByOldest: () => dispatch(sortByOldest),
  sortByTags: () => dispatch(sortByTags),
  toggleImportant: () => dispatch(toggleImportant),
  updateTagFilter: (tagName) => dispatch(updateTagFilter(tagName))
});

export const TaskSortButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortAndFilterButtons);
export const TrashSortButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortAndFilterButtons);

// show abc sort, date sort, important filter, category filter
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Checkbox } from 'semantic-ui-react';

import {
  sortByNewest,
  sortByOldest,
  sortByABC,
  sortByTags,
  updateTagFilter,
  toggleImportant
} from '../../../actions';

class SortAndFilterButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Dropdown
        pointing
        text="sort and filter"
        //open={this.state.isOpen}
        //onClick={() => console.log("clicked!")}
      >
        <Dropdown.Menu>
          <Dropdown.Header>Sort</Dropdown.Header>
          <Dropdown.Item
            icon="sort alphabet down"
            text="A to Z"
            onClick={this.props.sortByABC}
          />
          <Dropdown.Item
            icon="sort numeric down"
            text="Newest"
            onClick={this.props.sortByNewest}
          />
          <Dropdown.Item
            icon="sort numeric up"
            text="Oldest"
            onClick={this.props.sortByOldest}
          />
          <Dropdown.Item
            icon="tags"
            text="Tag groups"
            onClick={this.props.sortByTags}
          />
          {this.props.tags.length > 0 && (
            <Dropdown.Menu scrolling>
              <Dropdown.Header>Filter Tags</Dropdown.Header>
              {this.props.tags.map((tag) => (
                <Dropdown.Item
                  key={tag.name}
                  value={tag.name}
                  text={tag.name}
                  label={{
                    color: tag.color,
                    empty: true,
                    circular: true
                  }}
                  active={this.props.filterTags.includes(tag.name)}
                  //disabled={!this.props.filterTags.includes(tag.name)}
                  onClick={() => this.props.updateTagFilter(tag.name)}
                />
              ))}
            </Dropdown.Menu>
          )}

          <Dropdown.Divider />
          <Dropdown.Header>Important</Dropdown.Header>
          <Dropdown.Item onClick={this.props.toggleImportant}>
            {<Checkbox slider checked={this.props.filterImportant} />}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

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

import React from 'react';
import { connect } from 'react-redux';
import { List, Icon } from 'semantic-ui-react';
import {
  restoreTrash,
  removeTrash,
  toggleTagVisibility
} from '../../actions';

const TrashButtonsUC = (props) => (
  <List key="trash-button-list">
    <Icon
      link
      key="trash-buttons-undo"
      name="undo"
      circular
      color="orange"
      inverted
      onClick={() => props.restoreTrash(props.task)}
    />
    <Icon
      link
      key="trash-buttons-tag"
      name="tag"
      circular
      color={props.showTags ? 'teal' : 'grey'}
      inverted
      onClick={props.toggleTagVisibility}
    />
    <Icon
      link
      key="trah-buttons-eraser"
      name="eraser"
      circular
      color="red"
      inverted
      onClick={() => props.removeTrash(props.task)}
    />
  </List>
);

const mapStateToProps = ({ showTags }) => ({ showTags });
const mapDispatchToProps = (dispatch) => ({
  restoreTrash: (task) => dispatch(restoreTrash(task)),
  removeTrash: (task) => dispatch(removeTrash(task)),
  toggleTagVisibility: () => dispatch(toggleTagVisibility)
});

const TrashButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrashButtonsUC);

export default TrashButtons;

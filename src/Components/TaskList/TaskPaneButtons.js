import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Icon, List } from 'semantic-ui-react';
import { moveToTrash, toggleTagVisibility } from '../../actions';

const TaskButtonsUC = (props) => (
  <List>
    <NavLink to={`/edit/${props.task.slug}`}>
      <Icon
        link
        name="edit outline"
        circular
        color="orange"
        inverted
      />
    </NavLink>
    <Icon
      link
      name="tag"
      circular
      color={props.showTags ? 'teal' : 'grey'}
      inverted
      onClick={props.toggleTagVisibility}
    />
    <Icon
      link
      name="delete"
      circular
      color="red"
      inverted
      onClick={() => props.moveToTrash(props.task)}
    />
  </List>
);

const mapStateToProps = ({ showTags }) => ({ showTags });
const mapDispatchToProps = (dispatch) => ({
  moveToTrash: (task) => dispatch(moveToTrash(task)),
  toggleTagVisibility: () => dispatch(toggleTagVisibility)
});

const TaskButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskButtonsUC);

export default TaskButtons;

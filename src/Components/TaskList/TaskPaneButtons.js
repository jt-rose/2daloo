import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon, List } from "semantic-ui-react";
import { moveToTrash } from "../../actions";

const TaskButtonsUC = (props) => (
    <List>
        <NavLink to={`/edit/${props.task.slug}`}>
            <Icon link name="edit outline" circular color="orange" inverted />
        </NavLink>
        <Icon link name="tag" circular color="teal" inverted />
        <Icon link name="delete" circular color="red" inverted 
            onClick={() => props.moveToTrash(props.task)}
        />
    </List>
);

const mapDispatchToProps = dispatch => ({
    moveToTrash: task => dispatch(moveToTrash(task))
});

const TaskButtons = connect(null, mapDispatchToProps)(TaskButtonsUC);

export default TaskButtons;
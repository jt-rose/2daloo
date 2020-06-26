import React from "react";
import { connect } from "react-redux";
import { List, Icon } from "semantic-ui-react";
import {
    restoreTrash,
    removeTrash
} from "../../actions";

const TrashButtonsUC = (props) => (
    <List>
        <Icon link name="undo" circular color="orange" inverted 
        onClick={() => props.restoreTrash(props.task)}/>
        <Icon link name="tag" circular color="teal" inverted />
        <Icon link name="eraser" circular color="red" inverted 
            onClick={() => props.removeTrash(props.task)}
        />
    </List>
);


const trashButtonsSettings = {
    firstIcon: "undo",
    firstName: "Restore",
    lastIcon: "eraser",
    lastName: "Banish"
}
/*
const trashButtonsTemplate = (buttonTemplate) =>(props)=> (
    <Button.Group compact>
        <Button onClick={() => props.restoreTrash(props.task)}>
            <Icon name={buttonTemplate.firstIcon} />
            {buttonTemplate.firstName}
        </Button>
        <Button>
            <Icon name="tag" />
            Tags
        </Button>
        <Button onClick={() => props.removeTrash(props.task)}>
            <Icon name={buttonTemplate.lastIcon} />
            {buttonTemplate.lastName}
        </Button>
    </Button.Group>
)*/

//const TrashButtonsUC = trashButtonsTemplate(trashButtonsSettings);

const mapDispatchToProps = dispatch => ({
    restoreTrash: task => dispatch(restoreTrash(task)),
    removeTrash: task => dispatch(removeTrash(task))
});

const TrashButtons = connect(null, mapDispatchToProps)(TrashButtonsUC);

export default TrashButtons;
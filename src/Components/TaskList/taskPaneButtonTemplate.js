import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { 
    updateTask,
    restoreTrash,
    moveToTrash, 
    removeTrash
} from "../../actions";

const redirectToEdit = (props) => (
    <Redirect to={`/edit/`} />
)

const taskButtons = {
    firstIcon: "edit outline",
    firstName: "Edit",
    firstDispatch: updateTask,
    lastIcon: "delete",
    lastName: "Delete",
    lastDispatch: moveToTrash
}

const trashButtons = {
    firstIcon: "undo",
    firstName: "Restore",
    firstDispatch: restoreTrash,
    lastIcon: "eraser",
    lastName: "Banish",
    lastDispatch: removeTrash
}

const taskPaneButtonTemplate = (buttonTemplate) => (props)=> (
    <Button.Group>
        <Button onClick={() => buttonTemplate.firstDispatch()}><Icon name={buttonTemplate.firstIcon} />
            {buttonTemplate.firstName}
        </Button>
        <Button><Icon name="tag" />Tags</Button>
        <Button onClick={() => buttonTemplate.lastDispatch(props.task)}><Icon name={buttonTemplate.lastIcon} />
            {buttonTemplate.lastName}
        </Button>
    </Button.Group>
)

// add functionality later, perhaps in HOC

const TaskPaneButtons = taskPaneButtonTemplate(taskButtons)
const TrashPaneButtons = taskPaneButtonTemplate(trashButtons)

export {
    TaskPaneButtons,
    TrashPaneButtons
};
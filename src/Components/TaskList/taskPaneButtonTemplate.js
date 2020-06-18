import React from "react";
import { Button, Icon } from "semantic-ui-react";

const taskButtons = {
    firstIcon: "edit outline",
    firstName: "Edit",
    lastIcon: "delete",
    lastName: "Delete"
}

const trashButtons = {
    firstIcon: "undo",
    firstName: "Restore",
    lastIcon: "eraser",
    lastName: "Banish"
}

const taskPaneButtonTemplate = (buttonTemplate) => (props)=> (
    <Button.Group>
        <Button><Icon name={buttonTemplate.firstIcon} />
            {buttonTemplate.firstName}
        </Button>
        <Button><Icon name="tag" />Tags</Button>
        <Button><Icon name={buttonTemplate.lastIcon} />
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
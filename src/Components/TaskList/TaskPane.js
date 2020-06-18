import React from "react";
import { Button, Icon } from "semantic-ui-react";

const TaskPane = ({paneContent}) => (
    <Button.Group>
        <Button><Icon name="edit outline" />Edit</Button>
        <Button><Icon name="tag" />Tags</Button>
        <Button><Icon name="delete" />Delete</Button>
    </Button.Group>
)

export default TaskPane;
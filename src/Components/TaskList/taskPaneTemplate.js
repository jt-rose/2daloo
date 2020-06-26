import React from "react";

//import { TaskPaneButtons, TrashPaneButtons} from "./taskPaneButtonTemplate";
import TaskPaneButtons from "./TaskPaneButtons";
import TrashPaneButtons from "./TrashPaneButtons";

import { formatDate } from "../../actions";

import { Grid, Header } from "semantic-ui-react";



const taskPaneTemplate = (ButtonType) => (props) => (
    <article className="task-pane">
        <Grid textAlign="center">
            <Grid.Row >
                <Grid.Column floated="left" width={5}>
                <Header as="h3">{formatDate(props.task.created)}</Header>
                </Grid.Column>
            <Grid.Column floated="right" width={5}>
            <ButtonType task={props.task} className="task-buttons"/>
            
            </Grid.Column>
            
            </Grid.Row>
            <Grid.Row textAlign="center">
            <Header as="h3">{props.task.content}</Header>
            </Grid.Row>
        </Grid>
</article>
) // refactor with quill delta later

const TaskPane = taskPaneTemplate(TaskPaneButtons);
const TrashPane = taskPaneTemplate(TrashPaneButtons);

export {
    TaskPane,
    TrashPane
}
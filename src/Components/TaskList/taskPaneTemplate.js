import React from "react";

import { TaskPaneButtons, TrashPaneButtons} from "./taskPaneButtonTemplate";

const taskPaneTemplate = (ButtonType) => (props) => (
    <article>
        {props.content}
        <ButtonType />
    </article>
) // refactor with quill delta later

const TaskPane = taskPaneTemplate(TaskPaneButtons);
const TrashPane = taskPaneTemplate(TrashPaneButtons);

export {
    TaskPane,
    TrashPane
}
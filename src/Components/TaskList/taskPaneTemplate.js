import React from 'react';
import { connect } from 'react-redux';

import TaskPaneButtons from './TaskPaneButtons';
import TrashPaneButtons from './TrashPaneButtons';

import { formatDate } from '../../actions';

import { Grid, Header, Label } from 'semantic-ui-react';

const taskPaneTemplate = (ButtonType) => (props) => (
  <article className="task-pane">
    <Grid textAlign="center" columns="equal" container>
      <Grid.Row>
        <Grid.Column floated="left">
          <Header as="h3">{formatDate(props.task.created)}</Header>
        </Grid.Column>
        <Grid.Column floated="right">
          <ButtonType task={props.task} className="task-buttons" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center">
        <Header as="h3">{props.task.content}</Header>
      </Grid.Row>
      {props.showTags && props.task.tags.length > 0 && (
        <Grid.Row>
          {props.task.tags.map((tag) => (
            <Grid.Column>
              <Label
                tag
                color={
                  props.tags.find((tagObj) => tagObj.name === tag)
                    .color
                }
              >
                {tag}
              </Label>
            </Grid.Column>
          ))}
        </Grid.Row>
      )}
    </Grid>
  </article>
);

const mapStateToProps = ({ tags, showTags }) => ({ tags, showTags });
const reduxConnect = connect(mapStateToProps, null);

const TaskPane = reduxConnect(taskPaneTemplate(TaskPaneButtons));
const TrashPane = reduxConnect(taskPaneTemplate(TrashPaneButtons));

export { TaskPane, TrashPane };

import React, { Component } from 'react';
import {
  Accordion,
  Header,
  Icon,
  Container,
  Grid
} from 'semantic-ui-react';
import { TaskPane, TrashPane } from './taskPaneTemplate';
import { connect } from 'react-redux';

import { filterVisibility } from '../../actions';
import applySorting from '../../actions/sortUtils';

import {
  TaskSortButtons,
  TrashSortButtons
} from './SortAndFilterButtons';

const taskType = {
  pageTitle: 'Remaining:',
  paneType: TaskPane,
  sortButtons: TaskSortButtons
};

const trashType = {
  pageTitle: 'Completed:',
  paneType: TrashPane,
  sortButtons: TrashSortButtons
};

const listTemplate = (listType) => {
  return class extends Component {
    state = { activeIndex: 0 };

    handleClick = (e, titleProps) => {
      const { index } = titleProps;
      const { activeIndex } = this.state;
      const newIndex = activeIndex === index ? -1 : index;

      this.setState({ activeIndex: newIndex });
    };

    render() {
      const {
        tasks,
        tags,
        filterImportant,
        filterTags,
        sortOptions
      } = this.props;
      const filteredTasks = filterVisibility(
        tasks,
        filterImportant,
        filterTags
      );
      const sortedTasks = applySorting(
        filteredTasks,
        tags,
        sortOptions
      );
      const panels = sortedTasks.map((task) => ({
        key: task.slug,
        title: task.title,
        important: task.important,
        content: {
          content: <listType.paneType task={task} />
        }
      }));

      const { activeIndex } = this.state;

      return (
        <main>
          <Container>
            <Grid container columns="equal">
              <Grid.Column>
                <Header textAlign="left" as="h1" color="blue">
                  {listType.pageTitle}
                </Header>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <listType.sortButtons />
              </Grid.Column>
            </Grid>

            {/*<Accordion defaultActiveIndex={0} styled={true} panels={panels} />*/}
            <Accordion styled inverted fluid>
              {panels.map((panel, i) => (
                <>
                  <Accordion.Title
                    style={{ backgroundColor: '#2185d0' }}
                    styled={true}
                    active={activeIndex === i}
                    index={i}
                    onClick={this.handleClick}
                  >
                    <Grid container columns="equal">
                      <Grid.Column textAlign="left">
                        <Icon name="dropdown" />
                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Header as="h2" inverted>
                          {panel.title}
                        </Header>
                      </Grid.Column>
                      <Grid.Column textAlign="right">
                        {panel.important && (
                          <Icon
                            name="exclamation"
                            circular
                            inverted
                            color="red"
                          />
                        )}
                      </Grid.Column>
                    </Grid>
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === i}>
                    {panel.content.content}
                  </Accordion.Content>
                </>
              ))}
            </Accordion>
          </Container>
        </main>
      );
    }
  };
};

const mapTasksState = ({
  tasks,
  tags,
  filterImportant,
  filterTags,
  sortOptions
}) => ({
  tasks,
  tags,
  filterImportant,
  filterTags,
  sortOptions
});
const mapTrashState = ({
  trash,
  tags,
  filterImportant,
  filterTags,
  sortOptions
}) => ({
  tasks: trash,
  tags,
  filterImportant,
  filterTags,
  sortOptions
});

export const TaskList = connect(
  mapTasksState,
  null
)(listTemplate(taskType));
export const TrashList = connect(
  mapTrashState,
  null
)(listTemplate(trashType));

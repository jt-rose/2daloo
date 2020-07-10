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
import './ListOptions/index.css';

import { filterVisibility, toggleShowAll } from '../../actions';
import applySorting from '../../actions/sortUtils';

import {
  TaskSortButtons,
  TrashSortButtons
} from './SortAndFilterButtons';

//
import { TaskOptions, TrashOptions } from './ListOptions';
//

const taskType = {
  pageTitle: 'Remaining:',
  paneType: TaskPane,
  listOptions: TaskOptions
};

const trashType = {
  pageTitle: 'Completed:',
  paneType: TrashPane,
  listOptions: TrashOptions
};

const semanticColors = {
  red: '#db2828',
  orange: '#f2711c',
  yellow: '#fbbd08',
  olive: '#b5cc18',
  green: '#21ba45',
  teal: '#00b5ad',
  blue: '#2185d0',
  violet: '#6435c9',
  purple: '#a333c8',
  pink: '#e03997',
  brown: '#a5673f',
  grey: '#767676',
  black: '#1b1c1d'
};

const listTemplate = (listType) => {
  return class extends Component {
    state = { activeIndex: 0 };

    handleClick = (e, titleProps) => {
      const { index } = titleProps;
      const { activeIndex } = this.state;
      const newIndex = activeIndex === index ? -1 : index;

      this.setState({ activeIndex: newIndex });
      if (this.props.showAll) {
        this.props.toggleShowAll();
      }
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
        tagColor:
          task.tags.length > 0
            ? semanticColors[task.tags[0].color]
            : semanticColors['blue'],
        content: {
          content: <listType.paneType task={task} />
        }
      }));

      const { activeIndex } = this.state;

      return (
        <main>
          <Container>
            <div className="accordion-header">
              {/*<Header textAlign="left" as="h1" color="blue">
                {listType.pageTitle}
            </Header>*/}
              <div>
                <h1
                  style={{
                    color: semanticColors['blue']
                  }}
                >
                  {listType.pageTitle}
                </h1>
              </div>
              <listType.listOptions />
            </div>

            <Accordion styled inverted fluid>
              {panels.map((panel, i) => (
                <div key={`panel-for-${panel.title}`}>
                  <Accordion.Title
                    style={{
                      backgroundColor: this.props.useTagColors
                        ? panel.tagColor
                        : semanticColors['blue']
                    }}
                    active={this.props.showAll || activeIndex === i}
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
                            color={
                              panel.tagColor ===
                                semanticColors['red'] &&
                              this.props.useTagColors
                                ? 'grey'
                                : 'red'
                            }
                          />
                        )}
                      </Grid.Column>
                    </Grid>
                  </Accordion.Title>
                  <Accordion.Content
                    active={this.props.showAll || activeIndex === i}
                  >
                    {panel.content.content}
                  </Accordion.Content>
                </div>
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
  sortOptions,
  showAll,
  useTagColors
}) => ({
  tasks,
  tags,
  filterImportant,
  filterTags,
  sortOptions,
  showAll,
  useTagColors
});
const mapTrashState = ({
  trash,
  tags,
  filterImportant,
  filterTags,
  sortOptions,
  showAll,
  useTagColors
}) => ({
  tasks: trash,
  tags,
  filterImportant,
  filterTags,
  sortOptions,
  showAll,
  useTagColors
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowAll: () => dispatch(toggleShowAll)
});

export const TaskList = connect(
  mapTasksState,
  mapDispatchToProps
)(listTemplate(taskType));
export const TrashList = connect(
  mapTrashState,
  mapDispatchToProps
)(listTemplate(trashType));

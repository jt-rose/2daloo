import React, { Component } from "react";
import { Accordion, Header, Icon, Container, Grid } from "semantic-ui-react";
import { TaskPane, TrashPane } from "./taskPaneTemplate";
import { connect } from "react-redux";

import { filterVisibility } from "../../actions";

import { TaskSortButtons, TrashSortButtons } from "./ListViewButtons/ListViewButtons";

const taskType = {
    pageTitle: "Remaining:",
    paneType: TaskPane,
    sortButtons: TaskSortButtons
}

const trashType = {
    pageTitle: "Completed:",
    paneType: TrashPane,
    sortButtons: TrashSortButtons
}
/*
const listTemplate = (listType) => (props) => {
  const panels = props.tasks.map( task => ({
    key: task.slug,
    title: task.title,
    content: {
      content: (
      <listType.paneType task={task} />
      )
    }
  }) );

  return (
    <main>
        <ListViewButtons />
        <Header as="h1">{listType.pageTitle}</ Header>
        <Accordion defaultActiveIndex={0} styled={true} panels={panels} />
        
    </main>
  )
};//add check for none
*/


const listTemplateFull = (listType) => {
  return class extends Component {
    state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

    render() {
      const { tasks, filterImportant, filterTags } = this.props;
      const panels = filterVisibility(tasks, filterImportant, filterTags)
        .map( task => ({
          key: task.slug,
          title: task.title,
          important: task.important,
          content: {
            content: (
              <listType.paneType task={task} />
            )
          }
        }) );

      const { activeIndex } = this.state
    
 
      return (
        <main>
          <Container>
            <Grid container columns="equal">
              <Grid.Column>
                <Header textAlign="left" as="h1" color="blue">{listType.pageTitle}</ Header>
              </Grid.Column>
              <Grid.Column textAlign="right">
              <listType.sortButtons/>
              </Grid.Column>
            </Grid>
        
        {/*<Accordion defaultActiveIndex={0} styled={true} panels={panels} />*/}
        <Accordion styled inverted fluid>
          {panels.map( (panel, i) => (
            <>
            <Accordion.Title
              style={{backgroundColor: "#2185d0"}}
              styled={true}
              active={activeIndex === i}
              index={i}
              onClick={this.handleClick}
            >
              <Grid container columns="equal">
                <Grid.Column textAlign="left">
                <Icon name='dropdown' />
                </Grid.Column>
                <Grid.Column width={10}>
                <Header as="h2" inverted>{panel.title}</Header>
                
                </Grid.Column>
                <Grid.Column textAlign="right">
                  {panel.important && 
                  <Icon name="exclamation" 
                  circular 
                  inverted 
                  color="red" 
                  />}
                </Grid.Column>
              </Grid>
                
            </Accordion.Title>
            <Accordion.Content
                active={activeIndex === i}
            >
                {panel.content.content}
            </Accordion.Content>
            </>
          ) )}
        </Accordion>
        </Container>
    </main>
      )
    }
  }
} 
  
    


const mapTasksState = ({tasks, filterImportant, filterTags}) => 
    ({tasks, filterImportant, filterTags});
const mapTrashState = ({trash, filterImportant, filterTags}) => 
    ({tasks: trash, filterImportant, filterTags});

export const TaskList = connect(mapTasksState, null)(listTemplateFull(taskType));
export const TrashList = connect(mapTrashState, null)(listTemplateFull(trashType));

/*
//const mapDispatchToProps
const mapStateToProps = ({tasks, trash}) => ({ tasks, trash });



/*
import { TaskPaneButtons, TrashPaneButtons } from "./TaskList/taskPaneButtonTemplate"
import AddTask from "./UpdateTask/updateTaskTemplate"

const panels = [
    {
      key: 'what-is-dog',
      title: {
          content: <h2>What is a dog?</h2>,
          icon: "plus circle"
      },
      content: [
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
        'guest in many households across the world.',
      ].join(' '),
    },
    {
      key: 'kinds-of-dogs',
      title: 'What kinds of dogs are there?',
      content: [
        'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
        'that they find to be compatible with their own lifestyle and desires from a companion.',
      ].join(' '),
    },
    {
      key: 'acquire-dog',
      title: 'How do you acquire a dog?',
      content: {
        content: (
          <div>
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog
              from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog who
              may not find one so readily.
            </p>
            <TaskPaneButtons />
            <TrashPaneButtons />
            <AddTask />
            
          </div>
        ),
      },
    },
  ]
  
  const AccordionExampleStandardShorthand = () => (
    <Accordion defaultActiveIndex={0} panels={panels} />
  )
  
  export default AccordionExampleStandardShorthand*/
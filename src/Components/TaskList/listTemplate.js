import React from "react";
import { Accordion } from "semantic-ui-react";
import { TaskPane, TrashPane } from "./taskPaneTemplate";
import { connect } from "react-redux";

const taskType = {
    pageTitle: "Remaining:",
    paneType: TaskPane
}

const trashType = {
    pageTitle: "Completed:",
    paneType: TrashPane
}

const listTemplate = (listType) => (props) => {
  const panels = props.tasks.map( task => ({
    key: task.slug,
    title: task.title,
    content: {
      content: (
      <listType.paneType content={task.content} />
      )
    }
  }) );

  return (
    <main>
        <h1>{listType.pageTitle}</h1>
        <Accordion defaultActiveIndex={0} styled={true} panels={panels} />
    </main>
  )
};//add check for none
    


const mapTasksState = ({tasks}) => ({tasks});
const mapTrashState = ({trash}) => ({tasks: trash});

export const TaskList = connect(mapTasksState, null)(listTemplate(taskType));
export const TrashList = connect(mapTrashState, null)(listTemplate(trashType));

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
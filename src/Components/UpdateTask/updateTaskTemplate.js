import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Container, Checkbox, Dropdown, Grid, TextArea, Menu } from "semantic-ui-react";
import "react-quill/dist/quill.snow.css";

import NotFound from "../NotFound";
import { updateTask, createTask } from "../../actions";

// empty post provided when creating new posts
const emptyPost = {
    slug: "",
    title: "",
    content: "",
    tags: [],
    important: false
}

const noPostFound = {
    slug: null,
    title: null,
    content: null,
    tags: null,
    important: null
}

// formats used to create differing Add/Edit forms from template
const addTaskFormat = {
    pageTitle: "Add New Task",
    buttonWording: "Add",
    newTask: emptyPost
}

const editTaskFormat = {
    pageTitle: "Edit Task",
    buttonWording: "Update",
    newTask: false
}

//test out isolated class
const updateTaskTemplate = (updateFormat) => {
    return class extends Component {
        constructor(props) {
            // use new task form, find current task to edit, or reject with wrong url
                
            super(props);
            this.task = updateFormat.newTask || 
                props.tasks.find(x => x.slug === props.match.params.editSlug) ||
                noPostFound;

            this.state = {
                title: this.task.title,
                content: this.task.content,
                categories: this.task.categories,
                important: this.task.important,
                redirect: false
            };
            this.updateTitle = this.updateTitle.bind(this);
            this.updateContent = this.updateContent.bind(this);
            //this.updateCategories = this.updateCategories.bind(this);
            this.updateImportant = this.updateImportant.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }
    
        updateTitle = e => this.setState({title: e.target.value});
        updateContent = e => this.setState({content: e.target.value});
        //updateCategories = () => this.setState({...})
        updateImportant = () => this.setState({important: !this.state.important})
        onSubmit = e => {
            e.preventDefault();
            const { title, content, important, categories } = this.state;
            const newTask = createTask(title, content, important, categories);
            this.props.updateTask(newTask, this.task.slug);
            this.setState({redirect: true});
        }
    
        render() {
            if (this.state.redirect) {
                return (<Redirect to="/" />);
            }
            if (this.state.title === null) {
                return <NotFound />
            }

            const tagOptions = this.props.tags
                .map(tag => ({
                    key: tag.name,
                    text: tag.name,
                    value: tag.name
                }) );

            return (
                <Container text textAlign="left">
                <Form 
                    onSubmit={this.onSubmit}
                    title={updateFormat.pageTitle}
                >
                    <Form.Field>
                        <label>Title</label>
                        <input 
                            onChange={this.updateTitle} 
                            value={this.state.title}
                            placeholder="..."
                        >
                        </input>
                    </Form.Field>

                    <Form.Field>
                        <label>Content</label>
                        <TextArea
                            placeholder="..."
                            rows={4}
                            value={this.state.content}
                            onChange={this.updateContent}
                            
                        />
                    </Form.Field>

                    <Grid >
                        <Grid.Column >
                        <Form.Field >
                        <Checkbox 
                            toggle
                            label="Important"
                            checked={this.state.important}
                            onChange={this.updateImportant}
                            />
                    </Form.Field>
                        </Grid.Column>
                        <Grid.Column >
                        <Form.Field>
                        <Dropdown 
                            placeholder="tags"
                            multiple
                            selection
                            options={tagOptions}
                        />
                    </Form.Field>
                        </Grid.Column>
                    
                    
                    </Grid>
                    
                    <Container textAlign="center">

                    <br />
                    <Form.Button compact size="massive" color="blue">{updateFormat.buttonWording}</Form.Button>
                
                    </Container>
                    </Form>
                </Container>
            )
        }
    };
}

// create Add and Edit forms, unconnected ("UC") to redux store
const AddTaskUC = updateTaskTemplate(addTaskFormat);
const EditTaskUC = updateTaskTemplate(editTaskFormat);

// map out redux connections
const mapStateToProps = ({ tasks, tags }) => ({ tasks, tags });
const mapDispatchToProps = dispatch => ({
    updateTask: (newTask, oldSlug) => dispatch(updateTask(newTask, oldSlug))
});
const reduxConnect = connect(mapStateToProps, mapDispatchToProps);

// export connected Add/ Edit forms
export const AddTask = reduxConnect(AddTaskUC);
export const EditTask = reduxConnect(EditTaskUC);
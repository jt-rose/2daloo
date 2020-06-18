import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form } from "semantic-ui-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Error404 from "../Error404";
import { updateTask, createTask } from "../../actions";

// empty post provided when creating new posts
const emptyPost = {
    slug: "",
    title: "",
    content: "",
    tags: [],
    important: false
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
            super(props);
            this.state = {
                title: props.task.title,
                content: props.task.content,
                categories: props.task.categories,
                important: props.task.important,
                redirect: false
            };
            this.updateTitle = this.updateTitle.bind(this);
            this.updateContent = this.updateContent.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }
    
        updateTitle = e => this.setState({title: e.target.value});
        updateContent = e => this.setState({content: e.target.value});
        onSubmit = e => {
            e.preventDefault();
            const { title, content } = this.state;
            const newTask = createTask(title, content);
            this.updateTask(newTask, this.props.task.slug);
            this.setState({redirect: true});
        }
    
        render() {
            if (this.state.redirect) {
                return (<Redirect to="/" />);
            }
            return (
                <Form 
                    onSubmit={this.onSubmit}
                    title={updateFormat.pageTitle}
                >
                    <Form.Input 
                        label="Title" 
                        placeholder="..." 
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                    <Form.TextArea 
                        label="Content" 
                        placeholder="..." 
                        value={this.state.content}
                        onChange={this.updateContent}
                    />
                    {/*<ReactQuill label="Content" />*/}
                    <Form.Checkbox label="Important" />
                    <Form.Button>{updateFormat.buttonWording}</Form.Button>
                </Form>
            )
        }
    };
}


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.task.title,
            content: props.task.content,
            categories: props.task.categories,
            important: props.task.important,
            redirect: false
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateTitle = e => this.setState({title: e.target.value});
    updateContent = e => this.setState({content: e.target.value});
    onSubmit = e => {
        e.preventDefault();
        const { title, content } = this.state;
        const newTask = createTask(title, content);
        this.updateTask(newTask, this.props.task.slug);
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/" />);
        }
        return (
            <Form 
                onSubmit={this.onSubmit}
                title={this.props.pageTitle}
            >
                <Form.Input 
                    label="Title" 
                    placeholder="..." 
                    value={this.state.title}
                    onChange={this.updateTitle}
                />
                <Form.TextArea 
                    label="Content" 
                    placeholder="..." 
                    value={this.state.content}
                    onChange={this.updateContent}
                />
                {/*<ReactQuill label="Content" />*/}
                <Form.Checkbox label="Important" />
                <Form.Button>{this.props.buttonWording}</Form.Button>
            </Form>
        )
    }
};


/*
const updateTaskTemplate = (updateFormat) => {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    title: props.task.title,
                    content: props.task.content,
                    categories: props.task.categories,
                    important: props.task.important,
                    redirect: false
                };
                this.updateTitle = this.updateTitle.bind(this);
                this.updateContent = this.updateContent.bind(this);
                this.onSubmit = this.onSubmit.bind(this);
            }
        
            updateTitle = e => this.setState({title: e.target.value});
            updateContent = e => this.setState({content: e.target.value});
            onSubmit = e => {
                const { title, content } = this.state;
                e.preventDefault();
                if (this.props.editing) {
                    this.props.editTask(this.props.task, title, content)
                } else {
                    this.props.addTask(title, content);
                };
                this.setState({redirect: true});
            }
        
            render() {
                if (this.state.redirect) {
                    return (<Redirect to="/" />);
                }
                const { pageTitle, buttonWording, newTask } = updateFormat;
                // use new task form, find current task to edit, or reject with wrong url
                const task = newTask || props.tasks.find(x => x.slug === props.match.params.editSlug)
                if (!task) { return <Error404 /> };
                return (
                    <Form 
                        onSubmit={this.onSubmit}
                        title={pageTitle}
                    >
                        <Form.Input 
                            label="Title" 
                            placeholder="..." 
                            value={this.state.title}
                            onChange={this.updateTitle}
                        />
                        <Form.TextArea 
                            label="Content" 
                            placeholder="..." 
                            value={this.state.content}
                            onChange={this.updateContent}
                        />
                        {/*<ReactQuill label="Content" />*//*}
                        <Form.Checkbox label="Important" />
                        <Form.Button>{buttonWording}</Form.Button>
                    </Form>
                )
            }
        
        }
        };


// create template for form to add or edit tasks
const OLDupdateTaskTemplate = (updateFormat) => (props) => {
    const { pageTitle, buttonWording, newTask } = updateFormat;
    // use new task form, find current task to edit, or reject with wrong url
    const task = newTask || props.tasks.find(x => x.slug === props.match.params.editSlug)
    if (!task) {
        return (
            <Error404 />
        )
    } else {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    title: task.title,
                    content: task.content,
                    categories: task.categories,
                    important: task.important,
                    redirect: false
                };
                this.updateTitle = this.updateTitle.bind(this);
                this.updateContent = this.updateContent.bind(this);
                this.onSubmit = this.onSubmit.bind(this);
            }
        
            updateTitle = e => this.setState({title: e.target.value});
            updateContent = e => this.setState({content: e.target.value});
            onSubmit = e => {
                const { title, content } = this.state;
                e.preventDefault();
                if (this.props.editing) {
                    this.props.editTask(this.props.task, title, content)
                } else {
                    this.props.addTask(title, content);
                };
                this.setState({redirect: true});
            }
        
            render() {
                if (this.state.redirect) {
                    return (<Redirect to="/" />);
                } else {
                return (
                    <Form 
                        onSubmit={this.onSubmit}
                        title={pageTitle}
                    >
                        <Form.Input 
                            label="Title" 
                            placeholder="..." 
                            value={this.state.title}
                            onChange={this.updateTitle}
                        />
                        <Form.TextArea 
                            label="Content" 
                            placeholder="..." 
                            value={this.state.content}
                            onChange={this.updateContent}
                        />
                        {/*<ReactQuill label="Content" />*//*}
                        <Form.Checkbox label="Important" />
                        <Form.Button>{buttonWording}</Form.Button>
                    </Form>
                )
            }
        
        }
        }
    }

};*/

// create Add and Edit forms, unconnected ("UC") to redux store
const AddTaskUC = updateTaskTemplate(addTaskFormat);
const EditTaskUC = updateTaskTemplate(editTaskFormat);
/*const TaskFormRouteUC = ({isNewTask}) => {
    if (isNewTask) {
        return <AddTask 
                    task={emptyPost} 
                    pageTitle={}
                    buttonWording={}
                />
    }
    const editTask = props.tasks.find(x => x.slug === props.match.params.editSlug);
    if (editTask) {
        return <EditTask
                    task={editTask}
                    pageTitle={}
                    buttonWording={}
                />
    }
    return <Error404 />

}*/

// map out redux connections
const mapStateToProps = ({ tasks }) => ({ tasks});
const mapDispatchToProps = dispatch => ({
    editTask: (newTask, oldSlug) => dispatch(updateTask(newTask, oldSlug))
});
const reduxConnect = connect(mapStateToProps, mapDispatchToProps);

// export connected Add/ Edit forms
export const AddTask = reduxConnect(AddTaskUC);
export const EditTask = reduxConnect(EditTaskUC);
/*const TaskFormRouteUC = ({isNewTask}) => {
    if (isNewTask) {
        return <AddTask 
                    task={emptyPost} 
                    pageTitle={}
                    buttonWording={}
                />
    }
    const editTask = props.tasks.find(x => x.slug === props.match.params.editSlug);
    if (editTask) {
        return <EditTask
                    task={editTask}
                    pageTitle={}
                    buttonWording={}
                />
    }
    return <Error404 />

}

export const TaskFormRoute*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Form,
  Container,
  Checkbox,
  Dropdown,
  Grid,
  TextArea,
  Icon,
  Label
} from 'semantic-ui-react';

import NotFound from '../NotFound';
import { updateTask, createTask, createSlug } from '../../actions';

// empty post provided when creating new posts
const emptyPost = {
  slug: '',
  title: '',
  content: '',
  tags: [],
  important: false
};

const noPostFound = {
  slug: null,
  title: null,
  content: null,
  tags: null,
  important: null
};

// formats used to create differing Add/Edit forms from template
const addTaskFormat = {
  pageTitle: 'Add New Task',
  buttonWording: 'Add',
  newTask: emptyPost
};

const editTaskFormat = {
  pageTitle: 'Edit Task',
  buttonWording: 'Update',
  newTask: false
};

const updateTaskTemplate = (updateFormat) => {
  return class extends Component {
    constructor(props) {
      // use new task form, find current task to edit, or reject with wrong url

      super(props);
      this.task =
        updateFormat.newTask ||
        props.tasks.find(
          (x) => x.slug === props.match.params.editSlug
        ) ||
        noPostFound;

      this.state = {
        title: this.task.title,
        content: this.task.content,
        tags: this.task.tags,
        important: this.task.important,
        redirect: false
      };
      this.updateTitle = this.updateTitle.bind(this);
      this.updateContent = this.updateContent.bind(this);
      this.updateTags = this.updateTags.bind(this);
      this.updateImportant = this.updateImportant.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    updateTitle = (e) => this.setState({ title: e.target.value });
    updateContent = (e) => this.setState({ content: e.target.value });
    updateTags = (currentTag) => {
      if (this.state.tags.includes(currentTag)) {
        const updatedTags = this.state.tags.filter(
          (tag) => tag !== currentTag
        );
        this.setState({ tags: updatedTags });
      } else {
        const updatedTags = [...this.state.tags, currentTag];
        this.setState({ tags: updatedTags });
      }
    };
    updateImportant = () =>
      this.setState({ important: !this.state.important });
    onSubmit = (e) => {
      e.preventDefault();
      const { title, content, important, tags } = this.state;
      const newTask = createTask(title, content, important, tags);
      this.props.updateTask(newTask, this.task.slug);
      this.setState({ redirect: true });
    };

    render() {
      if (this.state.redirect) {
        return <Redirect to="/" />;
      }
      if (this.state.title === null) {
        return <NotFound />;
      }

      const tags = this.props.tags;

      const { title, content } = this.state;
      const { tasks, trash } = this.props;

      // check for same title used if not editing previous task
      const titleSlug = createSlug(title);
      const sameTitleFromEditing = titleSlug === this.task.slug;
      const titleAlreadyUsed =
        !sameTitleFromEditing &&
        (tasks.some((x) => x.slug === titleSlug) ||
          trash.some((x) => x.slug === titleSlug));
      const validContent =
        title.length > 0 && content.length > 0 && !titleAlreadyUsed;

      return (
        <Container text textAlign="left">
          <Form
            onSubmit={this.onSubmit}
            title={updateFormat.pageTitle}
          >
            <Form.Field>
              <label style={{ color: '#2185d0', fontSize: '1.2em' }}>
                Title
              </label>
              <input
                onChange={this.updateTitle}
                value={this.state.title}
                placeholder="..."
              ></input>
              {titleAlreadyUsed && (
                <Label basic color="red" pointing>
                  The title `{this.state.title}` has already been used
                  in another post!
                </Label>
              )}
            </Form.Field>

            <Form.Field>
              <label style={{ color: '#2185d0', fontSize: '1.2em' }}>
                Content
              </label>
              <TextArea
                placeholder="..."
                rows={4}
                value={this.state.content}
                onChange={this.updateContent}
              />
            </Form.Field>

            <Grid columns="equal">
              <Grid.Column>
                <Form.Field>
                  <Icon
                    name="exclamation circle"
                    color={this.state.important ? 'red' : 'grey'}
                    style={{
                      fontSize: '2.6em',
                      lineHeight: '1'
                    }}
                    onClick={this.updateImportant}
                  />
                  <Checkbox
                    slider
                    checked={this.state.important}
                    onChange={this.updateImportant}
                  />
                </Form.Field>
              </Grid.Column>

              <Grid.Column />

              <Grid.Column>
                <Form.Field>
                  <Dropdown
                    placeholder="tags"
                    multiple
                    selection
                    style={{ minWidth: '7em' }}
                  >
                    <Dropdown.Menu>
                      {tags.map((tag) => (
                        <Dropdown.Item
                          key={tag.name}
                          text={tag.name}
                          value={tag.name}
                          label={{
                            color: tag.color,
                            empty: true,
                            circular: true
                          }}
                          onClick={() => this.updateTags(tag)}
                          active={this.state.tags.includes(tag)}
                        />
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Field>
              </Grid.Column>
            </Grid>

            <Container textAlign="center">
              <br />
              <Form.Button
                compact
                size="massive"
                color="blue"
                disabled={!validContent}
              >
                {updateFormat.buttonWording}
              </Form.Button>
            </Container>
          </Form>
        </Container>
      );
    }
  };
};

// create Add and Edit forms, unconnected ("UC") to redux store
const AddTaskUC = updateTaskTemplate(addTaskFormat);
const EditTaskUC = updateTaskTemplate(editTaskFormat);

// map out redux connections
const mapStateToProps = ({ tasks, trash, tags }) => ({
  tasks,
  trash,
  tags
});
const mapDispatchToProps = (dispatch) => ({
  updateTask: (newTask, oldSlug) =>
    dispatch(updateTask(newTask, oldSlug))
});
const reduxConnect = connect(mapStateToProps, mapDispatchToProps);

// export connected Add/ Edit forms
export const AddTask = reduxConnect(AddTaskUC);
export const EditTask = reduxConnect(EditTaskUC);

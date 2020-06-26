import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

import { updateTag, removeTag } from "../../actions";

class AddTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            color: ""
        };
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    updateName = e => this.setState({name: e.target.value});
    updateDescription = e => this.setState({description: e.target.value});
    updateColor = e => this.setState({color: e.target.value});// update later
    onSubmit = e => {
        e.preventDefault();
        const newTag = this.state;
        this.props.updateTag(newTag, this.props.tag);
        };

    render() {
        return (
            //add container?
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                <Form.Input 
                    onChange={this.updateName}
                    placeholder="Tag Name"
                />
                <Form.Input 
                    onChange={this.updateDescription}
                    placeholder="add an optional description"
                />
                <Form.Select />
                <Form.Button type="select" content="Submit"/>
                </Form.Group>
            </Form>
        )
    }
};

const mapStateToProps = ({ tags }) => ({ tags });
const mapDispatchToProps = dispatch => ({
    updateTag: (tag, oldName) => dispatch(updateTag(tag, oldName)),
    //removeTag: (tag) => dispatch(removeTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);
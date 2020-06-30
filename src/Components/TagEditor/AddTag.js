import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Dropdown } from "semantic-ui-react";

import { updateTag, removeTag } from "../../actions";

const emptyTag = {
    name: "",
    description: "",
    color: ""
};

const semanticColors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
    "black"
];

const colorOptions = semanticColors.map( color => ({
    key: color,
    text: color,
    value: color,
    icon: {
        name: "circle",
        color: color
    }
}))

class AddTag extends Component {
    constructor(props) {
        super(props);
        const tag = this.props.tag || emptyTag;
        const { name, description, color } = tag;

        this.state = {
            name,
            description,
            color,
            colorSelection: ""
        };
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.resetTag = this.resetTag.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    updateName = e => this.setState({name: e.target.value});
    updateDescription = e => this.setState({description: e.target.value});
    updateColor = (e, {value}) => this.setState({color: value});
    resetTag = () => this.setState({
        name: "",
        description: "",
        color: ""
    });
    onSubmit = e => {
        e.preventDefault();
        const newTag = this.state;
        const oldTagName = this.props.tag || false;
        this.props.updateTag(newTag, oldTagName);
        this.setState({
            name: "",
            description: "",
            color: ""
        });
        };

    render() {
        return (
            //add container?
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                <Form.Input 
                    onChange={this.updateName}
                    placeholder="Tag Name"
                    value={this.state.name}
                />
                <Form.Input 
                    onChange={this.updateDescription}
                    placeholder="add an optional description"
                    value={this.state.description}
                />
                <Form.Field>
                <Dropdown 
                    onChange={this.updateColor}
                    options={colorOptions}
                    placeholder="choose a color"
                    selection
                    value={this.state.color}
                />
                    </Form.Field>

                <Form.Button type="submit" content="Submit"/>
                <Form.Button type="button" icon="x" onClick={() => this.resetTag()}/>
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
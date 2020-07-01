import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Dropdown } from "semantic-ui-react";

import { createTag } from "../../actions";

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
}));

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
        this.props.createTag(this.state);
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
                    placeholder="tag name"
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

                <Form.Button type="submit" content="add" color="blue"/>
                <Form.Button type="button" icon="undo" color="blue" onClick={() => this.resetTag()}/>
                </Form.Group>
            </Form>
        )
    }
};

const mapStateToProps = ({ tags }) => ({ tags });
const mapDispatchToProps = dispatch => ({
    createTag: (tag) => dispatch(createTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);
import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Dropdown, Grid } from "semantic-ui-react";

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
            color: ""
        };
        this.updateName = this.updateName.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    updateName = e => this.setState({name: e.target.value});
    updateColor = (e, {value}) => this.setState({color: value});
    onSubmit = e => {
        e.preventDefault();
        this.props.createTag(this.state);
        this.setState({
            name: "",
            color: ""
        });
        };

    render() {
        return (
            //add container?
            <Form 
                onSubmit={this.onSubmit}
            >
                {/*<Form.Group>*/}
                <Grid stackable columns={3}>

                <Grid.Column>
                <Form.Input 
                    onChange={this.updateName}
                    placeholder="tag name"
                    value={this.state.name}
                />
                </Grid.Column>

                <Grid.Column>
                <Form.Field>
                <Dropdown 
                    onChange={this.updateColor}
                    options={colorOptions}
                    placeholder="choose a color"
                    selection
                    value={this.state.color}
                />
                
                    </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                <Form.Button 
                    type="submit" 
                    content="add" 
                    color="blue"
                    disabled={this.state.name.length === 0}
                />
                </Grid.Column>
                {/*</Form.Group>*/}
                </Grid>
            </Form>
        )
    }
};

const mapStateToProps = ({ tags }) => ({ tags });
const mapDispatchToProps = dispatch => ({
    createTag: (tag) => dispatch(createTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);
import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Dropdown, Grid, Transition, Label } from "semantic-ui-react";

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
            color: "",
            visibility: true
        };
        this.updateName = this.updateName.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    updateName = e => {
        if (e.target.value.length > 10) {
            this.setState({visibility: !this.state.visibility});
        } else {
            this.setState({name: e.target.value});
        }
    };
    updateColor = (e, {value}) => this.setState({color: value});
    onSubmit = e => {
        e.preventDefault();
        const { name, color } = this.state;
        this.props.createTag({name, color});
        this.setState({
            name: "",
            color: ""
        });
        };

    render() {
        const tagNameAlreadyUsed = this.props.tags.some(x => x.name === this.state.name);

        return (
            //add container?
            <Form 
                onSubmit={this.onSubmit}
            >
                {/*<Form.Group>*/}
                <Grid stackable columns={3}>
                {tagNameAlreadyUsed && (
                            <Label basic color="red" pointing="down">
                                The tag name `{this.state.name}` has already been used!
                            </Label>
                        )}
                <Grid.Column>
                    <Transition
                        visible={this.state.visibility}
                        animation="shake"
                        duration={300}
                    >
                    <Form.Input 
                    onChange={this.updateName}
                    placeholder="tag name"
                    value={this.state.name}
                />
                    </Transition>
                
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
                    disabled={this.state.name.length === 0 || tagNameAlreadyUsed}
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
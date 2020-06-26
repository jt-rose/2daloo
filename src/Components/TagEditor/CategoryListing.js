import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header } from "semantic-ui-react";

import { updateTag, removeTag } from "../../actions";

class TagListing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        //bind
    };
    //onClick

    render() {

        const { name, description, color} = this.props.tag;
        return (
            <Container>
                <Header>{name}</Header>
                <p>{description}</p>
                <p>{color}</p>
                {/* add buttons*/}
            </Container>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateTag: (tag, oldName) => dispatch(updateTag(tag, oldName)),
    removeTag: (tag) => dispatch(removeTag(tag))
});

export default connect(null, mapDispatchToProps)(TagListing);
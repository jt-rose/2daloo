import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import { connect } from "react-redux";

import { updateTag, removeTag } from "../../actions";
import AddCategory from "./AddCategory";

class TagEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        //bind
    };
    //onClicks

    render() {
        return (
            <Container>
                <Header>Tags</Header>
                <AddCategory category={null}/>
            </Container>
        )
    }
};

const mapStateToProps = ({ categories }) => ({ categories });
const mapDispatchToProps = dispatch => ({
    updateTag: (tag, oldName) => dispatch(updateTag(tag, oldName)),
    removeTag: (tag) => dispatch(removeTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagEditor);
import React, { Component } from "react";
import { Container, Header , Label, Button} from "semantic-ui-react";
import { connect } from "react-redux";

import { updateTag, removeTag } from "../../actions";
import AddTag from "./AddTag";
import TagListing from "./TagListing";

const emptyTag = {
    name: "",
    description: "",
    color: ""
};

class TagEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyEditing: false,
            editTag: emptyTag
        };
        this.updateEditing = this.updateEditing.bind(this);
        this.finishEditing = this.finishEditing.bind(this);
    };
    updateEditing = (tag) => this.setState({currentlyEditing: tag})//add formal for same names
    finishEditing = (tag=false) => {
        // if a new tag, currentlyEditing will be false, 
        // otherwise the updated tag will be checked against
        // the old version in the store and replaced
        if (tag) {
            this.props.updateTag(tag, this.state.currentlyEditing.name);
        };
        this.setState({currentlyEditing: false});
    }

    render() {
        return (
            <Container>
                <Header as="h2" color="blue">Tags</Header>
                {this.props.tags.map( tag => (
                        <div style={{display: "flex"}}>
                    <Label color={tag.color} tag style={{minWidth: "8em"}}>{tag.name}</Label>
                    <p>{tag.description}</p>
                    <Button circular icon="edit" size="small"/>
                    <Button circular icon="x" size="small" onClick={ () => this.props.removeTag(tag)}/>
                    </div>
                ))}
                {/*this.props.tags.map(tag => <TagListing tag={tag} />)*/}
                <AddTag tag={this.state.currentlyEditing}/>
            </Container>
        )
    }
};

const mapStateToProps = ({ tags }) => ({ tags });
const mapDispatchToProps = dispatch => ({
    updateTag: (tag, oldName) => dispatch(updateTag(tag, oldName)),
    removeTag: (tag) => dispatch(removeTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagEditor);
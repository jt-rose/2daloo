import React from "react";
import { Container, Header , Label, Button} from "semantic-ui-react";
import { connect } from "react-redux";

import { removeTag } from "../../actions";
import AddTag from "./AddTag";


const TagEditor = (props) => (
    <Container>
                <Header as="h2" color="blue">Tags</Header>
                {props.tags.map( tag => (
                        <div style={{display: "flex"}}>
                    <Label color={tag.color} tag style={{minWidth: "8em"}}>{tag.name}</Label>
                    <p>{tag.description}</p>
                    <Button circular icon="x" size="small" onClick={ () => props.removeTag(tag)}/>
                    </div>
                ))}
                <AddTag />
            </Container>
);

const mapStateToProps = ({ tags }) => ({ tags });
const mapDispatchToProps = dispatch => ({
    removeTag: (tag) => dispatch(removeTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagEditor);
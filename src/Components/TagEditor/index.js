import React from "react";
import { Container, Header , Label, Button, Divider, Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import { removeTag } from "../../actions";
import AddTag from "./AddTag";


const TagEditor = (props) => (
    <Container text>
                <Header as="h2" color="blue">Tags</Header>
                {props.tags.map( tag => (
                <Grid container columns="equal">
                    <Grid.Column textAlign="right">
                        
                        <Label 
                            color={tag.color} 
                            tag style={{minWidth: "8em"}}
                            size="big"
                        >
                            <div style={{textAlign: "center"}}>
                                {tag.name}
                            </div>
                        </Label>
                        
                    </Grid.Column>
                    <Grid.Column textAlign="left">
                        <Button 
                             
                            icon="x" 
                            //size="small" 
                            color="red"
                            onClick={ () => props.removeTag(tag)}
                        />
                    </Grid.Column>
                </Grid>
                ))}
                {/*props.tags.map( tag => (
                        <div style={{display: "flex"}}>
                    <Label color={tag.color} tag style={{minWidth: "8em"}}>{tag.name}</Label>
                    <p>{tag.description}</p>
                    <Button 
                        circular 
                        icon="x" 
                        size="small" 
                        color="red"
                        onClick={ () => props.removeTag(tag)}
                    />
                    </div>
                ))*/}
                <Divider horizontal>
                    Add New Tag
                </Divider>
                <AddTag />
            </Container>
);

const mapStateToProps = ({ tags }) => ({ tags });
const mapDispatchToProps = dispatch => ({
    removeTag: (tag) => dispatch(removeTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagEditor);
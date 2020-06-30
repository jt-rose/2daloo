import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Label, List, Button } from "semantic-ui-react";

import { updateTag, removeTag } from "../../actions";


/*}
            <Container>
                <Header>{name}</Header>
                <p>{description}</p>
                <p>{color}</p>
                {/* add buttons}
        </Container>*/

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
            <div style={{display: "flex"}}>
        <Label color={color} tag style={{minWidth: "8em"}}>{name}</Label>
        <p>{description}</p>
        <Button circular icon="edit" size="small"/>
        <Button circular icon="x" size="small" onClick={ () => this.props.removeTag(this.props.tag)}/>
        </div>
            

        
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateTag: (tag, oldName) => dispatch(updateTag(tag, oldName)),
    removeTag: (tag) => dispatch(removeTag(tag))
});

export default connect(null, mapDispatchToProps)(TagListing);
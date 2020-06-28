import React from "react";
import { Form, Label, Header } from "semantic-ui-react";

const signUpLabels = [
    "Email", 
    "Username", 
    "Password", 
    "Confirm Password"
];
const signUpContainerStyle = {
    display: "flex", 
    justifyContent: "center",
    textAlign: "left"
}

const formStyle = {
    display: "flex",
    flexDirection: "column",
    border: ".2em solid #2185d0",
    borderRadius: ".5em",
    padding: "1em",
    minWidth: "300px"
}

const centerSpacing = {
    textAlign: "center"
};

const SignUp = () => (
    <div style={signUpContainerStyle}>
        <Form style={formStyle}>
        <Label 
            fluid
            color="blue" 
            style={{marginBottom: "2em"}}
        >
            <Header 
                inverted 
                as="h2"  
                style={centerSpacing}
            >Sign-Up</Header>
        </Label><br />
                {signUpLabels.map(labelWording => (
                    <Form.Field>
                        <label style={{color: "#2185d0"}}>{labelWording}</label>
                        <input placeholder="..."/>
                    </Form.Field>
                ))}
                <div style={centerSpacing}>
                    <Form.Button color="blue" size="big">Submit</Form.Button>
                </div>
            </Form>
    </div>
            
);

export default SignUp;
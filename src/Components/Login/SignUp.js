import React, { Component } from "react";
import { Form, Label, Header, List, Icon, Divider } from "semantic-ui-react";
import { 
    confirmUnique, 
    confirmSpecialCharacter,
    confirmNumberIncluded,
    confirmUpperAndLowerCase

} from "../ErrorMessage/formValidation";

const PassValidationIcon = () => (
    <Icon name="check circle outline" color="green"/>
    );
const FailValidationIcon = () => (
    <Icon name="x" color="red"/>
    );

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

class SignUp2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            passwordLongEnough: false,
            upperLowerUsed: false,
            specCharsUsed: false,
            passwordsMatch: false
        };
        this.updateEmail = this.updateEmail.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
    };
    
    updateEmail = e => this.setState({email: e.target.value});
    updateUsername = e => this.setState({username: e.target.value});
    updatePassword = e => this.setState({password: e.target.value});
    updateConfirmPassword = e => this.setState({ confirmPassword: e.target.value});

    render() {
        const { password, confirmPassword } = this.state; 
        const passwordLongEnough = password.length > 7;
        const passwordIncludesSpecChars = confirmSpecialCharacter(password);
        const passwordUpperAndLower = confirmUpperAndLowerCase(password);
        const passwordsMatch = password === confirmPassword && password.length > 0;
        const allPassing = (
            passwordLongEnough && 
            passwordIncludesSpecChars &&
            passwordUpperAndLower &&
            passwordsMatch
        );

        return (
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
        
        
                    <Form.Field>
                        <label style={{color: "#2185d0"}}>Email</label>
                        <input placeholder="..." onChange={this.updateEmail}/>
                    </Form.Field>
                    <Form.Field>
                        <label style={{color: "#2185d0"}}>Username</label>
                        <input placeholder="..." onChange={this.updateUsername}/>
                    </Form.Field>
                    
                    <Divider hidden></Divider>
                    
                    <Form.Field>
                    
                        <label style={{color: "#2185d0"}}>Password</label>
                        <input 
                            placeholder="..." 
                            onChange={this.updatePassword}
                            type="password"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label style={{color: "#2185d0"}}>Confirm Password</label>
                        <input 
                            placeholder="..." 
                            onChange={this.updateConfirmPassword}
                            type="password"
                        />
                    </Form.Field>
                    
                    <List>
                    <List.Item>
                        {passwordLongEnough ? <PassValidationIcon /> : <FailValidationIcon />}
                        at least 8 characters long
                    </List.Item>
                    <List.Item>
                        {passwordUpperAndLower ? <PassValidationIcon /> : <FailValidationIcon />}
                        upper and lower case
                    </List.Item>
                    <List.Item>
                        {passwordIncludesSpecChars ? <PassValidationIcon /> : <FailValidationIcon />}
                        special character - Ex: !@#$%&*?
                    </List.Item>
                    <List.Item>
                        {passwordsMatch ? <PassValidationIcon /> : <FailValidationIcon />}
                        passwords match
                    </List.Item>
                </List>                
                
                <div style={centerSpacing}>
                    <Form.Button 
                        color="blue" 
                        size="big"
                        disabled={!allPassing}
                    >
                        Submit
                    </Form.Button>
                </div>
            </Form>
    </div>
        );
    }
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
                <List>
                    <List.Item>
                        At least 8 characters long
                    </List.Item>
                    <List.Item>
                        Both upper and lower case characters
                    </List.Item>
                    <List.Item>
                        special character - !@#$%&*?
                    </List.Item>
                    <List.Item>
                        passwords match
                    </List.Item>
                </List>
                <div style={centerSpacing}>
                    <Form.Button color="blue" size="big">Submit</Form.Button>
                </div>
            </Form>
    </div>
            
);

export default SignUp2;
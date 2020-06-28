import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Button, Input } from "semantic-ui-react";

const Login = () => (
    <div>
    <Form size="mini" >
        <Form.Field inline >
            <Input  
            label={{content: "Username", color: "blue"}} 
            placeholder="..." 
        />
        </Form.Field>
        <Form.Field inline>
            <Input 
            label={{content: "Password", color: "blue"}} 
            placeholder="..."
        />
        </Form.Field>
        <Button color="blue" >Go!</Button>
    </Form>
    <br />
    <p>Forgot username/password? Click <NavLink to="/forgot-password">here</NavLink></p>
    <p>New user? <NavLink to="/sign-up">Create an account</NavLink></p>
    </div>
)

export default Login;
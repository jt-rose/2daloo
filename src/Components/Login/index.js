import React from "react";
import { Form, Button, Input } from "semantic-ui-react";

const Login = (props) => (
    <Form size="mini">
        <Form.Field inline>
            <Input label="Username" placeholder="..."></Input>
        </Form.Field>
        <Form.Field inline>
            <Input label="Password" placeholder="..."></Input>
        </Form.Field>
        <Button>Go!</Button>
    </Form>
)

export default Login;
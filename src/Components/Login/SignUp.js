import React from "react";
import { Form, Input } from "semantic-ui-react";

const SignUp = (props) => (
    <Form>
        <Form.Field inline>
            <Input label="Email" placeholder="..."></Input>
        </Form.Field>
        <Form.Field inline>
            <Input label="Username" placeholder="..."></Input>
        </Form.Field>
        <Form.Field inline>
            <Input label="Password" placeholder="..."></Input>
        </Form.Field>
        <Form.Field inline>
            <Input label="Confirm Password" placeholder="..."></Input>
        </Form.Field>
        Add Later...
    </Form>
);

export default SignUp;
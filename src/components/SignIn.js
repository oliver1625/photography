import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input, FormGroup, FormInput } from 'reactstrap';

function SignIn() {
  return (
    <div>
        <h2>Sign IN</h2>
        <Form>
            <FormGroup>
                <Label for="exampleEmail">
                Email
                </Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">
                Password
                </Label>
                <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </div>
  )
}

export default SignIn
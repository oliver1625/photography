import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input, FormGroup, FormInput } from 'reactstrap';
import styled from "styled-components";

function Login() {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitClick = (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    axios.post('http://localhost:8080/api/auth/login', data).then( response =>{
            console.log(response)
        }).catch(e =>{
            console.log(e)
          })
  }
  return (
    <div>
      <StyledNav>
        <div className='login'>
          <div className="login-wrapper">
          <h2>Login</h2>
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
                  onChange={(e)=> setEmail(e.target.value)}
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
                  onChange={(e)=> setPassword(e.target.value)}
                  />
              </FormGroup>
              <Button type="submit" onClick={(e) => submitClick(e)}>Submit</Button>
          </Form>
          </div>
        </div>
      </StyledNav>
    </div>
  )
}
const StyledNav = styled.div`
    margin: auto;
    width: 50%;
    transform: translate(50%, 50%);
    position: absolute;
`;

export default Login
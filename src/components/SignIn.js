import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import bg from '../img/Gokarna/undraw_moments_0y20.svg'

import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input, FormGroup, FormInput } from 'reactstrap';

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitClick = (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    axios.post('http://localhost:8080/api/auth/signup', data).then( response =>{
            console.log(response)
            navigate('/login');
        }).catch(e =>{
            console.log(e)
          })
  }
  return (
    <StyledSignin>
      <Container fluid>
        <Row>
          <Col sm='8' className='align-self-center'>
          <div className="img-wrapper">
            <img
                  className="login-img"
                  src={bg}
                  alt=""
              />
          </div>
          </Col>
          <Col sm='4' className='align-self-center'>
            <div className='login'>
              <div className="login-wrapper">
              <h2 className='mb-5'>Sign IN</h2>
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
                    <Button onClick={(e) => submitClick(e)}>Submit</Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
        </Container>
        
    </StyledSignin>
  )
}

export default SignIn

const StyledSignin = styled.div`
   .container-fluid{
  height: 100%;
}
.row{
  height: 100%;
}

height: 83vh;
    .img-wrapper{
      /* margin: auto; */
      width: 50%;
      height: 50%;
      .login-img{
          width: 100%;
          height: 100%;
        }
    }
    .login{
      height: 100%;
          .login-wrapper{
          margin: auto;
          width: 100%;
          /* transform: translate(0%, 50%);
          position: absolute; */
    }    }
`;
import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import bg from '../img/Gokarna/undraw_moments_0y20.svg'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Container, Button, Form, Row, Col, Label, Input, FormGroup, FormInput } from 'reactstrap';
import styled from "styled-components";

function Login() {
  const navigate = useNavigate();
  const notyf = new Notyf();
  const errorMessages = useRef({})

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
            localStorage.setItem('user', response.data.token);
            navigate('/user-profile');
        }).catch(e =>{
            if (e.response) {
              errorMessages.value = e.response  
              console.log(e.response)
            }
            if (e.response?.data?.errors) {
              notyf.error(e.response.data.errors)
            }
          })
  }
  return (
    <div>
      <StyledLogin>
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
              <h2 className='mb-5'>Login</h2>
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
          </Col>
        </Row>
        </Container>
      </StyledLogin>
    </div>
  )
}
const StyledLogin = styled.div`
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

export default Login
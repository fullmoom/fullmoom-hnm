import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = ({ setAuthenticate, to }) => {
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

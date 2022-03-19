import React from "react";
import {Form,Button, Container} from "react-bootstrap";

const Signin = () => {
return (
    <Container>
<Form className="col-6 mx-auto">
  <Form.Group className="mb-3" controlId="formBasicuserid">
    <Form.Label>User Id</Form.Label>
    <Form.Control type="text" placeholder="Enter userid" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
);
};

export default Signin;
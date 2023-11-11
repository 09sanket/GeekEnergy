import {
  Button,
  Container,
  FloatingLabel,
  Form,
  FormControl,
} from "react-bootstrap";

import "./SignUp.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { checkEmailInLocalStorage, saveSignUpData } from "../../../Utils/Utils";
import { useRef } from "react";

export default (props) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const professionRef = useRef();
  
  const history=useHistory()

  function formSubmitHandler(event) {
    event.preventDefault();
    const profession=professionRef.current.value

    if(profession=='null'){
      alert("Please choose a Proffession")
      return;
    }
    const obj={
      name:nameRef.current.value,
      password:passwordRef.current.value,
      email:emailRef.current.value,
      phone:phoneRef.current.value,
      profession:professionRef.current.value
    }
    if(checkEmailInLocalStorage(obj.email)){
      alert("Email already exists")
    }
    else{
      saveSignUpData(obj)
      alert("SignUp Successfull")
      history.push('/login')
    }
  }

  return (
    <>
      <Container className="mt-4 shadow p-2 text-center w-25 container-style">
        <h2 className="pt-1 h1 fw-bold py-2">SignUp</h2>
        <hr />
        <center>
          <Form onSubmit={formSubmitHandler}>
            <FloatingLabel label="Name" className="mb-2 input-width">
              <FormControl
                size="sm"
                type="text"
                ref={nameRef}
                placeholder="Enter your name"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Password" className="mb-2 input-width">
              <FormControl
                size="sm"
                type="password"
                ref={passwordRef}
                placeholder="Enter your password"
                required
              />
            </FloatingLabel>{" "}
            <FloatingLabel label="Email" className="mb-2 input-width">
              <FormControl
                size="sm"
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Phone Number" className="mb-2 input-width">
              <FormControl
                size="sm"
                type="number"
                ref={phoneRef}
                placeholder="Enter your Phone Number"
                required
              />
            </FloatingLabel>
            <Form.Group className="mb-2 input-width">
              <Form.Control as="select" ref={professionRef} required>
                <option value="null">Profession :- Select</option>
                <option value="student">Frontend Developer</option>
                <option value="developer">Backend Developer</option>
                <option value="designer">FullStack Developer</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit" className="input-width">
              Sign Up
            </Button>
          </Form>
          <hr />
          <Link to="/login" className="btn login-btn">
            Have an account? <span>Login</span> 
          </Link>
        </center>
      </Container>
    </>
  );
};

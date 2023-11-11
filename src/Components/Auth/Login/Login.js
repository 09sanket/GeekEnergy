import {
  Button,
  Container,
  FloatingLabel,
  Form,
  FormControl,
} from "react-bootstrap";
import './Login.css';
// import './Login/Login.css';
import { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { checkEmailInLocalStorage, loginCheck } from "../../../Utils/Utils";
import DataContext from "../../../store/data-context";

export default (props) => {
  const passwordRef = useRef();
  const emailRef = useRef();

  const history = useHistory();
  const dataContext=useContext(DataContext)

  function formSubmitHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const obj = { email: email, password: password };
    if (checkEmailInLocalStorage(email)) {
      const data = loginCheck(obj);

      if (data.password === password) {
        history.push("/home");
        dataContext.setIsLoggedIn(true)
      } else {
        alert("Invalid Credentials...");
      }
    } else {
      alert("Invalid Credentials...");
    }
  }

  return (
    <>
      <Container className="mt-5 shadow p-3 text-center w-25 container-style">
        <h2 className="pt-2 h1 fw-bold py-1">Login</h2>
        <hr />
        <center>
          <Form onSubmit={formSubmitHandler}>
            <FloatingLabel label="Email Address" className="mb-2 input-width">
              <FormControl
                ref={emailRef}
                size="sm"
                type="email"
                placeholder="Enter your name"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Password" className="mb-2 input-width">
              <FormControl
                ref={passwordRef}
                size="sm"
                type="password"
                placeholder="Enter your password"
                required
              />
            </FloatingLabel>{" "}
            <Button type="submit" className="input-width my-2">
              Login
            </Button>
            <br />
          </Form>
          <hr />
          <Link to="/signUp" className="btn login-btn">
            Don't have an account? <span>Sign Up</span> 
          </Link>
        </center>
      </Container>
    </>
  );
};

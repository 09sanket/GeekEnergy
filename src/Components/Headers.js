import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataContext from "../store/data-context";

export default (props) => {
  const dataContext = useContext(DataContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
      </Nav>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/companyInfo">
          Company Info
        </Nav.Link>
      </Nav>
      <Button
        variant="outline-light"
        onClick={() => dataContext.setIsLoggedIn(false)}
      >
        Logout
      </Button>
    </Navbar>
  );
};

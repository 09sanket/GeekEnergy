import React from "react";
import { Container } from "react-bootstrap";

export default (props) => {
  return (
    <Container className="mt-5">
      <h2>Company Info</h2>
      <p>
        <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
      </p>
      <p>
        <strong>Address:</strong> Sanjayanagar, Bengaluru-56
      </p>
      <p>
        <strong>Phone:</strong> XXXXXXXXX09
      </p>
      <p>
        <strong>Email:</strong> XXXXXX@gmail.com
      </p>
    </Container>
  );
};

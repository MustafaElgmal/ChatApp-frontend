import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = ({ name }: { name: string }) => {
  return (
    <Navbar className="fixed-top" style={{background:'#EEEEEE'}}>
      <Container>
        <p
          className="h1 fw-bold ms-5"
          style={{ color: "#5D5D5D" }}
        >
          {name}
        </p>
      </Container>
    </Navbar>
  );
};

export default Header;

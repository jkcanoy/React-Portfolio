import React from "react";

// function to change whether tab active or not depending on current page
export default function Nav({ currentPage, handlePageChange }) {
  return (
    <Navbar>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

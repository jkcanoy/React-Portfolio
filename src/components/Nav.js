import React from "react";

// function to change whether tab active or not depending on current page
export default function Nav({ currentPage, handlePageChange }) {
  return (
    <Navbar>
      <Container>
        <Nav className="me-auto">
          {/* Check if current page is "About", if true set current page to 'nav-link-active', else set to 'nav-link' */}
          <Nav.Link href="#about" onClick={() => handlePageChange("About")}>
            About
          </Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

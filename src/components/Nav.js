import React from "react";

// function to change whether tab active or not depending on current page
export default function Nav({ currentPage, handlePageChange }) {
  return (
    <Navbar>
      <Container>
        <Nav className="me-auto">
          {/* Check if current page is "About", if true set current page to 'nav-link-active', else set to 'nav-link' */}
          <Nav.Link
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </Nav.Link>
          {/* Check if current page is "Portfolio", if true set current page to 'nav-link-active', else set to 'nav-link' */}
          <Nav.Link
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Nav.Link>
          {/* Check if current page is "Contact", if true set current page to 'nav-link-active', else set to 'nav-link' */}
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Nav.Link>
          {/* Check if current page is "Resume", if true set current page to 'nav-link-active', else set to 'nav-link' */}
          <Nav.Link
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

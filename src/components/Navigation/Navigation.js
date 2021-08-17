import React from "react";
import "./Navigation.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-bootstrap";
// function to change whether tab active or not depending on current page
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand
          className="me-auto"
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          JEFFERSON KYLE CANOY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link // Check if current page is "About", if true set current page to 'nav-link-active', else set to 'nav-link'
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              ABOUT
            </Nav.Link>
            <Nav.Link // Check if current page is "Portfolio", if true set current page to 'nav-link-active', else set to 'nav-link'
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              PORTFOLIO
            </Nav.Link>
            <Nav.Link // Check if current page is "Resume", if true set current page to 'nav-link-active', else set to 'nav-link'
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              CONTACT
            </Nav.Link>
            <Nav.Link // Check if current page is "Contact", if true set current page to 'nav-link-active', else set to 'nav-link'
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              RESUME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

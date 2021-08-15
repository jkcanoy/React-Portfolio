import React from "react";
import "./Navigation.css";
// function to change whether tab active or not depending on current page
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              // Check if current page is "About", if true set current page to 'nav-link-active', else set to 'nav-link'
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
            <a
              // Check if current page is "Portfolio", if true set current page to 'nav-link-active', else set to 'nav-link'
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
            <a
              // Check if current page is "Contact", if true set current page to 'nav-link-active', else set to 'nav-link'
              href="#blog"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
            <a
              // Check if current page is "Resume", if true set current page to 'nav-link-active', else set to 'nav-link'
              href="#contact"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

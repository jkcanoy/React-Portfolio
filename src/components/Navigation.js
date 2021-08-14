import React from "react";

// function to change whether tab active or not depending on current page
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          // Check if current page is "About", if true set current page to 'nav-link-active', else set to 'nav-link'
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
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
      </li>
      <li className="nav-item">
        <a
          // Check if current page is "Contact", if true set current page to 'nav-link-active', else set to 'nav-link'
          href="#blog"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          // Check if current page is "Resume", if true set current page to 'nav-link-active', else set to 'nav-link'
          href="#contact"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

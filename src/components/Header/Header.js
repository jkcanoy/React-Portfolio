// Import functions from components
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import "./Header.css";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    //   if current page About render About.js
    if (currentPage === "About") {
      return <About />;
    }
    // if current page Portfolio render Portfolio.js
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    // if current page Contact render Contact.js
    if (currentPage === "Contact") {
      return <Contact />;
    }
    // Else render Resume.js
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className="container">
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </main>
  );
}

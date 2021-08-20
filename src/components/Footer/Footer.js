import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <a href="www.linkedin.com/in/jeffersonkylecanoy">
        <img
          src="https://image.flaticon.com/icons/png/32/174/174857.png"
          alt="LinkedIn"
        ></img>
      </a>
      <a href="https://github.com/jkcanoy">
        <img
          src="https://image.flaticon.com/icons/png/32/919/919847.png"
          alt="GitHub"
        ></img>
      </a>
      <a href="https://jkcanoy.github.io/react-portfolio/">
        <img
          src="https://image.flaticon.com/icons/png/32/1946/1946433.png"
          alt="Portfolio Home"
        ></img>
      </a>
    </footer>
  );
}

import React from "react";
import "./About.css";

export default function About() {
  return (
    <section>
      <div className="about-container">
        <h1>ABOUT ME</h1>
        <hr></hr>
        <img
          className="pt-4"
          id="avatar"
          src="https://avatars.githubusercontent.com/u/78453584?s=400&u=6a8780ca3cd61d46cdf7eca8fbc1fa10da6f0d74&v=4"
          alt="Jefferson Kyle Canoy"
        ></img>
        <p className="pt-4">
          My name is Kyle and I am currently a CNA for the Burn/Pediatric ICU at
          Harborview Medical Center, and was in the process of starting a career
          in medicine with a hope of becoming a physician.
        </p>
        <p className="pt-4">
          However I am putting that on pause and exploring a career in web
          development. I am currently in the UW Coding Bootcamp in the hopes of
          becoming a web developer. I have knowledge in HTML, CSS, JS, Node,
          Express, MySQL, MongoDB, and React
        </p>
        <p className="pt-4">
          In my spare time I like to play video games, watch movies,
          occasionally read books when the planets align and the moon is full,
          and do things outdoors like hiking and camping.
        </p>
      </div>
    </section>
  );
}

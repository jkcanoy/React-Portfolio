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
          Full Stack Web Developer with a background in psychology and medicine
          providing a unique approach on how to ensure those with disabilities
          are able to access all aspects of a website or software.
        </p>
        <p className="pt-4">
          Earned a certificate in Full Stack Web Development from the University
          of Washington’s Coding Bootcamp, enhancing my skills in responsive web
          design including JavaScript, React.js, Nodes.js, MongoDB, and GraphQL.
        </p>
        <p className="pt-4">
          Using organization skills honed from my job as a Certified Nursing
          Assistant at Harborview Medical Center’s Burn/Pediatric ICU, I helped
          manage and oversee various administrative aspects in a recent project,
          including creation of the MongoAtlasDB, deployment to Heroku, and
          creation of README.md, and project presentation.
        </p>
        <p className="pt-4">
          As a flexible problem-solver with a passion for developing
          high-quality applications with a focus on accessibility, combined with
          strengths in teamwork, adaptability, and willingness to rise to the
          occasion, I would make a strong addition to any team/organization.
        </p>
      </div>
      <br></br>
    </section>
  );
}

import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <hr></hr>
      <div className="resume-container">
        <div>
          <h2>Jefferson Kyle Canoy</h2>
        </div>
        <div className="pt-5">
          Full Stack Web Developer with a background in psychology and medicine
          to provide a unique approach on how to ensure those with disabilities
          are able to access all aspects of a website or software. Earned a
          certificate in Full Stack Web Development from the University of
          Washington’s Coding Bootcamp. Flexible problem-solver with a passion
          for developing high-quality applications. Strengths in teamwork,
          adaptability, and willingness to rise to the occasion.
        </div>

        <div className="d-flex flex-row pt-5">
          <div className="icon-img">
            <a href="www.linkedin.com/in/jeffersonkylecanoy">
              <img
                src="https://image.flaticon.com/icons/png/32/174/174857.png"
                alt="LinkedIn logo"
              ></img>
            </a>
          </div>
          <div className="icon-img">
            <a href="https://github.com/jkcanoy">
              <img
                src="https://image.flaticon.com/icons/png/32/733/733609.png"
                alt="GitHub logo"
              ></img>
            </a>
          </div>
          <div className="resume-download">
            <button className="btn">
              <a
                href="https://github.com/jkcanoy/react-portfolio/blob/main/src/components/Resume/JKC%20Resume.pdf"
                download
              >
                View Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

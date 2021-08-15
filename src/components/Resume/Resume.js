import React from "react";

export default function Resume() {
  return (
    <section className="container-fluid">
      <h1>Resume</h1>
      <hr></hr>
      <div>
        <h2>Jefferson Kyle Canoy</h2>
      </div>
      <div>
        Full Stack Web Developer with a background in psychology and medicine to
        provide a unique approach on how to ensure those with disabilities are
        able to access all aspects of a website or software. Earned a
        certificate in Full Stack Web Development from the University of
        Washington’s Coding Bootcamp. Flexible problem-solver with a passion for
        developing high-quality applications. Strengths in teamwork,
        adaptability, and willingness to rise to the occasion.
      </div>

      <div className="d-flex flex-row">
        <div>
          <a href="www.linkedin.com/in/jeffersonkylecanoy">
            <img
              src="https://image.flaticon.com/icons/png/32/174/174857.png"
              alt="LinkedIn logo"
            ></img>
          </a>
        </div>
        <div>
          <a href="https://github.com/jkcanoy">
            <img
              src="https://image.flaticon.com/icons/png/32/733/733609.png"
              alt="GitHub logo"
            ></img>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/jkcanoy/react-portfolio/blob/main/src/components/Resume/JKC%20Resume.pdf"
            download
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

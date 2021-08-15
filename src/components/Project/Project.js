import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="img-container">
            <img
              className="card-img-top"
              src={props.image}
              alt={props.name}
            ></img>
          </div>
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <p>
              <a href={props.github}>
                <img
                  src="https://image.flaticon.com/icons/png/32/733/733609.png"
                  alt="GitHub Repo"
                  className="icon-img"
                ></img>
              </a>
              <a href={props.deployed}>
                <img
                  src="https://image.flaticon.com/icons/png/32/1006/1006771.png"
                  alt="Deployed Application"
                  className="icon-img"
                ></img>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

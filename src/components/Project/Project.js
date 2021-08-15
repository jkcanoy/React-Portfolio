import React from "react";

export default function projectCard(props) {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <img class="card-img-top" src={props.image} alt={props.name}></img>
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <a
              href={props.github}
              src="https://image.flaticon.com/icons/png/32/733/733609.png"
              alt="GitHub Repo"
            ></a>
            <a
              href={props.deployed}
              src="https://image.flaticon.com/icons/png/512/1006/1006771.png"
              alt="Deployed Application"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

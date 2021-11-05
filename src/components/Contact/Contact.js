import React, { useState } from "react";
import validateEmail from "../../utils/helpers";
import "./Contact.css";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(event) {
    //   Validate email address
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);

      if (!isValid) {
        setErrorMessage("Please enter a valid email address");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
  }
  function handleFormState(event) {
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="row form-container">
      <h1 className="col">CONTACT</h1>
      <hr></hr>
      <p className="infoURL">
        <p className="info">Email:</p> jkcanoy27@gmail.com
      </p>
      <p className="infoURL">
        <p className="info">GitHub:</p> https://github.com/jkcanoy
      </p>
      <p className="infoURL">
        <p className="info">LinkedIn:</p>{" "}
        https://linkedin.com/in/jeffersonkylecanoy
      </p>
      <form>
        <div className="form-div pt-3">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="form-div pt-3">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="text"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="form-div pt-3">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      </form>
      <div className="pt-3 pb-3 contact-submit">
        <button
          data-testid="button"
          className="btn"
          type="submit"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </div>
      <br></br>
    </section>
  );
}

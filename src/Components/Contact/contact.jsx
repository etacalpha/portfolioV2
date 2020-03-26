import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./contact.css";

export default function Contact() {
  const axios = require("axios");

  const [modalShow, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const notify = (message) => toast(message);

  const sendMessage = data => {
    axios
      .post(
        "https://xjpp0oho0k.execute-api.us-east-1.amazonaws.com/Prod/messages",
        {
          user: data.user,
          contact: data.contact,
          message: data.message
        }
      )
      .then(
        res => {
          notify("Message sent, thank you!");
          console.log(res);
        },
        err => {
          notify("There was a problem sending the message.");
          console.log(err);
        }
      );
  };

  const textArea = document.querySelector("textarea");
  const textRowCount = textArea ? textArea.value.split("\n").length : 0;
  const rows = textRowCount + 3;

  const { register, handleSubmit, errors, reset } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
    sendMessage(data);
    reset({
      errors: false,
      dirtyFields: false,
      dirty: false,
      isSubmitted: false,
      touched: false,
      isValid: false,
      submitCount: false
    });
    closeModal();
  };
  if (modalShow)
    return (
      <section className={"formHolder"}>
        <form onSubmit={handleSubmit(onSubmit)} className={"messageForm"}>
          <label htmlFor="user"> Name: </label>
          <input name="user" ref={register({ required: true })} />
          {errors.user && "Please enter your name."}

          <label htmlFor="contact"> Contact # / email: </label>
          <input name="contact" ref={register({ required: true })} />
          {errors.contact && "Email or phone number is required."}

          <label htmlFor="message"> Message: </label>
          <textarea
            name="message"
            ref={register({ required: true })}
            rows={rows}
            placeholder="Enter text here."
          />
          {errors.message && "Please enter a message."}
          <div className={"buttonContainer"}>
            {" "}
            <button onClick={closeModal} className={"button"}>
              Cancel
            </button>{" "}
            <input type="submit" className={"button"} />
          </div>
        </form>
      </section>
    );

  return (
    <article className="contact">
      <header>
        <p>
          Thank you for taking the time to review my website. Please feel free
          to email me. Have a great day.
        </p>
      </header>
      <section>
        <h4>City:</h4>
        <p>Amherst, OH</p>
      </section>
      <section>
        <h4>Email:</h4>
        <p>etacalpha@gmail.com</p>
      </section>
      <section>
        <h4>LinkedIn:</h4>
        <a href="https://linkedin.com/in/steven-beard">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </section>
      <section>
        <h4>GitHub:</h4>
        <a href="https://github.com/etacalpha">
          <FontAwesomeIcon icon={faGithubAlt} size="2x" />
        </a>
      </section>
      <button onClick={openModal} className={"button"}>
        Text me
      </button>
      <ToastContainer />
    </article>
  );
}

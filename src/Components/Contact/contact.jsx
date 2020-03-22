import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons"


import "./contact.css";

function Contact() {
  return (
    <article className="contact">
      <header>
        <p>
          Thank you for taking the time to review my website. Please feel free
          to email me.
           Have a great day.
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
        <a href="https://linkedin.com/in/steven-beard"><FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
</a>
      </section>
      <section>
        <h4>GitHub:</h4>
        <a href="https://github.com/etacalpha"><FontAwesomeIcon icon={faGithubAlt} size="2x"/></a>
      </section>
    </article>
  );
}
export default Contact;

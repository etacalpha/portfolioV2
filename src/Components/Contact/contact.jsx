import React from "react";

import "./contact.css";

function Contact() {
  return (
    <article className="contact">
      <header>
        <p>
          Thank you for taking the time to review my website. Please feel free
          to email me or leave a message on the google voice number below.
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
        <h4>Phone:</h4>
        <p>216-302-7843</p>
      </section>
      <section>
        <h4>LinkedIn:</h4>
        <a href="www.linkedin.com/in/steven-beard">icon</a>
      </section>
      <section>
        <h4>GitHub:</h4>
        <a href="https://github.com/etacalpha">icon</a>
      </section>
    </article>
  );
}
export default Contact;

import React from "react";

import "./contact.css";

function Contact() {
  return (
    <article className="contact">
      <header>
        <h1>Contact Me!!</h1>
      </header>
      <table>
        <tbody>
          <tr>
            <td>City</td>
            <td>Amherst, OH</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>etacalpha@gmail.com</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>216-302-7843</td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>
              <a href="www.linkedin.com/in/steven-beard">steven beard</a>
            </td>
          </tr>
          <tr>
            <td>Github</td>
            <td>
              <a href="https://github.com/etacalpha">
                https://github.com/etacalpha
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
export default Contact;

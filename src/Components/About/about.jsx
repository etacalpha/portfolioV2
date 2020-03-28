import React from "react";

import "./about.css";

function Nav() {
  return (
    <article className="about">
      <section className="img">
        <picture>
          <img
            src="../images/pc.jpg"
            alt="of developer"
          ></img>
        </picture>
      </section>
      <section className="info">
      <section>
          <h4><span className={'standout'}>Who</span> I am</h4>
          <p>
            I am a father of 3 and a husband. My life has been dedicated to the service of others,
            first as a soldier, then as a Emergency Responder. I could not continue with the phyiscal 
            demands of these professions due to injuries I recieved while serving in the army overseas. 
            I taught myself how to use linux, and attended a coding bootcamp to become more proficient 
            at development. Now I am developing (Saas) software using AWS (Dyanmo, Athena, Lambda, 
            StepFunctions, API Gateway ...) for the backend/infrastructure and React.js.
          </p>
        </section>
        <section>
          <h4><span className={'standout'}>What</span> I bring</h4>
          <p>
            I have a documented history of being a member of a team with the ability to assume leadership roles.
            These are exemplified by my various roles beginning at the junior level and then being 
            asked to take on more responsibility. <br></br><br></br>
              - Junior AWS developer to AWS manager<br></br><br></br>
              - Emergency Medical Technician to Paramedic crew leader<br></br><br></br>
              - Infantry soldier to infantry squad leader
          </p>
        </section>
        <section>
          <h4><span className={'standout'}>Why</span> I develop</h4>
          <p>
          I would love to leave a mark on the world and create software that leaves a lasting change. That's not
          to say that the simple things are irrelevant. We all have had to interact with software that made the 
          actual task more difficult. I would be satisfied in knowing that I created something that makes even the 
          mundane task more enjoyable for people therefore increasing the quality of their lives.
          </p>
        </section>
      </section>
    </article>
  );
}
export default Nav;

import React from "react";

import "./about.css";

function Nav() {
  return (
    <article className="about">
      <section className="img">
<<<<<<< HEAD
        <picture>
          <img
            src="https://placekitten.com/700/900"
            alt="of developer"
          ></img>
        </picture>
=======
      <picture>
<img
sizes="(max-width: 1400px) 100vw, 1400px"
srcSet="
./images/pc_vyu4oh_c_scale,w_200-min.jpg 200w,
./images/pc_vyu4oh_c_scale,w_369-min.jpg 369w,
./images/pc_vyu4oh_c_scale,w_500-min.jpg 500w,
./images/pc_vyu4oh_c_scale,w_613-min.jpg 613w,
./images/pc_vyu4oh_c_scale,w_711-min.jpg 711w,
./images/pc_vyu4oh_c_scale,w_810-min.jpg 810w,
./images/pc_vyu4oh_c_scale,w_894-min.jpg 894w,
./images/pc_vyu4oh_c_scale,w_974-min.jpg 974w,
./images/pc_vyu4oh_c_scale,w_1049-min.jpg 1049w,
./images/pc_vyu4oh_c_scale,w_1133-min.jpg 1133w,
./images/pc_vyu4oh_c_scale,w_1199-min.jpg 1199w,
./images/pc_vyu4oh_c_scale,w_1269-min.jpg 1269w,
./images/pc_vyu4oh_c_scale,w_1339-min.jpg 1339w,
./images/pc_vyu4oh_c_scale,w_1399-min.jpg 1399w,
./images/pc_vyu4oh_c_scale,w_1400-min.jpg 1400w"
src="pc_vyu4oh_c_scale,w_1400-min.jpg"
alt="pic"/>
</picture>
>>>>>>> DEV
      </section>
      <section className="info">
      <section>
          <h4>Who I am</h4>
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
          <h4>What I bring</h4>
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
          <h4>What I want</h4>
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

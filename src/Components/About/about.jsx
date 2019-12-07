import React from "react";

import "./about.css";

function Nav() {
  return (
    <main className="about">
      <section className="img">
        <picture>
          <source
            media="(max-width: 410px)"
            srcSet="https://placeholder.pics/svg/220X300"
          />
          <source
            media="(max-width: 514px)"
            srcSet="https://placeholder.pics/svg/300X300"
          />
          <source
            media="(max-width: 757px)"
            srcSet="https://placeholder.pics/svg/400X300"
          />
          <source
            media="(max-width: 988px)"
            srcSet="https://placeholder.pics/svg/600X350"
          />
          <source
            media="(max-width: 1033px)"
            srcSet="https://placeholder.pics/svg/600X1000"
          />
          <img
            src="https://via.placeholder.com/700X1000"
            alt="of developer"
          ></img>
        </picture>
      </section>
      <article className="info">
        <section>
          <h4>Provide</h4>
          <p>
            Incididunt pariatur dolore cillum pariatur magna pariatur ut ullamco
            exercitation aute proident eiusmod eu deserunt. Excepteur aute
            laborum eu officia labore. Sunt non minim adipisicing consectetur
            aute labore magna dolore tempor. Irure irure nulla eu ex officia
            irure proident. Lorem mollit officia reprehenderit laborum. Cillum
            nisi irure occaecat reprehenderit deserunt ut Lorem. Voluptate
            cupidatat veniam id anim dolore aliquip duis ad.
          </p>
        </section>
        <section>
          <h4>History</h4>
          <p>
            Incididunt pariatur dolore cillum pariatur magna pariatur ut ullamco
            exercitation aute proident eiusmod eu deserunt. Excepteur aute
            laborum eu officia labore. Sunt non minim adipisicing consectetur
            aute labore magna dolore tempor. Irure irure nulla eu ex officia
            irure proident. Lorem mollit officia reprehenderit laborum. Cillum
            nisi irure occaecat reprehenderit deserunt ut Lorem. Voluptate
            cupidatat veniam id anim dolore aliquip duis ad.
          </p>
          <p>
            Incididunt pariatur dolore cillum pariatur magna pariatur ut ullamco
            exercitation aute proident eiusmod eu deserunt. Excepteur aute
            laborum eu officia labore. Sunt non minim adipisicing consectetur
            aute labore magna dolore tempor. Irure irure nulla eu ex officia
            irure proident. Lorem mollit officia reprehenderit laborum. Cillum
            nisi irure occaecat reprehenderit deserunt ut Lorem. Voluptate
            cupidatat veniam id anim dolore aliquip duis ad.
          </p>
        </section>
        <section>
          <h4>Future</h4>
          <p>
            Proident labore nulla sint aute ut occaecat pariatur duis ipsum in
            excepteur. Ipsum ex culpa quis adipisicing. Duis incididunt
            consequat voluptate officia do laborum veniam consequat dolore aute
            anim voluptate esse reprehenderit. Ea nisi elit cillum laboris.
            Aliquip consectetur sit ex et elit sit labore nulla duis nisi
            ullamco ex eu exercitation. Laborum veniam excepteur reprehenderit
            consectetur. Reprehenderit esse cillum tempor velit ad pariatur.
          </p>
          <p>
            Proident labore nulla sint aute ut occaecat pariatur duis ipsum in
            excepteur. Ipsum ex culpa quis adipisicing. Duis incididunt
            consequat voluptate officia do laborum veniam consequat dolore aute
            anim voluptate esse reprehenderit. Ea nisi elit cillum laboris.
            Aliquip consectetur sit ex et elit sit labore nulla duis nisi
            ullamco ex eu exercitation. Laborum veniam excepteur reprehenderit
            consectetur. Reprehenderit esse cillum tempor velit ad pariatur.
          </p>
        </section>
      </article>
    </main>
  );
}
export default Nav;

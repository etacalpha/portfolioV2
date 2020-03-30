import React from "react";

import "./index.css";

export default function Index() {
  return (
    <article className={"index"}>
      <h2 id={'firstName'}>Steven Beard</h2>
      {/* <h2 id={'lastName'}>Beard</h2> */}
      <p>an <span className={'standout'}> AWS Developer</span></p>
    </article>
  );
}

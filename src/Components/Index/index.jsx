import React, { useState, useEffect } from "react";

import "./index.css";

export default function Index() {
  const images = [
    "https://placekitten.com/1000/1000",
    "https://placekitten.com/g/1000/1000"
  ];

  const [data, setData] = useState({ urlString: 0 });

  useEffect(() => {
    
    const interval = setInterval(() => {
      setData({urlString : data.urlString===0?1:0})
    }, 10000);

    return () => clearInterval(interval);
  }, [data.urlString]);

  return (
    <article>
      <section id="index">
        <img src={images[data.urlString]} alt="cat"/>
      </section>
      <section id="overlay"></section>
      <section id="info">
        <p>
          <strong>Welcome</strong> to my portfolio
        </p>
      </section>
    </article>
  );
}

import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <article className={"resume"}>

      <section className={"left"}>
        <h2>Work experience</h2>

        <section>
          <h2 className={"standout"}>
              AWS Developer <span className={'numbers'}>09/2019 - present</span>
          </h2>
          <h3>Software Pricing Partners, Remote USA</h3>
          <ul>
            <li>
              Engineered and implemented entirely serverless data ingestion and
              procrssing architectures, using microservice patterns implemented
              with AWS services such as S# Events, Vloud Watch Events, SNS
              Lambda/Python, Dynamo, API Gateway, and Step Functions
            </li>
            <li>
              Implemented a well architected solution for performance at scale ,
              using AWS services such as Cloud Fron, Route 53, S3, Athena, Glue,
              Lambda/Python, and DynamoDb
            </li>
            <li>
              Implemented DevOps and Support across the team using AWS services
              such as Cloud Formation, Code Pipeline, GitHub and SES
            </li>
            <li>
              Implemented proprietary monetization algorithms and platform
              health checks, using a combination of AWS Step Functions,
              React.js, D3.js and Chart.js
            </li>
          </ul>
        </section>
        <section>
          <h2 className={"standout"}>
            {" "}
              AWS Developer <span className={'numbers'}>04/2019 - 06/2019</span>
          </h2>
          <h3>Intellicog, Remote USA</h3>
          <ul>
            <li>
              Implemented solution to track country stock levels and rates of
              consumption, using a serverless architecture and combination of
              S3, D3.js and Chart.js
            </li>
            <li>
              Impemented a well architected solution for performance at scale
              including from the continent of Africa, using AWS services such as
              Cloud Front, Route 53, S3 / Glacier, Athena, Glue, Lambda /Python
              and Dynamo
            </li>
            <li>
              Implemented DevOps and Support across the team using AWS services
              such as Cloud Formation, Code Pipeline, GitHub and SES
            </li>
          </ul>
        </section>
        <section>
          <h2 className={"standout"}>
            {" "}
              Software Engineer Volunteer <span className={'numbers'}>09/2018 - 01/2019</span>
          </h2>
          <h3>Hue Jackson Foundation / iFuse Solutions, Remote USA</h3>
          <ul>
            <li>
              Created initial prototype for an application which allowed the
              community to list items they were willing to donate. NPOs (after
              verification by EIN) could then search the listings for needed
              items.
            </li>
            <li>
              Created architecture for application using AWS services such as
              API Gateway, Lambda / Python, Dynamo, EC2, Docker, and Java8.
            </li>
            <li>
              Interfaced with customer to establish requirements and design for the application.
            </li>
          </ul>
        </section>
        <section>
          <h2 className={'standout'}>
            {" "}
              Squad Leader <span className={'numbers'}>10/2002 - 05/2010</span>
          </h2>
          <h3>US Army, Multiple locations</h3>
          <ul>
            <li>
              Lead 9-30 soldiers at a time while being responsible for every aspect of their lives.
            </li>
            <li>
                Assited in the planning and execution of 300+ operations in combat
            </li>
            <li>
            Maintained 3,000,000 dollars worth of equipment
            </li>
          </ul>
        </section>
      </section>
      <section className={"right"}>
       
        <section>

          <h2>Skills</h2>
          <ul>
            <h3>Cloud Services</h3>
            <li>AWS</li>
            <li>Microservices</li>
            <li>Architecture</li>
            <li>APIs</li>
          </ul> 
          <ul>
          <h3>Languages</h3>
            <li>Python</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul>
            <h3>Frameworks</h3>
            <li>Angular.js</li>
            <li>Spring Boot</li>
          </ul>
          <ul>
            <h3>Libraries</h3>
            <li>React.js</li>
            <li>D3.js</li>
          </ul>
          <ul>
            <h3>Methodologies</h3>
            <li>Agile</li>
            <li>DevOps</li>
          </ul>
        </section>
        <a href="./steven-beard.pdf" download>Download Resume</a>

      </section>

    </article>
  );
}

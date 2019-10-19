import React, { Fragment } from "react";
import styled from "styled-components";
import worldPaint from "../img/world_paint_1280_40.jpg";
import worldPaint2 from "../img/world_paint_min.jpg";
import GithubLogo from "../img/github_logo.png";
import { theme } from "../lib/color";
import { media } from "../lib/style";
import CodeSnippet from "../lib/snippet";

// import imgDevopsFriendly from "../img/devops.png";
// import imgDashboard from "../img/dashboard.png";
// import imgProductionReady from "../img/done.png";
// import imgDeveloperFriendly from "../img/developer.png";
// import imgTimeSaver from "../img/undraw_timeline_9u4u.png";
// import imgPowerfulFunctions from "../img/undraw_to_the_moon_v1mv.png";

//
// see font of https://elements.envato.com/single on-ui-pack-EFCPEQ
//
// Why? PubSub is a well-established comminucation/architectural pattern. TurtleQueue
//
// the world is yours
// think global act local
// pubsub for developers
// Smart messaging for smart developpers
// Smart messaging for developpers
// focus on delivering features with turtlequeue
// landing pages:
// Doing to messaging what Rails is to Ruby
// Doing to messaging what express is to node

const BackgroundImage = styled.div`
  ${props => props.className} {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)),
      url(${worldPaint}), url(${worldPaint2});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    /* filter: grayscale(65%); */
    background-repeat: no-repeat;
    position: relative;
    /* now elements are inside the background image
  * doesn't feel right - todo see how to refactor this */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 3px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${theme.darkShade};
    font-size: 70%;
  }

  a {
    color: ${theme.light};
  }
`;

const Home = styled.div`
  ${props => props.className} {
    height: 100%;
    width: 100%;
    color: white;
  }

  .valueProp {
    margin-top: 5%;
    font-size: 250%;
    text-align: center;
    line-height: 1.25em;
    font-weight: 500;
    ${media.tablet`font-size: 350%;
line-height:1.7em; `}
  }

  .catchy {
    font-size: 150%;
    text-align: center;
    font-weight: 500;
  }

  .heroDescription {
    max-width: 80%;
    font-weight: 600;
  }

  ul {
    list-style: none;
  }

  ul li {
    position: relative;
    padding-bottom: 10px;
  }

  ul.chevrons li:before {
    content: "";
    position: absolute;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    width: 6px;
    height: 6px;
    top: calc(50% - 4px);
    left: -20px;
    transform: translateY(-50%) rotate(-45deg);
  }
`;

const GhForm = styled.form`
  ${props => props.className} {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: right;
    font-size: 24px;
  }
  .githubIcon {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: auto;
    display: inline-block;
    background-image: url(${GithubLogo});
    background-size: contain;
    display: flex;
    align-items: stretch;
  }
  button:hover {
    border-color: rgba(27, 31, 35, 0.5);
  }
  button {
    background-color: #28a745;
    width: 250px;
    height: 100px;
    display: flex;
    align-items: stretch;
    border-radius: 6px;
    padding: 0.75em 1.25em;
    color: #fff;
    background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
    border: 1px solid rgba(27, 31, 35, 0.2);
    cursor: pointer;
  }
`;

const Cards = styled.div`
${props => props.className} {
   justify-content: space-between;
   flex-wrap: wrap;
  }
`

const Card = styled.div`
${props => props.className} {
    width: 200px;
    display: inline-block;
    margin: 20px;
  }

div {
 font-weight: 600;
}
`

export default () => (
  <Fragment>
    <Home>
      <BackgroundImage>
        <h1 className="valueProp">Cross platform messaging</h1>
        <h2 className="catchy">Messaging for the modern web</h2>
        <p className="heroDescription"> TurtleQueue is Message Queue Broker for all: web, mobile, servers, micro-services, IoT... can now talk the same language. Serverless, with built-in persistence and advanced querying and filtering.</p>
        <GhForm action="/security/oauth2/initiate-github" method="POST">
          <button type="submit">
            <i className="githubIcon" />
            Log in with Github
          </button>
        </GhForm>

        {/* <CodeSnippet /> */}
        <Cards>
          <Card>
            {/* <img src={imgDevopsFriendly} alt="Devops friendly"/> */}
            <div>Devops friendly</div>
            <p>Choose from hosted or any cloud - private or public without external dependencies. We run on kubernetes.</p>
          </Card>

          <Card>
            {/* <img src={imgProductionReady} alt="Production ready"/> */}
            <div>Production ready</div>
            <p>Distributed, with no single point of failure. Acknowledgements, automatic reconnection, authentication and fine-grained authorization. Built-in persistence and introspection via tracing and SQL analytics.</p>
          </Card>

          <Card>
            {/* <img src={imgDeveloperFriendly} alt="Developer friendly"/> */}
            <div>Developer friendly</div>
            <p>What you send is what you get. Automatic channel creation. Publish-subscribe or response-request. You won't have to learn about exchanges, routes, dead-letter queues, rebalancing, sharding (unless you want to).</p>
          </Card>

          <br/>

          <Card>
            {/* <img src={imgTimeSaver} alt="Time saver"/> */}
            <div>Time saver</div>
            <p>Ready for production or rapid prototyping. Send your first messages in under a minute.</p>
          </Card>

          <Card>
            {/* <img src={imgPowerfulFunctions} alt="Powerful functions"/> */}
            <div>Powerful functions</div>
            <p>Delayed messages. Channels regex selection (not just wildcard). Built-in prioritization. Advanced filter like geolocalization and JsonPath.</p>
          </Card>


          <Card>
            {/* <img src={imgDashboard} alt="Dashboard"/> */}
            <div>Dashboard</div>
            <p>Dashboard for monitoring, statistics, and one-off operations.</p>
          </Card>
</Cards>
        <figcaption>
          <a href="https://goo.gl/a1njLp">Image CC BY 2.0 </a>
        </figcaption>
      </BackgroundImage>
    </Home>
  </Fragment>
);

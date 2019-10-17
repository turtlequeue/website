import React, { Fragment } from "react";
import styled from "styled-components";
import worldPaint from "../img/world_paint_1280_40.jpg";
import worldPaint2 from "../img/world_paint_min.jpg";
import GithubLogo from "../img/github_logo.png";
import { theme } from "../lib/color";
import { media } from "../lib/style";
import CodeSnippet from "../lib/snippet";

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

export default () => (
  <Fragment>

  <h1>
  Contact us!
</h1>
  <ul>
  <li>by email: turtle@turtlequeue.com</li>
  <li>by chat: click on the </li>
  </ul>




  </Fragment>
);

import React, { Fragment } from "react";
import styled from "styled-components";
// https://all-free-download.com/free-vector/download/abstract-blue-background-vector-set_551341.html
// licence Creative commons attribution license
import lpBg from "../img/el_blue_background.jpg";
import GithubLogo from "../img/github_logo.png";
import { theme } from "../lib/color";
import { media } from "../lib/style";

const BackgroundImage = styled.div`
  ${props => props.className} {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),
      url(${lpBg});
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

  .sellingPoints a {
    color: #eee;
    font-family: "Open Sans", sans-serif;
    font-size: 120%;
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
    padding: 15px;
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
    padding: 15px;
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

const SignEmail = styled.form`
  ${props => props.className} {
    margin: 18px;
  }

  [type="email"] {
    padding: 8px;
    min-width: 250px;
    margin: 0;
    border-color: grey;
    border-width: 0px;
    border-radius: 3px 0px 0px 3px;
  }

  [type="text"] {
    padding: 8px;
    background-color: white;
    border-color: #1c131e;
    border-radius: 3px 0px 0px 3px;
    border-width: 0px;
    min-width: 200px;
  }

  [type="submit"] {
    padding: 8px;
    background-color: cadetblue;
    border-color: #1c131e;
    border-radius: 0px 3px 3px 0px;
    border-width: 0px;
  }

  [type="submit"]:focus,
  [type="email"]:focus {
    border-color: rgba(126, 239, 104, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(126, 239, 104, 0.6);
    outline: 0 none;
  }
`;

// <pre>
// var turtlequeue = require('turtlequeue');
// turtlequeue.subscribe({"source": 'twitter',
//                  "search": 'javascript'},
//                 (err, data) => { displayTweet(data)});
// </pre>

export default () => (
  <Fragment>
    <Home>
      <BackgroundImage>
        <h1 className="valueProp">Serverless messaging</h1>
        <h2 className="catchy">Hosted socket.io-like platform</h2>
        <GhForm action="/security/oauth2/initiate-github" method="POST">
          <button type="submit">
            <i className="githubIcon" />
            Log in with Github
          </button>
        </GhForm>
        <ul className="sellingPoints">
          <li>
            <a href="https://turtlequeue.com/doc/latest/how_turtlequeue_can_help.html">
              Serverless productivity boost
            </a>
            <p>Get started in minutes, be productive in hours.</p>
          </li>
          <li>
            <a href="https://turtlequeue.com/doc/latest/how_turtlequeue_can_help.html">
              Flexible messaging
            </a>
            <p>
              Messages are persisted and can be replayed (last 10 messages, last
              hour), or can be sent with a delay.
            </p>
          </li>
          <li>
            <a href="https://turtlequeue.com/doc/latest/how_turtlequeue_can_help.html">
              SQL real-time analytics
            </a>
            <p>We manage the infrastructure. You own the data.</p>
          </li>
          <li>
            <a href="https://turtlequeue.com/doc/latest/how_turtlequeue_can_help.html">
              (＾◇＾）ノ Easy as GET and POST
            </a>
            <p>
              {" "}
              Our API can be used with our SDK or with a simple cURL command{" "}
            </p>
          </li>
        </ul>
        Playground:{" "}
        <a href="https://esnextb.in/?gist=d48a67bb94b8142220901623cdf4d2ec">
          {" "}
          https://esnextb.in/?gist=d48a67bb94b8142220901623cdf4d2ec
        </a>
        <h2>Get a sneak peek</h2>
        See what we've been up to on and claim first dibs on all new feature
        launches. No spam 🤘
        <SignEmail action="/email/subscribe/mailing_list" method="POST">
          <input
            type="text"
            name="email"
            placeholder="letsgetweird@gmail.com"
          />
          <input type="submit" value="Subscribe" />
        </SignEmail>
        <p />
        <figcaption>
          <a href="http://bit.ly/2WGbCdA">Image CC BY 2.0 </a>
        </figcaption>
      </BackgroundImage>
    </Home>
  </Fragment>
);

﻿//-*- coding: utf-8-with-signature-unix -*-

import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";
// import Dynamic from "containers/Dynamic";

import styled, { createGlobalStyle } from "styled-components";

import logoImgWhite from "./img/turtle_world_white.png";
import { theme } from "./lib/color.js";
import { AnalyticsJsSnippet } from "./lib/analytics.js";
import { CrispSnippet } from "./lib/crisp.js";

import "normalize.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

// Pricing see
// https://www.ventureharbour.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-05-at-11.22.06.png
// logo see http://www.nuageapp.com/
// (done with CSS )
//
// use system font
// https://css-tricks.com/snippets/css/system-font-stack
//
const GlobalStyle = createGlobalStyle`
* {
    scroll-behavior: smooth;
  }

html, body{
  width: 100%;
  height: 100%;
  font-family:InterUI,-apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Oxygen,Ubuntu,Cantarell,Open Sans,sans-serif;
  font-weight: 700;
  text-transform: none;
  background-color: ${theme.darkShade};
}
#root {
  width:100%;
  height:100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
}`;

const Footer = styled.footer`
  ${props => props.className} {
    padding: 1rem;
    background: ${theme.darkShade};
  }
  .love {
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
  }

  // to avoid the crisp chat being over the footer
  @media only screen and (min-height: 560px) {
    ${props => props.className} {
      min-height: 42px;
    }
  }
`;

//
// TODO  see https://blog.christopherianmurphy.com/2016/01/responsive-pure-css-menu/
// (seems like it uses a checkbox trick to be pure CSS)
// or maybe https://react-bootstrap.github.io/components/navbar/#brand
//

const Nav = styled.nav`
  ${props => props.className} {
    background-color: ${theme.darkShade};
    color: white;
    padding: 1rem;
    flex: 1;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-weight: bold;
    padding: 10px;
  }

  .logo {
    padding-right: 10px;
  }

  a:hover,
  .active {
    color: #fff;
  }

  .active {
    border-bottom: 2px solid white;
  }

  .mainLink {
    margin-right: 22px;
  }
`;

const Main = styled.main`
  ${props => props.className} {
    color: #444;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e1ffff+0,e1ffff+7,e1ffff+12,fdffff+12,e6f8fd+30,c8eefb+54,bee4f8+75,b1d8f5+100;Blue+Pipe+%232 */
    background-color: #dae1e7;
    min-height: calc(100vh - 135px);
  }
`;

function App() {
  return (
    <Root>
      <GlobalStyle />
      <Nav>
        <Link className="mainLink" exact="true" to="/">
          <img
            className="logo"
            height="10"
            src={logoImgWhite}
            alt="Happy turtle, all the way"
          />
        </Link>
        {/* <Link to="/pricing">
           pricing
           </Link> */}
        {/* <Link to="https://github.com/turtlequeue">
           Github
           </Link> */}
        <a href="/doc/latest/overview.html">documentation</a>
        <a href="https://github.com/turtlequeue/">Github</a>
      </Nav>

      <Main>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            {/* <Dynamic path="dynamic" /> */}
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Main>

      <Footer>
        <div className="love">
          <a href="https://www.startupschool.org/companies/yccertificateturtlequeue">
            YC SS 2018
          </a>
        </div>
        <div className="love">
          made by turtles for turtles with
          <span role="img" aria-label="Wine">
            &#127863;
          </span>
          in London
        </div>
      </Footer>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: AnalyticsJsSnippet }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: CrispSnippet }}
      />
    </Root>
  );
}

if (typeof document !== "undefined") {
  const hotjar = require("react-hotjar").hotjar;
  const hotJarConfig = { hjid: 1431493, hjsv: 6 };
  hotjar.initialize(hotJarConfig.hjid, hotJarConfig.hjsv);
}

export default App;

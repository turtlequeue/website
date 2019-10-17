import React from "react";
import styled from "styled-components";
import worldPaint from "../img/world_paint_1280_40.jpg";
import worldPaint2 from "../img/world_paint_min.jpg";
import GithubLogo from "../img/github_logo.png";
import { theme } from "../lib/color";
import { media } from "../lib/style";

import imgMovingForward from "../img/undraw_moving_forward_lhhd.png";
// other logins

const Login = styled.div`
  .valueProp {
    margin-top: 5%;
    font-size: 250%;
    text-align: center;
    line-height: 1.25em;

    ${media.tablet`font-size: 350%;
line-height:1.7em; `}
  }

  h2.valueProp {
    font-size: 200%;
  }
`;

export default () => (
  <Login>
    <img src={imgMovingForward} alt="Moving forward" />
  </Login>
);

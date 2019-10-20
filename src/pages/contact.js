import React, { Fragment } from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
`

export default () => (
  <Fragment>
    <Title>Contact us!</Title>
    <ul>
      <li>by email: turtle@turtlequeue.com</li>
      <li>by chat: click on the chat icon on the bottom right corner</li>
    </ul>
  </Fragment>
);

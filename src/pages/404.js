import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  ${props => props.className} {
    text-align: center;
    vertical-align: middle;
  }
`;

export default () => (
    <div>
        <Title>404 - Oh no's! We couldn't find that page :(</Title>
    </div>
);

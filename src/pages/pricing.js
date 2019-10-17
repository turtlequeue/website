import React from "react";
import styled from "styled-components";
import { media } from "../lib/style";
import imgCart from "../img/undraw_add_to_cart_vkjp.png";
import imgSmallTurtle from "../img/turle_small.min.png";
import imgMediumTurtle from "../img/turle_small.min.png";
import imgWorldTurtle from "../img/turtle_big.min.png";

//
// http://www.javascriptkit.com/dhtmltutors/css-pricing-table.shtml
// and https://www.ably.io/pricing
// https://dependabot.com/#pricing
//   /* background-image: url(${imgCart}); */

const Pricing = styled.div`
  ${props => props.className} {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .valueProp {
    padding-top: 0;
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

const Plans = styled.div`
  ${props => props.className} {
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    justify-content: center;
  }

  ul.plan {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* color: black; */
    width: 260px; /* width of each table */
    margin-right: 20px; /* spacing between tables */
    margin-bottom: 1em;
    border: 1px solid gray;
    transition: all 0.5s;
    border-radius: 16px;
    box-shadow: 0 12px 26px 0 rgba(178, 178, 178, 0.33);
    background-color: rgba(255, 255, 255, 0.95);
  }

  .planFeature {
    font-size: 16.2px;
    line-height: 34px;
    display: block;
    color: #617a90;
    letter-spacing: 0.77px;
    margin: 15px 0px 15px 0px;
    text-align: center;
  }
  .planFeature span {
    display: block;
  }

  .subtitle {
    font-size: 16.2px;
    text-transform: uppercase;
    letter-spacing: 0.44px;
    margin-top: 28px;
    text-align: center;
  }

  .plan img {
    padding: 5%;
    max-height: 150px;
    min-height: 120px;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .main {
    font-size: 42.3px;
    color: #394451;
    text-align: center;
    margin: 10px;
  }

  .timePeriod {
    font-size: 18.3px;
    padding-bottom: 10px;
  }

  .extra {
    display: inline-block;
    text-align: center;
    font-size: 17.1px;
    color: #586b95;
    letter-spacing: 0.1px;
    margin-top: 8px;
  }
`;

const Free = styled.ul`
  .subtitle {
    color: #ff8947;
  }
`;

const Pro = styled.ul`
  .subtitle {
    color: #3ecf8e;
  }
`;

const Custom = styled.ul`
  .subtitle {
    color: #2d74de;
  }
`;

const SignUpButton = styled.form`
  ${props => props.className} {
    width: 100%;
    max-width: 250px;
    display: flex;
    text-align: right;
    font-size: 16px;
    border-radius: 64px;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  button:hover {
    border-color: rgba(27, 31, 35, 0.5);
  }

  button {
    background-color: #28a745;
    align-items: stretch;
    border-radius: 16px;
    padding: 0.75em 1.25em;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const QuoteA = styled.a`
  ${props => props.className} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    text-decoration: none;
  }

  button:hover {
    border-color: rgba(27, 31, 35, 0.5);
  }

  button {
    background-color: #28a745;
    align-items: stretch;
    border-radius: 16px;
    padding: 0.75em 1.25em;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const ImgSmallPlan = styled.img`
  ${props => props.className} {
    width: 35%;
    transform: rotate(170deg);
  }
`;
const ImgMediumPlan = styled.img`
  ${props => props.className} {
    width: 50%;
    transform: rotate(160deg);
  }
`;

const ImgBigPlan = styled.img`
  ${props => props.className} {
    width: 75%;
  }
`;
const CartImg = styled.img`
  ${props => props.className} {
    width: 100%;
  }
`;

const Billing = styled.div``;

export default () => (
  <Pricing>
    <h1 className="valueProp"> Simple and Transparent Pricing</h1>

    <Plans>
      <Free className="plan">
        <span className="subtitle">Personal</span>
        <span>
          <ImgSmallPlan src={imgSmallTurtle} alt="small turtle" />
        </span>

        <span className="main">Free</span>

        <span className="extra timePeriod">forever</span>

        <div className="planFeature">
          <span>10K messages/month</span>
          <span>500MB data persistence</span>
        </div>

        <SignUpButton action="/security/oauth2/initiate-github" method="POST">
          <button type="submit">Use TurtleQueue for free</button>
        </SignUpButton>
      </Free>

      <Pro className="plan">
        <span className="subtitle">Pro</span>
        <div>
          <ImgMediumPlan src={imgMediumTurtle} alt="medium turtle" />
        </div>

        <span className="main">£50 </span>
        <span className="extra timePeriod">per month</span>

        <span className="extra">Launch offer!</span>

        <div className="planFeature">
          <span>1M messages/month</span>
          <span>50GB data persistence</span>
        </div>

        <SignUpButton action="/security/oauth2/initiate-github" method="POST">
          <button type="submit">Free while in Beta</button>
        </SignUpButton>
      </Pro>

      <Custom className="plan">
        <span className="subtitle custom">Enterprise</span>
        <div>
          <ImgBigPlan src={imgWorldTurtle} alt="Pro plan - turtle" />
        </div>

        {/* OR pay as you go? */}

        <span className="main">£149 </span>
        <span className="extra timePeriod">per month</span>

        <span className="extra">Scale and Save</span>

        <div className="planFeature">
          <span>10M messages/month</span>
          <span>500GB data persistence</span>
        </div>

        <QuoteA href="mailto:turtle@turtlequeue.com?subject=quote">
          <button>Free while in Beta</button>
        </QuoteA>
      </Custom>
    </Plans>
    {/* <CartImg src={imgCart} alt="Cart image"/> */}
  </Pricing>
);
/*
 *             <Billing>
 *             <h2 className="valueProp">Simple and comprehensive billing</h2>
 *
 *             <h3>Major cards supported</h3>
 *
 *             <h3>Fair pricing</h3>
 *
 *             At TurtleQueue, we believe that customer relationships are essential for every business. All our plans have been designed to fit most business needs. If you would like to discuss another arrangementm feel free to reach us!
 *
 *             <h3>Cancel anytime</h3>
 *             Cancel anytime after you subscribe to a plan. You are only committed to pay
 *             the month you subscribed to, and no further.
 *                   <h3>Consolidated billing</h3>
 *
 *             TurtleQueue bills you once per month, per payment method. We accept most credit cards, as well as PayPal. All bills are consolidated across websites.
 *                                                                                                               </Billing> */

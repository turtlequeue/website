import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { AnalyticsJsSnippet } from "../lib/analytics.js";
import { CrispSnippet } from "../lib/crisp.js";

// TODO airtable's "try for free"
// that goes to the signup bump

function Pricing() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="PubSub messaging service">
      <main>
      <section className="pricing" id="pricing">
        <div className="pricing__wrapper container">
          <h2 className="g-title">Simple and Transparent Pricing</h2>
          <p className="pricing__subtitle">Choose your ideal plan</p>

          <div className="pricing__content">
            <div className="pricing-item">
              <h5 className="pricing-item__type">Personal</h5>
              <h2 className="pricing-item__price">Free</h2>
              <h6 className="pricing-item__time">forever</h6>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">1K</span>{" "}
                messages/month
              </p>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">100MB</span> data
                persistence
              </p>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">2</span> number of channels
              </p>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">2</span> number of API Keys
              </p>

              <form
                className="g-button"
                action="/security/oauth2/initiate-github"
                method="POST"
              >
                <button className="g-button__text" type="submit">
                  Use for free
                </button>
              </form>
            </div>

            <div className="pricing-item pricing-item_pro">
              <h5 className="pricing-item__type">Pro</h5>
              <h2 className="pricing-item__price">&#163;50</h2>
              <h6 className="pricing-item__time">Per month</h6>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">500K</span>{" "}
                messages/month
              </p>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">50GB</span> data
                persistence
              </p>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">200</span> number of channels
               </p>
               <p className="pricing-item__data">
               <span className="pricing-item__data_bold">20</span> number of API Keys
               </p>
               <p className="pricing-item__data">
                <span className="pricing-item__data_bold"></span> Access to Functions
               </p>

              <form
                className="g-button"
                action="/security/oauth2/initiate-github"
                method="POST"
              >
                <button
                  className="g-button__text g-button__text_fill"
                  type="submit"
                >
                  Free while in beta
                </button>
              </form>
            </div>

            <div className="pricing-item">
              <h5 className="pricing-item__type">Enterprise</h5>
              <h2 className="pricing-item__price">&#163;149</h2>
              <h6 className="pricing-item__time">Per month</h6>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">5M</span>{" "}
                messages/month
              </p>
              <p className="pricing-item__data">
                <span className="pricing-item__data_bold">500GB</span> data
                persistence
              </p>
              <p className="pricing-item__data">
              <span className="pricing-item__data_bold">2000</span> number of channels
              </p>
              <p className="pricing-item__data">
              <span className="pricing-item__data_bold">Unlimited</span> number of API Keys
              </p>
              <p className="pricing-item__data">
              <span className="pricing-item__data_bold"></span> Access to Functions
              </p>

              <form
                className="g-button"
                action="/security/oauth2/initiate-github"
                method="POST"
              >
                <button className="g-button__text" type="submit">
                  Free while in beta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </main>
      <script
        type="text/javascript"
        async
        dangerouslySetInnerHTML={{ __html: AnalyticsJsSnippet }}
      />
      <script
        type="text/javascript"
        async
        dangerouslySetInnerHTML={{ __html: CrispSnippet }}
      />
    </Layout>
  );
}

export default Pricing;

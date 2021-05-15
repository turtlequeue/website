import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { AnalyticsJsSnippet } from "../lib/analytics.js";
import { CrispSnippet } from "../lib/crisp.js";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function submitForm (ev, setState) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      setState({ status: "SUCCESS" });
    } else {
      setState({ status: "ERROR" });
    }
  };
  xhr.send(data);
}

function Contact() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [status, setStatus] = useState("");

  const submitFormHandler = (ev) => {submitForm(ev, setStatus);};

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="PubSub messaging service">
      <main>

    {status === "SUCCESS" ?
    <div>
    <p className="contact__confirm">Your feedback has been submitted.</p>
     <p className="contact__thanks">Thank you!</p>
     </div>
     :
     <section className="contact" id="contact">
        <div className="contact__wrapper container">
          <h3 className="contact__question">Do you have any questions?</h3>
          <p className="contact__text">contact us via email</p>
          <a className="contact__link" href="mailto:turtle@turtlequeue.com">
            turtle@turtlequeue.com
          </a>
          <p className="contact__text">or send us a message</p>

           <form
             className="contact-form"
             onSubmit={submitFormHandler}
             action="https://formspree.io/xrgqawqg"
             method="POST">

             <label className="contact-form__label">
               <input
                 className="contact-form__input"
                 type="text"
                 placeholder="Name" />
               <span className="contact-form__span" />
             </label>

             <label className="contact-form__label">
               <input type="email" name="_replyto" className="contact-form__input" placeholder="Email" />
               <span className="contact-form__span" />
             </label>

             <label className="contact-form__label">
               <textarea className="contact-form__textarea" type="text" name="message" placeholder="Your message"/>
               <span className="contact-form__span" />
             </label>
             <button className="contact__submit">Submit</button>
           </form>
          {status === "ERROR" && <p className="contact__error">Ooops! There was an error. Please check that all the fields are filled and the email is valid.</p>}
          {ExecutionEnvironment.canUseDOM && window && window.$crisp &&
          <div className="contact__block">
            <button className="contact__chat" onClick={() => window.$crisp.push(['do', 'chat:open'])}>Open chat</button>
          </div>}
        </div>
      </section>

     }

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

export default Contact;

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { LoginGitHub } from '../components/LoginGitHub.js';
import { AnalyticsJsSnippet } from '../lib/analytics.js';
import { CrispSnippet } from '../lib/crisp.js';

const features = [
  {
    title: 'Easy to use',
    imageUrl: 'img/undraw_duplicate_xac4.svg',
    description: (
      <>
        TurtleQueue was designed from the ground up to be easily installed and used.<br/>
        See your connections and messages transit in real-time via an intuitive dashboard.
      </>
    ),
  },
  {
    title: 'Developer friendly',
    imageUrl: 'img/undraw_real_time_collaboration_c62i.svg',
    description: (
      <>
        What you send is what you get. Automatic channel creation.<br/>
        Use advanced features like delayed messages, JsonPath filtering.
      </>
    ),
  },
  {
    title: 'Time Saver',
    imageUrl: 'img/undraw_Data_re_80ws.svg',
    description: (
      <>
        Keep all your <code>data</code> from day 1.<br/>
        Launch in production in the time it takes to prototype.
      </>
    ),
  },
  {
    title: 'first class JVM support',
    imageUrl: 'img/undraw_coffee_break_j3of.svg',
    description: (
      <>
        Proposing a native Java SDK. Clojure bindings.
        Upcoming support for other platforms.
      </>
    ),
  },
  {
    title: 'JsonPath filtering',
    imageUrl: 'img/undraw_filter_4kje.svg',
    description: (
      <>
        Replay your data, and filter it with an easy DSL.
      </>
    ),
  },
  {
    title: 'Built on top of Apache Pulsar',
    imageUrl: 'img/undraw_upgrade_06a0.svg',
    description: (
      <>
        Apache pulsar is battle-tested and extremely performant. Turtlequeue inherits these properties and adds the convenience of a hosted service.
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="PubSub messaging service">

      <header className={clsx('hero', styles.heroBanner)}>

        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroCatchtext}>
              <h1 className={styles.hero__title}>Cross-platform messaging SDK</h1>
              <p className="hero__subtitle">JVM (Java/Clojure) message queue.</p>
            <p className="hero__subtitle">Built on top of Apache Pulsar.</p>

            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
                Get Started
              </Link>
              <LoginGitHub />
            </div>
          </div>

            <div className={styles.heroSplashImg}>
            <img className={styles.heroImage} src={useBaseUrl("img/home-img.svg")} alt="TurtleQueue home splash image" />
    </div>
          </div>
        </div>

      </header>
      <main>


        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
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

export default Home;

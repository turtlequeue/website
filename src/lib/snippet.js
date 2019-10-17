import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import clj from "react-syntax-highlighter/dist/esm/languages/hljs/clojure";
import highlightStyle from "react-syntax-highlighter/dist/esm/styles/hljs/monokai-sublime";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { media, mediaMin } from "./style";
import capacity from "./capacity";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("clojure", clj);

const SnippetStyle = styled.span`
  ${props => props.className} {
    // below the fold without pushing stuff up? how to?
    // position: absolute;
    // top:100%;
    ${media.tablet`display: none;`}
    ${mediaMin.tablet`margin-bottom: 15px;`}
  }

  h2 {
    text-align: center;
  }

  .arrow {
    font-size: 36px;
    text-align: center;
    margin: 47%;
  }

  a {
    display: block;
    text-align: center;
  }
`;

const StyleTabs = styled.span`
  .react-tabs {
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    border-bottom: 1px solid #aaa;
    margin: 0 0 10px;
    padding: 0;
  }

  .react-tabs__tab {
    display: inline-block;
    // border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    background: #fff;
    border-color: #aaa;
    color: black;
    // border-radius: 5px 5px 0 0;
  }

  .react-tabs__tab--disabled {
    color: GrayText;
    cursor: default;
  }

  .react-tabs__tab:focus {
    box-shadow: 0 0 5px hsl(208, 99%, 50%);
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }

  .react-tabs__tab:focus:after {
    content: "";
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: #fff;
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }
`;

const CodeSnippet = () => {
  const JsPublishSnippet = `
turtlequeue.publish({channel:'#news',
                     geo: {lat: 48.8049,
                           lon: 2.1204},
                     payload: {msg:\'hello\', d: new Date()}})
    .then((data) => console.log(\'published to:\', data))`;

  const JsSubscribeSnippet = `
turtlequeue.subscribe({channel:'#news',
                       geo: {lat: 48.8566,
                             lon: 2.3522,
                             radius: '50km'}
}, (err, data) => {
  console.log('received message', msg);
})`;

  const CljSubscribeSnippet = `
(turtlequeue/subscribe driver {:channel "#test"
                               :location {:lat 48.8566
                                          :lon 2.3522
                                          :radius "50km"}}
                       (fn [err data metadata]
                         (println "data received" data)))
`;

  const CljPublishSnippet = `
(turtlequeue/publish driver {:channel "#test"
                             :location {:lat 48.8049
                                        :lon 2.1204}
                             :payload {:msg "hello" :d (Date.)}}
                     (fn [err data metadata]
                       (println "publish " data)))`;

  // TODO sub-tabs for geo/channel/others ?
  // TODO const tabs = [{name 'javascript' ...}, clj...]
  // REST / cURL too?

  const persistIndexKey = "GDB_HOME_TAB_INDEX";

  const persistIndex = function(index, lastIndex, number, event) {
    if (capacity.isLocalStorageAvailable()) {
      window.localStorage.setItem(persistIndexKey, index);
    } else if (capacity.isSessionStorageAvailable()) {
      window.sessionStorage.setItem(persistIndexKey, index);
    }
  };

  const getPersistedIndex = () => {
    let stored = 0;
    if (capacity.isBrowser()) {
      if (capacity.isLocalStorageAvailable()) {
        let prev = window.localStorage.getItem(persistIndexKey);
        if (prev) {
          stored = parseInt(prev, 10);
        }
      } else if (capacity.isSessionStorageAvailable()) {
        let prev = window.sessionStorage.getItem(persistIndexKey);
        if (prev) {
          stored = parseInt(prev, 10);
        }
      }
    }
    return stored;
  };

  return (
    //defaultIndex={getPersistedIndex()}
    <SnippetStyle>
      <StyleTabs>
        <Tabs onSelect={persistIndex}>
          <TabList>
            <Tab>JS</Tab>
            <Tab>CLJ</Tab>
          </TabList>
          <TabPanel>
            <SyntaxHighlighter language="javascript" style={highlightStyle}>
              {JsPublishSnippet}
            </SyntaxHighlighter>

            <span className="arrow">&#8595;</span>

            <SyntaxHighlighter language="javascript" style={highlightStyle}>
              {JsSubscribeSnippet}
            </SyntaxHighlighter>
            <a href="/doc/latest/js_sdk.html">Get started</a>
          </TabPanel>
          <TabPanel>
            <SyntaxHighlighter language="javascript" style={highlightStyle}>
              {CljPublishSnippet}
            </SyntaxHighlighter>

            <span className="arrow">↓</span>

            <SyntaxHighlighter language="javascript" style={highlightStyle}>
              {CljSubscribeSnippet}
            </SyntaxHighlighter>
            <a href="/doc/latest/clj_sdk.html">Get started</a>
          </TabPanel>
        </Tabs>
      </StyleTabs>
    </SnippetStyle>
  );
};

export default CodeSnippet;

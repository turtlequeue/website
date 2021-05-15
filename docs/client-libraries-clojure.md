---
id: client-libraries-clojure
title: TurtleQueue Clojure
sidebar_label: Clojure
---

In Clojure you can use the Java SDK. However Clojure is a first-class citizen for TurtleQueue (the broker is written in Clojure).
This page provides useful snippets for Clojure developers that uses Java interrop, as well as examples using TurtleQueue in conjunction with some of the popular Clojure libraries.

# Installation

TurtleQueue is hosted on Maven

Leiningen

deps.edn

# Quickstart

There is a [quickstart](https://github.com/turtlequeue/quickstart-clj) project.

# With component

It is common to use [stuartsierra/component](https://github.com/stuartsierra/component) for managing stateful objects.
The TurtleQueue client is a stateful object as it has to maintain a connection to the broker. One could use such a component for TurtleQueue:

```clojure
(defrecord TqClientComponent [api-key user-token]
    component/Lifecycle
    (start [component]
      (let [^Client client (try
                             (->
                               (Client/newBuilder)
                               (.setUserToken user-token)
                               (.setApiKey api-key)
                               (.build)
                               (.connect)
                               (.get))
                             (catch Exception ex
                               (println "Could not create TurtleQueue client " ex)
                               (throw ex)))]
        (assoc component
               :client client
               :admin-client admin-client)))
    (stop [{:keys [client] :as component}]
      (when client
        (try
          (.close client)
          (catch Throwable t
            (println "Could not close the TurtleQueue client" t))))
      (assoc component :client nil)))
```
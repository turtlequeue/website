---
id: why-tq
title: How TurtleQueue can help you and your team
sidebar_label: When to use TurtleQueue
---


## Flexible messaging model


Message queues and Publish/Subscribe both are well-established, complementary communication pattern, used in serverless and microservices architectures.

TurtleQueue can be used as a publish-subscribe system or a message queue. It can also be used on both the back-end and front-end.

This means you do not have to choose between the two models. It also allows custom filtering (by #channel, geo, json path etc.), which are traditionally something developers have to create on top of their messaging infrastructure.

TurtleQueue provides a unique combination of features:

- real-time streaming of arbitrary data
- optional durability, allowing replaying messages from X hours/minutes or from a specific message
- flexible filters: filter by geolocation (JsonPath expressions and SQL coming)
- available for app ⇄ app communications, backend ⇄ backend or app ⇄ backend

## Hit the ground running

Tap into a ready-made infrastructure layer.
No need to deploy your own messaging infrastructure, which can be tedious.
Things that have to be done when running your own messaging layer includes:

- app servers
- database(s)
- caches
- load balancers
- health, monitoring and alerting
- authentication, handling secrets and customer data
- Continuous integration, continuous delivery
- backup and restore policy
- protect yourself against spam, phishing, cross-site scripting, and denial of service attacks, all while keeping up with the security updates and ensuring that everything you create is scalable, reliable, maintainable, and fault tolerant.


image:undraw_night_calls_5jh7.png[Night calls,250,250,align="center"]

Notice there is nothing in the list about "crafting something for your users" just yet.
TurtleQueue lets you skip this and focus on product-building. In short, we think message queues are great, and Apache Pulsar, on top if which TurtleQueue is built, one of the best yet.
TurtleQueue lets you use Apache Pulsar while simplifying it's deployment and use.


image:undraw_business_plan_5i9d.png[Business plan,250,250, align="center"]



### Common use cases

- backend messaging layer for a lambda architecture, thanks to it's durability
- communication between microservices
- storage of logs, for replaying later

Using TurtleQueue for something else? xref:get_help.adoc[Let us know]! Knowing how you use TurtleQueue help us optimize for your use case.

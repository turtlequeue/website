---
id: concepts-messaging
title: Messaging
sidebar_label: Messaging
---


TurtleQueue is built on the [publish-subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) pattern (often abbreviated to pub-sub). In this pattern, [producers](#producers) publish messages to [topics](#topics). [Consumers](#consumers) [subscribe](#subscription-modes) to those topics, process incoming messages, and send an acknowledgement when processing is complete.

When a subscription is created, TurtleQueue retains all messages, even if the consumer is disconnected. Retained messages are discarded only when a consumer acknowledges that those messages are processed successfully.

:::tip

Note: TurtleQueue is built on top of Apache Pulsar, the exact same concepts apply here.

:::

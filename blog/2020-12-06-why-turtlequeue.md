---
slug: Why TurtleQueue
title: Why TurtleQueue
author: Nicolas Ha
author_title: CEO @ Turtlequeue
author_url: https://github.com/nha
author_image_url: https://avatars3.githubusercontent.com/u/1968291?s=460&v=4
tags: [message queues, messaging]
---

This article briefly explains what message queues are, their benefits and their recent evolution. It outlines the driving ideas behind TurtleQueue.
Jump to [turtlequeue](#turtlequeue) if you are already familiar with message queues.

## Message queues

Message queues / message brokers are a big topic, with many variations not discussed here. However the core idea is simple.
Programs need to make programs communicate bewtween themselves. One good way to move data from one place to another is to use message queues.

There are too many differences between systems to cover here (queue or publish-subscribe model, smart broker or smart clients, persistent or not, distributed or not, streaming or batching ..). However, they all share similar principles: messages are put into named queues.

These are called diferently depending on the specific technology used (channels, topics).
They can be described by having producers and consumers putting and getting messages from a specific queue (or channel, or topic)..

IMAGE

So you have producers that have messages and choose a named queue to send the message to.
And at the other end of the queue you have a consumer that is consuming messages from that specific queue.

This is a very useful to do, because the producers and the consumers are now decoupled, isolated by the queues.
This decoupling means consumers and producers do not need to know about each other. They can be updated independently. The messages will be kept in the queue until consumed.

Several consumers or producers can coexist, along with several named queues.
It is possible to peek at the queue and see how many messages it holds. Messages can be processed straight away, or in the background, or periodically in large groups.

Message queues decouple the _what_ from the _when_, and reduce the knowledge needed for an application to work.
This gives us increased reliability and observability.

All these benefits explain the popularity of message queues, like RabbitMQ, zeroMQ, ActiveMQ and many others.

## Distributed log

More recently, message queues have had one major evolution, that was popularized by Apache Kafka. Their internal representation of the messages are now centered around an append-only log. This has important performance implications, and because messages are kept in store instead of being discarded after being consumed, it did open up new possibilities for application developers.

New architectures have emerged and are still being improved upon, like the lambda architecture.

Pproducers still push messages onto a named queue, and consumers can now decide which part they want to read.
They can start from the incoming messages, or from the start of the topic. They can split messages from a named queue between them, or every consumer can get all messages from the queue.

Apache Pulsar (upon which TurtleQueue is built) uses the concept of a cursor, that advances to consume the next message. But the cursor's position can be changed to something else, like the beginning of the queue.

IMAGE

On top of these log-queue they offer other advanced features (KStreams from Apache Kafka, Functions from Apache Pulsar...).

## TurtleQueue

These systems (Apache Pulsar, Apache Kafka..) are complex and require an upfront investment before being used.
Their different parts need to be understood, installed, secured, monitored, scaled, updated...
Only them can applications use them.

TurtleQueue aims to retain the best from Apache Pulsar. The great performance and the useful features. In addition, TurtleQueue is made to make it _really easy_ to use message queues.
A programmer should be able to send messages in no more than 5 minutes.

TurtleQueue already adds features not found in Apache Pulsar too, like JsonPath filtering, and more to come.

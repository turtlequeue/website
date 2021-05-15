---
id: reference-terminology
title: TurtleQueue Terminology
sidebar_label: Terminology
---

Here is a glossary of terms related to TurtleQueue. Note that a lot of these are coming from Apache Pulsar.

### Concepts

#### Pulsar

Pulsar is a distributed messaging system originally created by Yahoo but now under the stewardship of the Apache Software Foundation.

#### Message

Messages are the basic unit of TurtleQueue. They're what [producers](#producer) publish to [topics](#topic)
and what [consumers](#consumer) then consume from topics.

#### Topic

A named channel used to pass messages published by [producers](#producer) to [consumers](#consumer) who
process those [messages](#message).

#### Namespace

A grouping mechanism for related [topics](#topic).


#### Subscription

A lease on a [topic](#topic) established by a group of [consumers](#consumer). Pulsar has three subscription
modes (exclusive, shared, and failover).

#### Pub-Sub

A messaging pattern in which [producer](#producer) proccesses publish messages on [topics](#topic) that
are then consumed (processed) by [consumer](#consumer) processes.

#### Producer

A process that publishes [messages](#message) to a TurtleQueue [topic](#topic).

#### Consumer

A process that establishes a subscription to a TurtleQueue [topic](#topic) and processes messages published
to that topic by [producers](#producer).

#### Reader

TurtleQueue readers are message processors much like TurtleQueue [consumers](#consumer) but with two crucial differences:

- you can specify *where* on a topic readers begin processing messages (consumers always begin with the latest available unacked message).
- readers don't retain data or acknowledge messages.

#### Cursor

The subscription position for a [consumer](#consumer).

#### Acknowledgment (ack)

A message sent to a TurtleQueue broker by a [consumer](#consumer) that a message has been successfully processed.
An acknowledgement (ack) is TurtleQueue way of knowing that the message can be deleted from the system.
If there is no acknowledgement, then the message will be retained until it's processed.

#### Negative Acknowledgment (nack)

When an application fails to process a particular message, it can sends a "negative ack" to the TurtleQueue broker
to signal that the message should be replayed at a later timer. (By default, failed messages are
resent after a 1 minute delay)

#### Unacknowledged

A message that has been delivered to a consumer for processing but not yet confirmed as processed by the consumer.

#### Retention Policy

Size and time limits that you can set on a [namespace](#namespace) to configure retention of [messages](#message)
that have already been [acknowledged](#acknowledgement-ack).

#### Multi-Tenancy

The ability to isolate [namespaces](#namespace), specify quotas, and configure authentication and authorization
on a per-[tenant](#tenant) basis.

### Functions

TurleQueue Functions are lightweight functions that can consume messages from [topics](#topic), apply custom processing logic, and, if desired, publish results to topics.
---
id: concepts-clients
title: Pulsar Clients
sidebar_label: Clients
---

This document is intended for client developers.

TurtleQueue exposes a client API with language bindings for [Java](client-libraries-java.md), and more to come. The client API optimizes and encapsulates TurtleQueue client-broker communication protocol and exposes a simple and intuitive API for use by applications.

Under the hood, the current official TurtleQueue client libraries support transparent reconnection, queuing of messages until acknowledged by the broker, and heuristics such as connection retries with backoff.

The use of google's [grpc](https://grpc.io/) as the transport layer allows efficient data transfer thanks to protobuf as well as a unified transport protocol. This will allow TurtleQueue to support the following platforms:
- Java
- NodeJS
- Python
- Go
- C#
- PHP
- Ruby
- Kotlin/JVM
- Objective-C
- Dart
- C++

The messages are defined in a protobuf file. It is therefore imperative to learn about the protobuf tools and the grpc libraries for your particular platform.

# Client SDK

### Initial connection

Send auth
reply connect -> get the connection uuid

### Ping Pong

### Producer

#### Delayed messages

### Consumer

Receiver queue

#### Consumer modes

Do not forget to implement the different consumer modes!

#### Acknowledge

### Reader

A Reader is simply a different interface on top of a Consumer.
It has:
- SubscriptionMode
- a different name, generated (reader-)
- a starting point for the cursor
- logic for the end of the topic
- no need to acknowledge etc.

#### Seeking

### Close reconnection and redelivery

Upon reconnection, the consumers and producers must be re-created with the exact same parameters. The ids assigned will change and may not be the same.
The internal message queues must be purged too.

### Dead letter queue

# Admin SDK

The Admin SDK reuses the client SDK's grpc connection. However unlike the client SDK it uses unary grpc calls.
It's messages are defined separately, in the `tqadmin.proto` file, and it uses a different service `service TurtleQueueAdmin`.

In particular, deleting topics can be useful when writing unit tests.

#### Topics

#### Functions


## Documentation

While implementing these, think about the future user of your SDK. Write documentation, and do not hesitate to open issues to request or discuss improvements to this documentation too!

---
id: client-libraries-java
title: TurtleQueue Java client
sidebar_label: Java
---

You can use TurtleQueue Java SDK to create Java [producer](#producer), [consumer](#consumer), and [readers](#reader-interface) of messages and to perform [administrative tasks](admin-api-overview.md).

All the methods in the [producer](#producer), [consumer](#consumer), and [reader](#reader) of the Java client are thread-safe.

The TurtleQueue SDK is divided into two two packages:

Package | Description
:-------|:------------
[com.turtlequeue:java-sdk](https://mvnrepository.com/artifact/com.turtlequeue) | The producer and consumer API
[com.turtlequeue:java-sdk](https://mvnrepository.com/artifact/com.turtlequeue) | The Java [admin API](admin-api-overview.md)

This document focuses only on the client API for producing and consuming messages on TurtleQueue topics. For how to use the Java admin client, see [TurtleQueue admin SDK](admin-api-overview.md).

## Installation

The latest version of the Turtlequeue SDK is available via [Maven Central](https://mvnrepository.com/artifact/com.turtlequeue). To use the latest version, add the `java-sdk` library to your build configuration.

## Connection

TurtleQueue is a managed service. To connect the SDK to the topics, you need to create an API Key.
To do so, log in to your dashboard at [turtlequeue.com](https://turtlequeue.com/security) and generate API keys and User Token.


## Client

You can then instantiate a TurtleQueue Client object like so:

```java

 Client c = Client.builder()
        .setUserToken("TOKEN_FROM_THE_DASHBOARD")
        .setApiKey("API_KEY_FROM_THE_DASHBOARD")
        .build();
```

Then the client needs to connect like so:

```java
   c.connect();
```

Upon successful connection, the SDK is ready to send/receive messages.

This is an asynchrounous operation that returns a `CompletableFuture<Client>`. To wait until the connection has been made, use:
```java
   c.connect().get();
```


## Producer

TurtleQueue is built on top of Apache Pulsar. Like for Pulsar, producers write messages to topics. Once you've instantiated a Client object (as in the section [above](#client-configuration)), you can create a Producer for a specific Pulsar [topic](reference-terminology.md#topic).

```java
      Producer producer = c.newProducer()
        .topic(t)
        .create()
        .get();


// You can then send messages to the broker and topic you specified:
     producer.newMessage()
        .value(i)
        .send();
```

> Unlike in Pulsar, all operations are asynchronous by default.

By default, in TurtleQueue producers can produce messages using any Object, all the standard Java classes are supported automatically.
Pulsar schemas are not supported, although they may be in the future.

```java
Producer<String> stringProducer = client.newProducer()
        .topic("my-topic")
        .create();
stringProducer.send("My message");
```

```java
Producer<Object> anyProducer = client.newProducer()
        .topic("my-topic")
        .create();
anyProducer.send("My message");
anyProducer.send(new Date());
```

> Make sure that you close your producers, consumers, and clients when you do not need them.
> ```java
> producer.close();
> consumer.close();
> client.close();
> ```
>
> Close operations can also be asynchronous:
> ```java
> producer.closeAsync()
>    .thenRun(() -> System.out.println("Producer closed"))
>    .exceptionally((ex) -> {
>        System.err.println("Failed to close producer: " + ex);
>        return null;
>    });
> ```
> it can be useful to use the try-with-resources pattern to ensure they are closed properly.
> ```
> try(client.newProducer()...)
> ```

### Configure producer

A producer can configured with only a topic name as the example above, and will use sane defaults.
For a full list, see the Javadoc for the ProducerBuilder class. Example:

```java
Producer<Object> producer = client.newProducer()
    .topic("my-topic")
    .producerName("myProducer")
    .sendTimeout(10, TimeUnit.SECONDS)
    .maxPendingMessages(1000)
    .enableBatching(false)
    .hashingScheme(HashingScheme.MurmurHash)
    .create();
```

### Configure messages

In addition to a value, you can set additional metadata on a given message:

```java
producer.newMessage()
    .key("my-message-key")
    .value("my-async-message".getBytes())
    .property("my-key", "my-value")
    .property("my-other-key", "my-other-value")
    .send()
    .get();
```

## Consumer

With TurtleQueue, consumers subscribe to topics and receive messages that producers publish to those topics. You can instantiate a new Consumer by first instantiating a Client object.

Once you've instantiated a Client object, you can create aConsumer by specifying a [topic](reference-terminology.md#topic) and a [subscription](concepts-messaging.md#subscription-modes).

```java
Consumer consumer = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .subscribe()
        .get();
```

The `subscribe` method will auto subscribe the consumer to the specified topic and subscription. One way to make the consumer listen on the topic is to set up a `while` loop. In this example loop, the consumer listens for messages, prints the contents of any received message, and then [acknowledges](reference-terminology.md#acknowledgment-ack) that the message has been processed. If the processing logic fails, you can use [negative acknowledgement](reference-terminology.md#acknowledgment-ack) to redeliver the message later.

```java
while (true) {
  // Wait for a message
  Message msg = consumer.receive();

  try {
      // Do something with the message
      System.out.printf("Message received: %s", new String(msg.getData()));

      // Acknowledge the message so that it can be deleted by the message broker
      consumer.acknowledge(msg);
  } catch (Exception e) {
      // Message failed to process, redeliver later
      consumer.negativeAcknowledge(msg);
  }
}
```

### Configure consumer

If you instantiate a `Consumer` object by specifying only a topic and subscription name as in the example above, the consumer uses the default configuration.

You can configure parameters if you do not want to use the default configuration. For a full list, see the Javadoc for the ConsumerBuilder class.

```java
Consumer consumer = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .ackTimeout(10, TimeUnit.SECONDS)
        .subscriptionType(SubType.Exclusive)
        .subscribe();
```

### Subscription modes

TurtleQueue inherits the various [subscription modes](concepts-messaging#subscription-modes) from Pulsar. A topic can have multiple subscriptions with different subscription modes. However, a Consumer can only have one subscription mode at a time.

Different subscription modes have different message distribution modes. This section describes the differences of subscription modes and how to use them.

Let's assume the following scenario, where there is a topic named "my-topic", and the producer has published 10 messages.

```java
Producer<String> producer = client.newProducer()
        .topic("my-topic")
        .create();
// 3 messages with "key-1", 3 messages with "key-2", 2 messages with "key-3" and 2 messages with "key-4"
producer.newMessage().key("key-1").value("message-1-1").send();
producer.newMessage().key("key-1").value("message-1-2").send();
producer.newMessage().key("key-1").value("message-1-3").send();
producer.newMessage().key("key-2").value("message-2-1").send();
producer.newMessage().key("key-2").value("message-2-2").send();
producer.newMessage().key("key-2").value("message-2-3").send();
producer.newMessage().key("key-3").value("message-3-1").send();
producer.newMessage().key("key-3").value("message-3-2").send();
producer.newMessage().key("key-4").value("message-4-1").send();
producer.newMessage().key("key-4").value("message-4-2").send();
```

#### Exclusive

Create a new consumer and subscribe with the `Exclusive` subscription mode.

```java
Consumer consumer = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .subscriptionType(SubType.Exclusive)
        .subscribe()
```

Only the first consumer is allowed to connect to the topic. The first consumer receives all 10 messages, and the consuming order is the same as the producing order.

> Note:
>
> If topic is a partitioned topic, the first consumer subscribes to all partitioned topics, other consumers are not assigned with partitions and receive an error.

#### Failover

Create new consumers and subscribe with the`Failover` subscription mode.

```java
Consumer consumer1 = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .subscriptionType(SubType.Failover)
        .subscribe()
Consumer consumer2 = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .subscriptionType(SubscriptionType.Failover)
        .subscribe()
//conumser1 is the active consumer, consumer2 is the standby consumer.
//consumer1 receives 5 messages and then crashes, consumer2 takes over as an  active consumer.

```

Multiple consumers can attach to the same subscription, yet only the first consumer is active, and others are standby. When the active consumer is disconnected, messages will be dispatched to one of standby consumers, and the standby consumer then becomes active consumer.

If the first active consumer is disconnected after receiving 5 messages, the standby consumer becomes active consumer. Consumer1 will receive:

```
("key-1", "message-1-1")
("key-1", "message-1-2")
("key-1", "message-1-3")
("key-2", "message-2-1")
("key-2", "message-2-2")
```

consumer2 will receive:

```
("key-2", "message-2-3")
("key-3", "message-3-1")
("key-3", "message-3-2")
("key-4", "message-4-1")
("key-4", "message-4-2")
```

> Note:
>
> If a topic is a partitioned topic, each partition has only one active consumer, messages of one partition are distributed to only one consumer, and messages of multiple partitions are distributed to multiple consumers.

#### Shared

In this scenario we create two new consumers in a `Shared` subscription mode:

```java
Consumer consumer1 = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .subscriptionType(SubType.Shared)
        .subscribe()

Consumer consumer2 = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .subscriptionType(SubType.Shared)
        .subscribe()
//Both consumer1 and consumer 2 is active consumers.
```

In shared subscription mode, multiple consumers can attach to the same subscription and messages are delivered in a round robin distribution across consumers.

If a broker dispatches only one message at a time, consumer1 receives the following information.

```
("key-1", "message-1-1")
("key-1", "message-1-3")
("key-2", "message-2-2")
("key-3", "message-3-1")
("key-4", "message-4-1")
```

consumer2 receives the follwoing information.

```
("key-1", "message-1-2")
("key-2", "message-2-1")
("key-2", "message-2-3")
("key-3", "message-3-2")
("key-4", "message-4-2")
```

The `Shared` subscription is different from `Exclusive` and `Failover` subscription modes. `Shared` subscription has better flexibility, but cannot provide order guarantee.

#### Key_shared

In this scenario we create two consumers and subscribe with the `Key_Shared` subscription mode.

```java
Consumer consumer1 = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .subscriptionType(SubType.Key_Shared)
        .subscribe()

Consumer consumer2 = client.newConsumer()
        .topic("my-topic")
        .subscriptionName("my-subscription")
        .subscriptionType(SubType.Key_Shared)
        .subscribe()
//Both consumer1 and consumer2 are active consumers.
```

The `Key_Shared` subscription is similar to the `Shared` subscription: all consumers can attach to the same subscription. But unlike the `Key_Shared` subscription, messages with the same key are delivered to only one consumer in order.
A key is assigned randomly to a consumer, and then all messages with that key will be assigned to the same consumer.

consumer1 receives the follwoing information.

```
("key-1", "message-1-1")
("key-1", "message-1-2")
("key-1", "message-1-3")
("key-3", "message-3-1")
("key-3", "message-3-2")
```

consumer2 receives the follwoing information.

```
("key-2", "message-2-1")
("key-2", "message-2-2")
("key-2", "message-2-3")
("key-4", "message-4-1")
("key-4", "message-4-2")
```

> Note:
>
> If the message key is not specified, messages without any key are dispatched to one consumer in order by default.

## Reader

With the [reader interface](concepts-clients.md#reader-interface), TurtleQueue Consumers can "manually position" themselves within a topic and read all messages from a specified message onward.
This can be done from a specific MessageId or from a given Date.
The TurtleQueue SDK for Java enables you to create Reader objects by specifying a topic and either a MessageId or a timestamp.

The following is an example.

```java
Reader reader = tqClient.newReader()
        .topic(topic)
        .startMessageId(messageId)
        .create();

while (true) {
    Message message = reader.readNext();
    // Process message
}
```

In the example above, a `Reader` object is instantiated for a specific topic and message (by ID); the reader iterates over each message in the topic after the message is identified by `messageId` (how that value is obtained depends on the application).

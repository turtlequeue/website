---
id: admin-api-overview
title: TurtleQueue admin interface
sidebar_label: Admin overview
---

The TurtleQueue admin interface enables you to manage the entities in TurtleQueue such as topics.

You can interact with the admin interface via the Admin Java SDK (more implementations to come). The Admin package uses the java SDK to reuse the communication transport effectively.

The first step if to initialize the Admin component. This gives the Client administrative capabilities.
It has to be done only once:
```java
import com.turtlequeue.AdminImpl; // requiring it is necessary
AdminImpl.initialize();
```

Then a topic can be deleted, by creating a client and then using it's new Admin capabilities.

```java {21}
import com.turtlequeue.Client;
import com.turtlequeue.Topic;
import com.turtlequeue.AdminImpl;

try(// Java try-with-resources pattern
        Client c = Client.builder()
        .setUserToken("TURTLEQUEUE_USER_TOKEN")
        .setApiKey("TURTLEQUEUE_API_KEY")
        .build();
        ) {

      c.connect().get(1, TimeUnit.SECONDS);
      System.out.println("Client connected " + c);

      Topic t = c.newTopicBuilder()
        .topic("MyTopic")
        .namespace("default")
        .persistent(true)
        .build();

      AdminImpl.initialize();
      try {c.admin().deleteTopic(t, true).get(1, TimeUnit.SECONDS);} catch (Exception ex) {}
      }
```

The second parameter to `deleteTopic` is the `force` flag. When `true`, the topic is forcefully deleted by closing all active producers and consumers.

Is is good practice to catch and handle `Exceptions`. These can happen either because:
- the network connection has been lost
- the topic still has active producer/consumers
- the topic does not exist

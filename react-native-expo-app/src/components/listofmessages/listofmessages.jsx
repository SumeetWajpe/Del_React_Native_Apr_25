import React from "react";
import { FlatList, Text, View } from "react-native";
import Message from "../message/message";

const messages = [
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "Alice",
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    sender: "Bob",
    timestamp: "2023-10-01T12:01:00Z",
  },
  {
    id: 3,
    text: "Doing well, just working on a project.",
    sender: "Alice",
    timestamp: "2023-10-01T12:02:00Z",
  },
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "Alice",
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    sender: "Bob",
    timestamp: "2023-10-01T12:01:00Z",
  },
  {
    id: 3,
    text: "Doing well, just working on a project.",
    sender: "Alice",
    timestamp: "2023-10-01T12:02:00Z",
  },
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "Alice",
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    sender: "Bob",
    timestamp: "2023-10-01T12:01:00Z",
  },
  {
    id: 3,
    text: "Doing well, just working on a project.",
    sender: "Alice",
    timestamp: "2023-10-01T12:02:00Z",
  },
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "Alice",
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    sender: "Bob",
    timestamp: "2023-10-01T12:01:00Z",
  },
  {
    id: 3,
    text: "Doing well, just working on a project.",
    sender: "Alice",
    timestamp: "2023-10-01T12:02:00Z",
  },
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "Alice",
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    sender: "Bob",
    timestamp: "2023-10-01T12:01:00Z",
  },
  {
    id: 3,
    text: "Doing well, just working on a project.",
    sender: "Alice",
    timestamp: "2023-10-01T12:02:00Z",
  },
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "Alice",
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    sender: "Bob",
    timestamp: "2023-10-01T12:01:00Z",
  },
  {
    id: 3,
    text: "Doing well, just working on a project.",
    sender: "Alice",
    timestamp: "2023-10-01T12:02:00Z",
  },
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "Alice",
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    sender: "Bob",
    timestamp: "2023-10-01T12:01:00Z",
  },
  {
    id: 3,
    text: "Doing well, just working on a project.",
    sender: "Alice",
    timestamp: "2023-10-01T12:02:00Z",
  },
];

const ListOfMessages = () => {
  return (
    <View style={styles.container}>
      {/* {messages.map(message => (
        <Message message={message} key={message.id} />
      ))} */}

      <FlatList
        data={messages}
        keyExtractor={m => m.id}
        renderItem={({ item }) => <Message message={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
    marginTop: 20,
  },
};

export default ListOfMessages;

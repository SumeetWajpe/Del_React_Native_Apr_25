import React from "react";
import { Text, View } from "react-native";
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
];

const ListOfMessages = () => {
  return (
    <View>
      {messages.map(message => (
        <Message message={message} />
      ))}
    </View>
  );
};

export default ListOfMessages;

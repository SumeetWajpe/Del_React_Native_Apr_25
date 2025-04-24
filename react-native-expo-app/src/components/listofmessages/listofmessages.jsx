import React from "react";
import { Text, View } from "react-native";

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
        <View key={message.id} style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{message.sender}</Text>
          <Text>{message.text}</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>
            {new Date(message.timestamp).toLocaleString()}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ListOfMessages;

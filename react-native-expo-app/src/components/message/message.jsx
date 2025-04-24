import React from "react";
import { Text, View } from "react-native";

const Message = ({ message }) => {
  return (
    <View key={message.id} style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text style={{ fontWeight: "bold" }}>{message.sender}</Text>
      <Text>{message.text}</Text>
      <Text style={{ fontSize: 12, color: "gray" }}>
        {new Date(message.timestamp).toLocaleString()}
      </Text>
    </View>
  );
};

export default Message;

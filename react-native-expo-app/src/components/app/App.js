import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ListOfMessages from "../listofmessages/listofmessages";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Hello, React Native!</Text>
      <ListOfMessages />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // display: "flex",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
});

export default App;

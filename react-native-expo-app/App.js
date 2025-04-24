import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Hello, React Native!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
});

export default App;

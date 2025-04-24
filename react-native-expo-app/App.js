import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
});

export default App;

import React from "react";
import CartCount from "../cart/cart";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> 📚 Deldemy</Text>
      <CartCount />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#c20dc2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Header;

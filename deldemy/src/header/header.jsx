import React from "react";
import CartCount from "../cart/cart";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> 📚 Deldemy</Text>
      <CartCount />
      <Button title="Logout" onPress={() => logout()}></Button>
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

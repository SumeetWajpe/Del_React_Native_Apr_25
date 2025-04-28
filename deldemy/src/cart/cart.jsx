import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCart } from "../context/cartContext";

const CartCount = () => {
  const { cartItems } = useCart();
  return (
    <View style={styles.cartBadge}>
      <Text> 🛒 {cartItems.length} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartBadge: {
    backgroundColor: "#fdfafd",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  cartText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default CartCount;

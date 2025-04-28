import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../context/cartContext";
import { useNavigation } from "@react-navigation/native";

const CartCount = () => {
  const { cartItems } = useCart();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        return navigation.navigate("CartSummary");
      }}
    >
      <View style={styles.cartBadge}>
        <Text> 🛒 {cartItems.length} </Text>
      </View>
    </TouchableOpacity>
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

import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useCart } from "../context/cartContext";

const CartScreen = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
        {cartItems.length === 0 ? (
          <Text style={styles.empty}>Your cart is empty.</Text>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={styles.item}>
                  <Text style={styles.courseTitle}>{item.title}</Text>
                  <Text>Instructor: {item.instructor}</Text>
                </View>
                <Button
                  title="Remove"
                  color="#f44336"
                  onPress={() => removeFromCart(item.id)}
                />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  empty: { fontSize: 16, color: "#666" },
  item: {
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#f9f9f9",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CartScreen;

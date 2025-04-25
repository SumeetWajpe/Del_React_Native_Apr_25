import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const CourseItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CourseDetails", {})}>
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>Instructor: {item.instructor}</Text>
          <Text style={styles.subtitle}>Duration: {item.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
    elevation: 2,
  },
  image: { width: 80, height: 60, borderRadius: 4, marginRight: 12 },
  textContainer: { flex: 1 },
  title: { fontSize: 18, fontWeight: "600" },
  subtitle: { fontSize: 14, color: "#555" },
});

export default CourseItem;

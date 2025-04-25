import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const CourseDetails = ({ route }) => {
  const { course } = route.params;
  const [currLikes, setCurrLikes] = useState(course.likes);

  return (
    <View style={styles.container}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <View style={styles.row}>
        <Text style={styles.title}>{course.title}</Text>
        <Button
          onPress={() => setCurrLikes(currLikes + 1)}
          title={`👍🏻 ${currLikes} Likes`}
          color={"#bb21bb"}
        ></Button>
      </View>
      <Text style={styles.subtitle}>Instructor: {course.instructor}</Text>
      <Text style={styles.subtitle}>Duration: {course.duration}</Text>
      <Text style={styles.subtitle}>₹. {course.price}</Text>

      <Text style={styles.description}>{course.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, borderRadius: 6, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 6 },
  description: { fontSize: 16, color: "#555", marginTop: 10 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CourseDetails;

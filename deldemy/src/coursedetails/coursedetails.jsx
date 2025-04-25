import React from "react";
import { View, Text, StyleSheet } from "react-native";
const CourseDetails = ({ route }) => {
  const { course } = route.params; // fetch the course details passed from CourseItem component
  return (
    <View style={styles.container}>
      <Text>Course Details goes here for {course.title} !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
});

export default CourseDetails;

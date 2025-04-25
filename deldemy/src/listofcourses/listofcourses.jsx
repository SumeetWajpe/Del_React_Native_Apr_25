import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import CourseItem from "../course/course";
import axios from "axios";

const ListOfCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://192.168.101.3:3000/courses");
        if (response.status !== 200) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.data;
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CourseItem item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }} // Ensures padding at the bottom
        showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default ListOfCourses;

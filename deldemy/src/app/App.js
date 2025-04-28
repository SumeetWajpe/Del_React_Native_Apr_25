// App.js
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import ListOfCourses from "../listofcourses/listofcourses";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CourseDetails from "../coursedetails/coursedetails";
import { CartProvider } from "../context/cartContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.safeArea}>
          <Stack.Navigator initialRouteName="Courses">
            <Stack.Screen
              name="Courses"
              component={ListOfCourses}
              options={{ title: "Deldemy Courses List" }}
            />

            <Stack.Screen
              name="CourseDetails"
              component={CourseDetails}
              options={{ title: "Course Details" }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
});

export default App;

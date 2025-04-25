// App.js
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import ListOfCourses from "../listofcourses/listofcourses";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator>
        <Stack.Screen
          name="Courses"
          component={ListOfCourses}
          options={{ }}
        />
        <ListOfCourses />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
});

export default App;

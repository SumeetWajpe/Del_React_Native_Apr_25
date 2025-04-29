import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// const MyTabs = createBottomTabNavigator({}); // For tabbed Navigation

const DashboardNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Courses">
      <Stack.Screen
        name="Courses"
        component={ListOfCourses}
        option={{ title: "Deldemy Courses List" }}
      ></Stack.Screen>
    </Stack.Navigator>
    // <MyTabs.Screen
    //   name="Courses"
    //   component={ListOfCourses}
    //   option={{ title: "Deldemy Courses List" }}
    // ></MyTabs.Screen>
  );
};

export default DashboardNavigator;

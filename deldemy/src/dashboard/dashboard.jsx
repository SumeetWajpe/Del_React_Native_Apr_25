import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import { createStackNavigator } from "@react-navigation/stack";
import CourseDetails from "../coursedetails/coursedetails";
import CartScreen from "../cart/cartsummary";
import Header from "../header/header";

const Stack = createStackNavigator();

// const MyTabs = createBottomTabNavigator({}); // For tabbed Navigation

const DashboardNavigator = () => {
  return (
    <>
      <Header />
      <Stack.Navigator initialRouteName="Courses">
        <Stack.Screen
          name="Courses"
          component={ListOfCourses}
          option={{ title: "Deldemy Courses List" }}
        ></Stack.Screen>
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{ title: "Course Details" }}
        />
        <Stack.Screen name="CartSummary" component={CartScreen} />
      </Stack.Navigator>
    </>
    // <MyTabs.Screen
    //   name="Courses"
    //   component={ListOfCourses}
    //   option={{ title: "Deldemy Courses List" }}
    // ></MyTabs.Screen>
  );
};

export default DashboardNavigator;

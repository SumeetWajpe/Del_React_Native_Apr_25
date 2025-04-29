// App.js
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import ListOfCourses from "../listofcourses/listofcourses";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CourseDetails from "../coursedetails/coursedetails";
import { CartProvider } from "../context/cartContext";
import Header from "../header/header";
import CartSummary from "../cart/cartsummary";
import Login from "../login/login";
import AuthProvider from "../context/authContext";
import AppNavigator from "./appNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <CartProvider>
    //   <NavigationContainer>
    //     <SafeAreaView style={styles.safeArea}>
    //       <Header />
    //       <Stack.Navigator initialRouteName="Courses">
    //         <Stack.Screen
    //           name="Courses"
    //           component={ListOfCourses}
    //           options={{ title: "Deldemy Courses List" }}
    //         />

    //         <Stack.Screen
    //           name="CourseDetails"
    //           component={CourseDetails}
    //           options={{ title: "Course Details" }}
    //         />
    //         <Stack.Screen name="CartSummary" component={CartSummary} />
    //       </Stack.Navigator>
    //     </SafeAreaView>
    //   </NavigationContainer>
    // </CartProvider>

    <AuthProvider>
      <CartProvider>
        <SafeAreaView style={styles.safeArea}>
          <AppNavigator />
        </SafeAreaView>
      </CartProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
});

export default App;

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../login/login";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      {/* <Stack.Screen name="Register" component={Register}></Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;

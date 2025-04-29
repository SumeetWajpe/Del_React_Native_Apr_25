import { createStaticNavigation } from "@react-navigation/native";
import React from "react";
import Login from "../login/login";

const Stack = createStaticNavigation();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      {/* <Stack.Screen name="Register" component={Register}></Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;

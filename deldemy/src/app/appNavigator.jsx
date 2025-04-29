import React from "react";
import { useAuth } from "../context/authContext";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <DashboardNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

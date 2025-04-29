import React from "react";
import { useAuth } from "../context/authContext";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../auth/authNavigator";
import DashboardNavigator from "../dashboard/dashboard";

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <DashboardNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

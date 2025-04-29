import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const isAuthenticated = !!authToken;

  const login = async token => {
    await AsyncStorage.setItem("authToken", token.token);
    setAuthToken(token.token);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("authToken");
    setAuthToken(null);
  };

  const checkToken = async () => {
    const storedToken = await AsyncStorage.getItem("authToken");
    // have an API call to verify token
    setAuthToken(storedToken);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

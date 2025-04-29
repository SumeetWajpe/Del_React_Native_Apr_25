import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";
import { useAuth } from "../context/authContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleLogin = async () => {
    // make an async call axios
    // if call succeeds token will be returned as response
    // call login from authContext

    try {
      const response = await axios.post("url", { username, password });
      if (response.status !== 200) throw new Error("Invalid Credentials");
      const token = response.data;
      login(token);
    } catch (err) {
      Alert.alert("Error", err.message);
      console.log(err.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Enter Username"
        onChangeText={setUsername}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
});
export default Login;

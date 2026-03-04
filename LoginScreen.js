import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Login Error", "Email and Password required");
      return;
    }

    Alert.alert("Login Successful");
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Password</Text>
      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      <Text onPress={() => navigation.navigate("Signup")}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
}

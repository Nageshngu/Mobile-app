import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SettingsMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Menu</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  }
});

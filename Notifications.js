import React, { useEffect } from "react";
import { View, Button } from "react-native";
import * as Notifications from "expo-notifications";

export default function NotificationsScreen() {

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission for notifications not granted!");
    }
  };

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Notification",
        body: "This is a test notification from the app!"
      },
      trigger: { seconds: 5 }
    });
  };

  return (
    <View>
      <Button title="Send Test Notification" onPress={sendNotification} />
    </View>
  );
}

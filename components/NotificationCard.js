import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NotificationCard({ notification }) {
  const { user, text } = notification;
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

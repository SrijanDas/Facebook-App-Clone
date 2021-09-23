import React from "react";
import { View, Text, StyleSheet } from "react-native";
import fontStyles from "../constants/fontStyles";
import NotificationCard from "../components/NotificationCard";
import { notifications } from "../dummyData";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>Notifications</Text>
      {notifications.map((n) => (
        <NotificationCard key={n.id} notification={n} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "white",
  },
  screenHeader: {
    fontWeight: fontStyles.boldFont,
    fontSize: fontStyles.headerfontSize,
    marginBottom: 5,
  },
});

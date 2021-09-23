import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import fontStyles from "../constants/fontStyles";
import NotificationCard from "../components/NotificationCard";
import { notifications } from "../dummyData";

export default function Notifications() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenHeader}>Notifications</Text>
      {notifications.map((n) => (
        <NotificationCard key={n.id} notification={n} />
      ))}
      {notifications.map((n) => (
        <NotificationCard key={n.id} notification={n} />
      ))}
      {notifications.map((n) => (
        <NotificationCard key={n.id} notification={n} />
      ))}
      {notifications.map((n) => (
        <NotificationCard key={n.id} notification={n} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  screenHeader: {
    fontWeight: fontStyles.boldFont,
    fontSize: fontStyles.headerfontSize,
    // marginBottom: 5,
    padding: 12,
  },
});

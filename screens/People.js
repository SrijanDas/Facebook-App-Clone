import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { users } from "../dummyData";

export default function People() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>People you may know</Text>
      {users.map((user, i) => (
        <View key={i} style={styles.userCard}>
          <Avatar rounded title="MD" source={user.profilePic} size="large" />
          <View style={styles.userInfo}>
            <Text style={styles.displayName}>{user.displayName}</Text>
            <Text>{user.username}</Text>
            <View style={styles.cardBtns}>
              <Button
                title="Follow"
                buttonStyle={{ width: 110, borderRadius: 7 }}
              />
              <Button
                title="Remove"
                buttonStyle={{
                  backgroundColor: "#eaeaea",
                  marginLeft: 8,
                  borderRadius: 7,
                }}
                titleStyle={{ color: "black" }}
              />
            </View>
          </View>
        </View>
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
    fontWeight: "700",
    fontSize: 22,
    marginBottom: 5,
  },
  userCard: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    marginLeft: 15,
  },
  displayName: {
    fontSize: 18,
    fontWeight: "700",
  },
  cardBtns: {
    marginTop: 5,
    flexDirection: "row",
  },
});

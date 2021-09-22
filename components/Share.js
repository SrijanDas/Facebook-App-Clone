import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Share() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImg}
        source={require("../assets/linus.jpg")}
      />
      <TouchableOpacity style={styles.share}>
        <Text style={styles.shareText}>What's on your mind?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImg: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  share: {
    flex: 0.95,
    height: 60,
    borderRadius: 55,
    borderColor: "lightgray",
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  shareText: {
    fontSize: 16,
    color: "gray",
    marginLeft: 10,
  },
});

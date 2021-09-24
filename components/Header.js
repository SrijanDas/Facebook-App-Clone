import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Start it up</Text>
      <TouchableOpacity style={styles.searchBtn}>
        <FontAwesome5 name="search" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingBottom: 0,
  },
  headerText: {
    fontWeight: "700",
    color: "#1976D2",
    fontSize: 30,
  },
  searchBtn: {
    backgroundColor: "#eeee",
    borderRadius: 50,
    padding: 6,
  },
});

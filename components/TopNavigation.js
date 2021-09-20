import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

export default function TopNavigation() {
  const [active, setActive] = useState("home");

  const styles = StyleSheet.create({
    navContainer: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 10,
      justifyContent: "space-between",
    },
    navItem: {
      alignItems: "center",
      width: 50,
    },
    navItemActive: {
      marginTop: 5,
      borderBottomWidth: 2,
      borderBottomColor: "#1976D2",
      width: "150%",
    },
  });

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActive("home");
        }}
      >
        <MaterialCommunityIcons
          name={active === "home" ? "home" : "home-outline"}
          color={active === "home" ? "#1976D2" : "black"}
          size={30}
        />
        {active === "home" ? (
          <View style={styles.navItemActive}></View>
        ) : (
          <View style={{ marginTop: 5 }}></View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActive("people");
        }}
      >
        <MaterialIcons
          name={active === "people" ? "people" : "people-outline"}
          color={active === "people" ? "#1976D2" : "black"}
          size={30}
        />
        {active === "people" ? (
          <View style={styles.navItemActive}></View>
        ) : (
          <View style={{ marginTop: 5 }}></View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActive("message");
        }}
      >
        <MaterialCommunityIcons
          name={active === "message" ? "message-text" : "message-text-outline"}
          color={active === "message" ? "#1976D2" : "black"}
          size={30}
        />
        {active === "message" ? (
          <View style={styles.navItemActive}></View>
        ) : (
          <View style={{ marginTop: 5 }}></View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActive("notifications");
        }}
      >
        <MaterialIcons
          name={
            active === "notifications" ? "notifications" : "notifications-none"
          }
          color={active === "notifications" ? "#1976D2" : "black"}
          size={30}
        />
        {active === "notifications" ? (
          <View style={styles.navItemActive}></View>
        ) : (
          <View style={{ marginTop: 5 }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActive("menu");
        }}
      >
        <Feather
          name="menu"
          color={active === "menu" ? "#1976D2" : "black"}
          size={30}
        />
        {active === "menu" ? (
          <View style={styles.navItemActive}></View>
        ) : (
          <View style={{ marginTop: 5 }}></View>
        )}
      </TouchableOpacity>
    </View>
  );
}

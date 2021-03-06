import React from "react";

import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Header from "./components/Header";
import TopTabNavigator from "./navigation/TopTabNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TopTabNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

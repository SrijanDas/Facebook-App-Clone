import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Header from "../components/Header";
import TopNavigation from "../components/TopNavigation";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TopNavigation />
      {/* <Share /> */}
      {/* <Posts /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
  },
});

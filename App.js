import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Header from "./components/Header";
import Tabs from "./Tabs";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

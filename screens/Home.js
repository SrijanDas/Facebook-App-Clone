import React from "react";
import { View, Text, ScrollView } from "react-native";
import Post from "../components/Post/Post";
import Share from "../components/Share";

export default function Home() {
  return (
    <ScrollView>
      <Share />
      <Post />
    </ScrollView>
  );
}

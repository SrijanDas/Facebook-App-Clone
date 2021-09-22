import React from "react";
import { ScrollView } from "react-native";
import Post from "../components/Post/Post";
import Share from "../components/Share";
import { posts } from "../dummyData";

export default function Home() {
  return (
    <ScrollView>
      <Share />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}

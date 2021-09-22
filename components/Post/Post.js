import React from "react";
import { View, Text, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ButtonGroup } from "react-native-elements";

import styles from "./PostStyles";

export default function Post({ post }) {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft}>
          <Image
            style={styles.profileImg}
            source={post.profilePic}
            resizeMode="cover"
          />
          <View style={styles.postInfo}>
            <Text style={styles.postUser}>{post.user}</Text>
            <Text style={styles.postTime}>{post.time}</Text>
          </View>
        </View>
        <View style={styles.postHeaderRight}>
          <MaterialCommunityIcons name="dots-vertical" size={20} />
          <MaterialIcons name="close" size={20} />
        </View>
      </View>
      <View style={styles.postContent}>
        {post.text ? <Text style={styles.postCaption}>{post.text}</Text> : null}
        {post.image ? (
          <Image
            style={styles.postImage}
            source={post.image}
            resizeMode="contain"
          />
        ) : null}
      </View>

      <View style={styles.postFooter}>
        <View style={styles.postFooterStats}>
          <View style={styles.postFooterStatsLeft}>
            <Image
              style={styles.likeIcon}
              source={require("../../assets/like.png")}
              resizeMode="contain"
            />
            <Text>2.3K</Text>
          </View>
          <Text style={{ marginRight: 15 }}>
            482 comments {"\u30FB"} 65 shares
          </Text>
        </View>
        {/* <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: "lightgray" }}
          style={{ marginTop: 10 }}
        /> */}
        <View style={{ marginTop: 5 }}>
          <ButtonGroup
            buttons={buttons}
            containerStyle={{
              height: 40,
              borderWidth: 0,
              padding: 0,
              borderTopWidth: 1,
            }}
            buttonStyle={{ borderWidth: 0, borderColor: "white" }}
            buttonContainerStyle={{
              // borderWidth: 0,
              backgroundColor: "white",
              borderColor: "white",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const likeBtn = () => (
  <View style={styles.postActionBtn}>
    <AntDesign name="like2" size={20} style={{ marginRight: 5 }} color="gray" />
    <Text>Like</Text>
  </View>
);
const commentBtn = () => (
  <View style={styles.postActionBtn}>
    <MaterialCommunityIcons
      name="comment-outline"
      size={20}
      style={{ marginRight: 5, marginTop: 1 }}
      color="gray"
    />
    <Text>Comment</Text>
  </View>
);
const shareBtn = () => (
  <View style={styles.postActionBtn}>
    <Ionicons
      name="share-social-outline"
      size={20}
      style={{ marginRight: 5 }}
      color="gray"
    />
    <Text>Share</Text>
  </View>
);

const buttons = [
  { element: likeBtn },
  { element: commentBtn },
  { element: shareBtn },
];

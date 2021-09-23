import LikeImg from "../assets/like.png";
// import CommentImg from "../assets/comment.jpg";
import React from "react";
import { View, Image } from "react-native";

function LikeIcon(props) {
  return (
    <View style={{}}>
      <Image
        style={props.large ? { height: 30 } : { height: 20 }}
        source={LikeImg}
        resizeMode="contain"
      />
    </View>
  );
}

function CommentIcon(props) {
  return (
    <View style={{}}>
      <Image
        style={props.large ? { height: 30 } : { height: 20 }}
        source={require("../assets/comment.png")}
        resizeMode="contain"
      />
    </View>
  );
}

export { LikeIcon, CommentIcon };

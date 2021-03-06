import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import fontStyles from "../constants/fontStyles";
import projectColors from "../constants/projectColors";
import { CommentIcon, LikeIcon } from "../constants/icons";

export default function NotificationCard({ notification }) {
  const { user, text, time, seen, action } = notification;

  return (
    <View style={seen ? styles.container : styles.blueContainer}>
      <View>
        <Avatar rounded title="MD" source={user.profilePic} size="large" />
        <View style={{ position: "absolute", bottom: -4, right: -8 }}>
          {action === "like" && <LikeIcon large={true} />}
          {action === "comment" && <CommentIcon large={true} />}
          {action === "mention" && <CommentIcon large={true} />}
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          <Text style={{ fontWeight: fontStyles.boldFont }}>
            {user.displayName + " "}
          </Text>
          {text.toLowerCase()}
        </Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
  },
  blueContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: projectColors.lightBlue,
  },
  textContainer: {
    marginLeft: 12,
  },
  text: {
    fontSize: fontStyles.normalFontSize,
  },
  time: {
    marginTop: 5,
    fontSize: fontStyles.smallFontSize,
    color: projectColors.skyBlue,
  },
});

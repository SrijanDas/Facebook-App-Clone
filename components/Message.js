import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { ListItem, Avatar, Divider } from "react-native-elements";

export default function Message({ msgData }) {
  // {
  //   user: users[1],
  //   lastMessage: "hey.......",
  //   time: "24 Sept",
  // },
  const { user, lastMessage, time, seen } = msgData;
  const handleMessage = () => {
    console.log("clicked");
  };
  return (
    <TouchableHighlight style={styles.container} onPress={handleMessage}>
      <ListItem topDivider>
        <Avatar source={user.profilePic} rounded size="medium" />
        <ListItem.Content>
          <ListItem.Title style={!seen && styles.unseenMsg}>
            {user.displayName}
          </ListItem.Title>
          <ListItem.Subtitle style={!seen && styles.unseenMsg}>
            {lastMessage + " \u30FB" + time}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderTopWidth: 1,
  },
  unseenMsg: {
    fontWeight: "700",
    color: "black",
  },
});

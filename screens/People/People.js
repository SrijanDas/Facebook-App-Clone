import React from "react";
import { View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { users } from "../../dummyData";
import peopleStyles from "./peopleStyles";
import projectColors from "../../constants/projectColors";

export default function People() {
  const styles = peopleStyles;
  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>People you may know</Text>
      {users.map((user, i) => (
        <View key={i} style={styles.userCard}>
          <Avatar rounded title="MD" source={user.profilePic} size="large" />
          <View style={styles.userInfo}>
            <Text style={styles.displayName}>{user.displayName}</Text>
            <Text>{user.username}</Text>
            <View style={styles.cardBtns}>
              <Button
                title="Follow"
                buttonStyle={{
                  width: 110,
                  borderRadius: 7,
                  backgroundColor: projectColors.blue,
                }}
              />
              <Button
                title="Remove"
                buttonStyle={{
                  backgroundColor: projectColors.lightGrey,
                  marginLeft: 8,
                  borderRadius: 7,
                }}
                titleStyle={{ color: "black" }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

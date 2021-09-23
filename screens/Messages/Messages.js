import React from "react";
import { View, Text, ScrollView } from "react-native";
import Message from "../../components/Message";
import { messageStyles as styles } from "./messagesStyles";
import { dummyMessages } from "../../dummyData";

export default function Messages() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenHeader}>Messages</Text>
      {dummyMessages.map((m, i) => (
        <Message msgData={m} key={i} />
      ))}
      {dummyMessages.map((m, i) => (
        <Message msgData={m} key={i} />
      ))}
      {dummyMessages.map((m, i) => (
        <Message msgData={m} key={i} />
      ))}
      {dummyMessages.map((m, i) => (
        <Message msgData={m} key={i} />
      ))}
      {dummyMessages.map((m, i) => (
        <Message msgData={m} key={i} />
      ))}
      {dummyMessages.map((m, i) => (
        <Message msgData={m} key={i} />
      ))}
      {dummyMessages.map((m, i) => (
        <Message msgData={m} key={i} />
      ))}
    </ScrollView>
  );
}

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { COLORS, FONT } from "../constants";
import * as ImagePicker from "expo-image-picker";

const ChatScreen = (props) => {
  const [messages, setMessages] = useState([]);
  // Handler function to send message
  const onSend = (newMessage = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessage)
    );
  };

  const SendBtn = (props) => (
    <Send {...props}>
      <View style={styles.sendBtn}>
        <Text style={styles.sendText}>لیږل</Text>
      </View>
    </Send>
  );
  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => onSend(newMessage)}
      placeholder="دلته لیکنه وکړئ"
      user={{ _id: 1, name: "User" }}
      alwaysShowSend={true}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
      renderSend={(props) => SendBtn(props)}
      scrollToBottom={true}
    />
  );
};

const styles = StyleSheet.create({
  sendBtn: {
    height: "100%",
    width: 60,
    marginLeft: 6,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  sendText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.regular,
  },
});
export default ChatScreen;

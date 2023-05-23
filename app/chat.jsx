import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
const ChatScreen = (props) => {
  const [messages, setMessages] = useState([]);
  // Handler function to send message
  const onSend = (newMessage = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessage)
    );
  };
  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => onSend(newMessage)}
      placeholder="Type your message here..."
      user={{ _id: 1, name: "User" }}
    />
  );
};
export default ChatScreen;

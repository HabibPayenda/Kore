import React from "react";
import { ScrollView, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "expo-router";
import { COLORS } from "../../constants";
import NotificationCard from "../../components/notifications/NotificationCard/NotificationCard";

const notifications = [
  {
    id: 1,
    title: "New message from John",
    description: "Hey, how's it going?",
    date: "May 23, 2023",
    // imageSource: require('./images/john.jpg'),
  },
  {
    id: 2,
    title: "New message from Sarah",
    description: "Can you meet me at the café later?",
    date: "May 22, 2023",
    // imageSource: require('./images/sarah.jpg'),
  },
  {
    id: 3,
    title: "You've got a new follower",
    description: "Adam just started following you.",
    date: "May 21, 2023",
    // imageSource: require('./images/adam.jpg'),
  },
  {
    id: 4,
    title: "New message from Jane",
    description: "Do you have time to chat later?",
    date: "May 20, 2023",
    // imageSource: require('./images/jane.jpg'),
  },
  {
    id: 5,
    title: "You've got a new friend request",
    description: "Tom wants to be friends with you.",
    date: "May 19, 2023",
    // imageSource: require('./images/tom.jpg'),
  },
  {
    id: 6,
    title: "New message from Alex",
    description: "Hey, do you have any plans for the weekend?",
    date: "May 18, 2023",
    // imageSource: require('./images/alex.jpg'),
  },
  {
    id: 7,
    title: "You've got a new follower",
    description: "Emily just started following you.",
    date: "May 17, 2023",
    // imageSource: require('./images/emily.jpg'),
  },
  {
    id: 8,
    title: "New message from Michael",
    description: "Can you help me with this coding problem?",
    date: "May 16, 2023",
    // imageSource: require('./images/michael.jpg'),
  },
  {
    id: 9,
    title: "You've got a new friend request",
    description: "Lily wants to be friends with you.",
    date: "May 15, 2023",
    // imageSource: require('./images/lily.jpg'),
  },
  {
    id: 10,
    title: "New message from David",
    description: "I have a new job offer for you.",
    date: "May 14, 2023",
    // imageSource: require('./images/david.jpg'),
  },
];

const Notifications = () => {
  const navigation = useNavigation();

  const renderNotification = ({ item }) => {
    return (
      <NotificationCard
        title={item.title}
        description={item.description}
        date={item.date}
        imageSource={item.imageSource}
        onPress={() => console.log(`Pressed notification ${item.id}`)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default Notifications;

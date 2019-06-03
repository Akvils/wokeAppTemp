import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { Icon } from "expo";
import CoursesScreen from "../screens/CoursesScreen";
import ProcessScreen from "../screens/ProcessScreen";
import VideoScreen from "../screens/VideoScreen";
import JournalsScreen from "../screens/JournalsScreen";
import ChatScreen from "../screens/ChatScreen";

const activeColor = "#241824";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
    Video: VideoScreen
  },
  {
    mode: "modal"
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section" || routeName == "Video") {
    // section or chat or diary or analysis
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Icon.Ionicons
        name="ios-planet"
        size={32}
        color={focused ? activeColor : inactiveColor}
      />
    ),
    tabBarOptions: {
      showLabel: false
    }
  };
};

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen
});

CoursesStack.navigationOptions = {
  tabBarLabel: "Courses",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-bookmarks"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
  tabBarOptions: {
    showLabel: false
  }
};

const ProcessStack = createStackNavigator({
  Process: ProcessScreen
});

ProcessStack.navigationOptions = {
  tabBarLabel: "Process",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
  tabBarOptions: {
    showLabel: false
  }
};

const JournalsStack = createStackNavigator({
  Journals: JournalsScreen
});

JournalsStack.navigationOptions = {
  tabBarLabel: "Journals",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-journal"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
  tabBarOptions: {
    showLabel: false
  }
};

const ChatStack = createStackNavigator({
  Chat: ChatScreen
});

ChatStack.navigationOptions = {
  tabBarLabel: "Chat",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-chatbubbles"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
  tabBarOptions: {
    showLabel: false
  }
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProcessStack,
  JournalsStack,
  ChatStack
});

export default TabNavigator;

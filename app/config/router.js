import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Programs from '../screens/Programs'
import Notifications from '../screens/Notifications'

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const Tabs = TabNavigator(
  {
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarLabel: 'Timeline',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    Program: {
      screen: Programs,
      navigationOptions: {
        tabBarLabel: 'Program',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
    Notification: {
      screen: Notifications,
      navigationOptions: {
        tabBarLabel: 'Notification',
        tabBarIcon: ({ tintColor }) => <Icon name="notifications" size={35} color={tintColor} />
      },
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },{
    tabBarPosition:'bottom',
  });

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

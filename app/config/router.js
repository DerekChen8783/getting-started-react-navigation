import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Programs from '../screens/Programs'
import Notifications from '../screens/Notifications'
import Timeline from '../screens/Timeline'
import Profile from '../screens/Profile'

export const Tabs = TabNavigator(
  {
    Timeline: {
      screen: Timeline,
      navigationOptions: {
        tabBarLabel: 'Timeline',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    Programs: {
      screen: Programs,
      navigationOptions: {
        tabBarLabel: 'Program',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        //tabBarLabel: '',
        tabBarIcon: ({ tintColor }) => <Icon type='ionicon' name="md-notifications" size={35} color={tintColor} />
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },{
    tabBarPosition:'bottom',
  });


export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  
}, {
  mode: 'modal',
  headerMode: 'none',
});

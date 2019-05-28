import React from "react";
import {
  createBottomTabNavigator,
  NavigationScreenProps,
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../../screens/Home";
import BusMap from "../../screens/BusMap";

export enum APP_FLOW_ROUTES {
  Home = "Home",
  BusMap = "BusMap",
}

const AppFlow = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }: NavigationScreenProps<{}>) => ({
        title: "Roteiros",
        tabBarIcon: <Icon name="bus-clock" size={24} />,
      }),
    },
    BusMap: {
      screen: BusMap,
      navigationOptions: ({ navigation }: NavigationScreenProps<{}>) => ({
        title: "BusUcsal",
        tabBarIcon: <Icon name="map-marker" size={24} />,
      }),
    },
  },
  {
    initialRouteName: APP_FLOW_ROUTES.Home,
  },
);

export default AppFlow;

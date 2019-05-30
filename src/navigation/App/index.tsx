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
      navigationOptions: ({ navigation }: NavigationScreenProps<{}>) => ({
        tabBarIcon: <Icon name="bus-clock" size={24} />,
        title: "Roteiros",
      }),
      screen: Home,
    },
    // tslint:disable-next-line: object-literal-sort-keys
    BusMap: {
      navigationOptions: ({ navigation }: NavigationScreenProps<{}>) => ({
        tabBarIcon: <Icon name="map-marker" size={24} />,
        title: "BusUcsal",
      }),
      screen: BusMap,
    },
  },
  {
    initialRouteName: APP_FLOW_ROUTES.Home,
  },
);

export default AppFlow;

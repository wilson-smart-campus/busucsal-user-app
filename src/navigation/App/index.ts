import { createBottomTabNavigator } from "react-navigation";

import Home from "../../screens/Home";
import BusMap from "../../screens/BusMap";
import { Colors, DefaultTheme } from "react-native-paper";

export enum APP_FLOW_ROUTES {
  Home = "Home",
  BusMap = "BusMap",
}

const AppFlow = createBottomTabNavigator(
  {
    Home,
    // tslint:disable-next-line: object-literal-sort-keys
    BusMap,
  },
  {
    initialRouteName: APP_FLOW_ROUTES.Home,
    tabBarOptions: {
      activeTintColor: "white",
      style: {
        backgroundColor: DefaultTheme.colors.primary,
      },
    },
  },
);

export default AppFlow;

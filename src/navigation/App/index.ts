import { createBottomTabNavigator } from "react-navigation";

import Home from "../../screens/Home";
import BusMap from "../../screens/BusMap";

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
  },
);

export default AppFlow;

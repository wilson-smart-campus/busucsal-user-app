import { createStackNavigator } from "react-navigation";

import LoginScreen from "../../screens/Login";

export enum AUTH_FLOW_ROUTES {
  LOGIN = "LoginScreen",
}

const AuthFlow = createStackNavigator(
  {
    LoginScreen,
  },
  {
    initialRouteName: AUTH_FLOW_ROUTES.LOGIN,
    headerMode: "none",
  },
);

export default AuthFlow;

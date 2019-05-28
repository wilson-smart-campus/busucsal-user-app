import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthFlow from "./Auth";
import AppFlow from "./App";

const AppSwitch = createSwitchNavigator(
  {
    Auth: AuthFlow,
    App: AppFlow,
  },
  {
    initialRouteName: "App",
  },
);

export const MainAppContainer = createAppContainer(AppSwitch);

export default MainAppContainer;

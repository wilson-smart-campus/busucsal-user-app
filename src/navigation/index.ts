import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthFlow from "./Auth";

const AppFlow = createSwitchNavigator({
  Auth: AuthFlow
});

const MainAppRoute = createAppContainer(AppFlow);

export default MainAppRoute;

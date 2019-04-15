import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("react-navigation", () => ({
  FlatList: Comp => Comp,
  ScrollView: Comp => Comp,
  SectionList: Comp => Comp,
  BottomTabBar: require.requireActual("react-navigation").BottomTabBar,
  createAppContainer: jest.fn().mockImplementation(Comp => Comp),
  createStackNavigator: jest
    .fn()
    .mockImplementation((scenes, config) => ({ scenes, config })),
  createSwitchNavigator: jest
    .fn()
    .mockImplementation((scenes, config) => ({ scenes, config })),
  createBottomTabNavigator: jest
    .fn()
    .mockImplementation((scenes, config) => ({ scenes, config })),
  StackActions: {
    push: jest
      .fn()
      .mockImplementation(x => ({ ...x, type: "Navigation/PUSH" })),
    replace: jest
      .fn()
      .mockImplementation(x => ({ ...x, type: "Navigation/REPLACE" })),
  },
  NavigationActions: { navigate: jest.fn().mockImplementation(props => props) },
  SafeAreaView: Comp => Comp,
  HeaderTitle: Comp => Comp,
  Header: { HEIGHT: 64 },
}));

global.fetch = require("jest-fetch-mock");
Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

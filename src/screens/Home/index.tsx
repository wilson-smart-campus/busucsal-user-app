import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationScreenProp, NavigationScreenProps } from "react-navigation";
import Header from "../../components/Header";

import styles from "../../resources/styles";
import ActivityIndicator from "../../components/ActivityIndicator";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BusRoutesList from "../../components/BusRoutes/BusRoutesList";
import { IRoute } from "../../types/Route";

export interface IProps {
  navigation: NavigationScreenProp<{}>;
}

export interface IState {
  isLoading: boolean;
}

class Home extends React.Component<IProps, IState> {
  public static navigationOptions = ({
    navigation,
  }: NavigationScreenProps<{}>) => ({
    tabBarIcon: <Icon name="bus-clock" color="white" size={24} />,
    title: "Roteiros",
  });

  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  renderBusItem = () => {};

  public render() {
    const { navigation } = this.props;
    const { isLoading } = this.state;

    const routes: IRoute[] = [
      {
        route: "Roteiro 1",
        routeHour: "8:30",
        id: "0",
        points: [
          {
            lat: 0,
            lng: 0,
            name: "UCSAL",
          },
          {
            lat: 0,
            lng: 0,
            name: "Greenville",
          },
          {
            lat: 0,
            lng: 0,
            name: "Ponto CAB",
          },
          {
            lat: 0,
            lng: 0,
            name: "Ponto Pituaçu",
          },
          {
            lat: 0,
            lng: 0,
            name: "UCSAL",
          },
        ],
      },
      {
        route: "Roteiro 2",
        routeHour: "9:00",
        id: "1",
        points: [],
      },
      {
        route: "Roteiro 3",
        routeHour: "9:30",
        id: "2",
        points: [],
      },
    ];

    return (
      <SafeAreaView style={styles.Flex}>
        <Header title="Roteiros" subtitle="Próximos horários" />

        {/* <ActivityIndicator size="large" color="blue" /> */}
        <BusRoutesList routes={routes} />
      </SafeAreaView>
    );
  }
}

export default Home;

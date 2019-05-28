import * as React from "react";
import { SafeAreaView } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import BusRoutesItem from "../../components/BusRoutes/BusRoutesItem";
import Header from "../../components/Header";

import styles from "../../resources/styles";
import { ProgressBar } from "react-native-paper";
import ActivityIndicator from "../../components/ActivityIndicator";

export interface IProps {
  navigation?: NavigationScreenProp<{}>;
}

export interface IState {
  isLoading: boolean;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  public render() {
    const { navigation } = this.props;
    const { isLoading } = this.state;

    return (
      <SafeAreaView style={styles.Flex}>
        <Header title="Roteiros" subtitle="Próximos horários" />
        <ActivityIndicator size="large" color="blue" />
      </SafeAreaView>
    );
  }
}
export default Home;

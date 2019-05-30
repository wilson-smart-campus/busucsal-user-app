import * as React from "react";
import MapView from "react-native-maps";
import { NavigationScreenProps } from "react-navigation";

export default class BusMap extends React.Component<NavigationScreenProps> {
  constructor(props: NavigationScreenProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const initialRegion = {
      latitude: 37.78825,
      latitudeDelta: 0.0922,
      longitude: -122.4324,
      longitudeDelta: 0.0421,
    };

    return <MapView initialRegion={initialRegion} />;
  }
}

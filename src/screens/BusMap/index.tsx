import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { NavigationScreenProps } from "react-navigation";
import styles from "../../resources/styles";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PROVIDER = Platform.OS === "android" ? PROVIDER_GOOGLE : null;

function BusMap(props: NavigationScreenProps) {
  const initialRegion = {
    latitude: -12.947772,
    latitudeDelta: 0.005,
    longitude: -38.413228,
    longitudeDelta: 0.005,
  };

  return (
    <MapView
      provider={PROVIDER}
      initialRegion={initialRegion}
      style={styles.Flex}
    />
  );
}

BusMap.navigationOptions = ({ navigation }: NavigationScreenProps<{}>) => ({
  tabBarIcon: <Icon name="map-marker" size={24} />,
  title: "BusUcsal",
});

export default BusMap;

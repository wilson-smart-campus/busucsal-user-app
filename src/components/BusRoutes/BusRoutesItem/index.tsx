import * as React from "react";
import { List, Divider } from "react-native-paper";
import { Route } from "../../../types/Route";

export interface IBusRoutesItemProps {
  routeHour: string;
  route: string;
  onPress: () => void;
}

const BusRoutesItem = ({ route, routeHour, onPress }: IBusRoutesItemProps) => (
  <React.Fragment>
    <List.Item
      title={route}
      description={routeHour}
      onPress={onPress}
      left={props => <List.Icon {...props} icon="access-time" />}
      right={props => <List.Icon {...props} icon="navigate-next" />}
    />
    <Divider />
  </React.Fragment>
);

export default BusRoutesItem;

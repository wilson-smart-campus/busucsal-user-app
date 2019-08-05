import * as React from "react";
import { List, Divider, DefaultTheme } from "react-native-paper";
import { IPoints } from "../../../types/Route";

import * as Animatable from "react-native-animatable";

const ListItem = Animatable.createAnimatableComponent(List.Item);

const DEFAULT_DELAY = 100;

export interface IBusRoutesItemProps {
  routeHour: string;
  route: string;
  onPress?: () => void;
  points: IPoints[];
}

const BusRoutesItem = ({
  route,
  routeHour,
  onPress,
  points,
}: IBusRoutesItemProps) => (
  <React.Fragment>
    <List.Accordion
      title={route}
      description={routeHour}
      onPress={onPress}
      left={props => <List.Icon {...props} icon="directions" />}
    >
      {points.map((item, idx) => (
        <ListItem
          key={item.name + idx}
          animation="bounceInLeft"
          delay={DEFAULT_DELAY * idx}
          useNativeDriver
          title={item.name}
          left={props => <List.Icon {...props} icon="place" />}
          right={props => {
            if (idx === 0) {
              return (
                <List.Icon
                  {...props}
                  color={DefaultTheme.colors.primary}
                  icon="directions-bus"
                />
              );
            }
          }}
        />
      ))}
    </List.Accordion>
    <Divider />
  </React.Fragment>
);

export default BusRoutesItem;

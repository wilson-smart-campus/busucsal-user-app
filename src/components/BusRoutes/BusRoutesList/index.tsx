import React from "react";

import { FlatList } from "react-native";

import { Route } from "../../../types/Route";
import BusRoutesItem from "../BusRoutesItem";

interface IProps {
  routes: Route[];
  onClickItem: (route: Route) => void;
}

const BusRoutesList = ({ routes, onClickItem }: IProps) => (
  <FlatList
    data={routes}
    renderItem={({ item }) => (
      <BusRoutesItem
        key={item.id}
        onPress={() => onClickItem(item)}
        route={item.route}
        routeHour={item.routeHour}
      />
    )}
  />
);

export default BusRoutesList;

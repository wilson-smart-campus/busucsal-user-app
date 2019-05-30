import React from "react";

import { FlatList } from "react-native";

import { IRoute } from "../../../types/Route";
import BusRoutesItem from "../BusRoutesItem";

interface IProps {
  routes: IRoute[];
  onClickItem: (route: IRoute) => void;
}

const BusRoutesList = ({ routes, onClickItem }: IProps) => {
  const renderItem = (item: IRoute) => (
    <BusRoutesItem
      key={item.id}
      onPress={() => onClickItem(item)}
      route={item.route}
      routeHour={item.routeHour}
    />
  );

  return <FlatList data={routes} renderItem={({ item }) => renderItem(item)} />;
};

export default BusRoutesList;

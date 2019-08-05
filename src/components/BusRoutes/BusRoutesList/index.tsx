import React from "react";

import { FlatList } from "react-native";

import { IRoute } from "../../../types/Route";
import BusRoutesItem from "../BusRoutesItem";

interface IProps {
  routes: IRoute[];
}

const BusRoutesList = ({ routes }: IProps) => {
  const renderItem = (item: IRoute) => (
    <BusRoutesItem key={item.id} {...item} />
  );

  return <FlatList data={routes} renderItem={({ item }) => renderItem(item)} />;
};

export default BusRoutesList;

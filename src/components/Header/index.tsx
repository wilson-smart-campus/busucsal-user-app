import React from "react";
import { Appbar } from "react-native-paper";

interface IProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IProps) => (
  <Appbar.Header>
    <Appbar.Content title={title} subtitle={subtitle} />
  </Appbar.Header>
);

export default Header;

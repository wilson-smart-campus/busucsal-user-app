import React from "react";
import { shallow } from "enzyme";
import BusRoutesItem from "..";

describe("<BusRoutesItem />", () => {
  const getProps = () => ({
    onPress: () => "",
    route: "essamsm",
    routeHour: "alguma",
    points: [],
  });

  describe("render", () => {
    it("should render properly", () => {
      const propsMock = getProps();

      const wrapper = shallow(<BusRoutesItem {...propsMock} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import BusRoutesList from "..";

describe("<BusRoutesList />", () => {
  const getProps = () => ({
    routes: [
      {
        id: 1,
        route: "",
        routeHour: new Date().toLocaleDateString(),
        points: [
          {
            lat: 123123,
            lng: 123123,
            name: "dat",
          },
        ],
      },
    ],
    onClickItem: jest.fn(),
  });

  describe("render", () => {
    it("should render properly", () => {
      const propsMock = getProps();

      const wrapper = shallow(<BusRoutesList {...propsMock} />);
      expect(wrapper).toMatchSnapshot();
    });

    test.todo("Test if list renders a item");
  });
});

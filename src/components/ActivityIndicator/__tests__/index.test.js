import React from "react";
import { shallow } from "enzyme";
import ActivityIndicator from "..";

describe("<ActivityIndicator />", () => {
  const getProps = () => ({
    color: "blue",
  });

  describe("render", () => {
    it("should render properly", () => {
      const propsMock = getProps();

      const wrapper = shallow(<ActivityIndicator {...propsMock} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

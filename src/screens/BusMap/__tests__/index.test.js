import React from "react";
import { shallow } from "enzyme";

import BusMap from "..";

describe("BusMap Screen", () => {
  describe("render", () => {
    it("should render properly", () => {
      const wrapper = shallow(<BusMap />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

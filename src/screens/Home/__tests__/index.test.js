import React from "react";
import { shallow } from "enzyme";
import Home from "..";

describe("Home Screen", () => {
  describe("render", () => {
    it("should render properly", () => {
      const wrapper = shallow(<Home />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  test.todo("New Tests for new behavior");
});

import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Login from "../";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Login", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    let props: Object;

    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<Login />);
    });

    it("should render properly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

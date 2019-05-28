import React from "react";
import { shallow } from "enzyme";
import Login from "..";
import { Button } from "react-native";

describe("Login Screen", () => {
  describe("render", () => {
    it("should render properly", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper).toMatchSnapshot();
    });

    it("should render a disabled button when email is empty", () => {
      const wrapper = shallow(<Login />);

      wrapper.setState({
        email: "",
      });

      const button = wrapper.find(Button).last();
      expect(button.props().disabled).toBe(true);
    });

    it("should render a disabled button when password is empty", () => {
      const wrapper = shallow(<Login />);

      wrapper.setState({
        password: "",
      });

      const button = wrapper.find(Button).last();
      expect(button.props().disabled).toBe(true);
    });

    it("should render a enabled button when email and password is fullfiled", () => {
      const wrapper = shallow(<Login />);

      wrapper.setState({
        email: "issoae",
        password: "elemsm",
        isDisabled: false,
      });

      const button = wrapper.find(Button).last();
      expect(button.props().disabled).toBe(false);
    });
  });

  describe("behavior", () => {
    //Check if login is called
    it("should call auth service on button press", () => {
      const wrapper = shallow(<Login />);
    });
  });
});

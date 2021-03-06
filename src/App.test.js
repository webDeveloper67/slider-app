import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
import Review from "./components/Review";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory Function - Create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - component props to this setup
 * @param {any} state - Initail state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value fo data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("render it's child component", () => {
  const wrapper = setup();
  expect(wrapper.containsMatchingElement(<Review />)).toEqual(true);
});

test("Initial state of slideInx is 0", () => {
  const wrapper = setup();
  const initialSlideInxState = wrapper.state("slideInx");
  expect(initialSlideInxState).toBe(0);
});

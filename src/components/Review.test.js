import React from "react";
import Enzyme, { shallow, ShallowWrapper, mount, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Review from "./Review";

Enzyme.configure({ adapter: new Adapter() });

const AppProps = {
  people: [
    {
      image: "http://fake.com",
      text: "test info",
      job: "fakejob",
      name: "slide name",
    },
  ],
  slideInx: 0,
  nextPerson: () => {
    console.log("next person");
  },
  prevPerson: () => {
    console.log("perv person");
  },
  randomPerson: () => {
    console.log("random person");
  },
};

/**
 * Factory Function - Create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - component props to this setup
 * @param {any} state - Initail state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Review {...AppProps} />);
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
  expect(<Review />).not.toBeNull();
});

test("check props passed in", () => {
  const wrapper = shallow(<Review {...AppProps} />);
  // console.log(wrapper.prop("slideInx"));
  // console.log(wrapper.debug());
  // console.log(wrapper.props());
  expect(wrapper.prop("slideInx")).toEqual(0);
});

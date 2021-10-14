import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Home from "./Home";
import Form from "../../components/Task/Form";
import List from "../../components/Task/List";

describe("<Home />", () => {
  it("Expect to not log errors in console", () => {
    // eslint-disable-next-line
    const spy = jest.spyOn(global.console, "error");
    const wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders page", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(List)).toHaveLength(1);
  });
});

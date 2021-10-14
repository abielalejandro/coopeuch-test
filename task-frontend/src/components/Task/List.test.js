import React from "react";
import { shallow } from "enzyme";
import List from "./List";

import mockData from "./mockData.json";

describe("<List />", () => {
  it("Expect to not log errors in console", () => {
    // eslint-disable-next-line
    const spy = jest.spyOn(global.console, "error");
    const wrapper = shallow(
      <List tasks={mockData} onEdit={() => {}} onDelete={() => {}}></List>
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    const wrapper = shallow(
      <List items={mockData} onEdit={() => {}} onDelete={() => {}}></List>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders an `.alert`", () => {
    const wrapper = shallow(
      <List items={mockData} onEdit={() => {}} onDelete={() => {}}></List>
    );
    expect(wrapper.find("table")).toBeTruthy();
  });
});

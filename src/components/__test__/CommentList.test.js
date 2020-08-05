import React from "react";
import CommentList from "components/CommentList";
import { mount } from "enzyme";
import Root from "Root";

let wrapper;
beforeEach(() => {
  const initialState = {
    comments: ["comment 1", "comment 2"],
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("create one <li> per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

it("shows the text visiable", () => {
  expect(wrapper.render().text()).toContain("comment 1");
});

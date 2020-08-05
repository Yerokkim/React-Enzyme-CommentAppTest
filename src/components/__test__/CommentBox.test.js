import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import Root from "Root";

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has text area and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
});
describe("text input", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    wrapper.update();
  });
  it("has a text area which user can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("has no input after user click the submit button", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});

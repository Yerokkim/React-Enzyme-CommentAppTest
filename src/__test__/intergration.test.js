import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import moxios from "moxios";
import App from "App";

beforeEach(() => {
  moxios.install();

  moxios.stubRequest("https://jsonplaceholder.typicode.com/posts/1/comments", {
    status: 200,
    response: [{ name: "fetch 1" }, { name: "fetch 2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", () => {
  // attempt to render the entire app

  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetchComments' button and click it

  wrapper.find(".fetch-data").simulate("click");
  //expect to find a list of commnets

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(2);

    wrapper.unmount();
  });
});

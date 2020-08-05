import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("save comment", () => {
  it("has the correct type", () => {
    const actions = saveComment();

    expect(actions.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const actions = saveComment("new");
    expect(actions.payload).toEqual("new");
  });
});

// describe("fetch comments", () => {
//     it("has the correct type", () => {});

//     it("has the correct payload", () => {});
//   });

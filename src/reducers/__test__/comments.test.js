import commentsReducer from "reducers";
import { SAVE_COMMENT } from "actions/types";

it("handles types of SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual({ comments: ["new comment"] });
});

it("handle action which is unknown type", () => {
  const newState = commentsReducer([], { type: "sksksk" });
  expect(newState).toEqual([]);
});

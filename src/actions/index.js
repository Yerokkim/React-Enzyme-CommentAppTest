import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";
import axios from "axios";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = async () => {
  let res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  return {
    type: FETCH_COMMENTS,
    payload: res.data,
  };
};

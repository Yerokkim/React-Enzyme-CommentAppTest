import React, { useState } from "react";
import { connect } from "react-redux";

import { saveComment, fetchComments } from "actions";
const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState("");
  const submit = (e) => {
    e.preventDefault();
    saveComment(comment);
    console.log(comment);
    setComment("");
  };

  const fetchData = () => {
    fetchComments();
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h5>comments</h5>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">submit</button>
      </form>
      <button className="fetch-data" onClick={fetchData}>
        fetch data
      </button>
    </div>
  );
};

const mapStateToProps = () => {};

export default connect(null, { saveComment, fetchComments })(CommentBox);

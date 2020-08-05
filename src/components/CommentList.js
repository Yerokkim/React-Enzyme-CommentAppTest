import React from "react";
import { connect } from "react-redux";
const CommentList = ({ comments }) => {
  const renderComments = () => {
    return comments.map((x, i) => {
      return <li key={i}>{x}</li>;
    });
  };
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);

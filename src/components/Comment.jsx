import React from "react";

class Comment extends React.Component {
  state = {
    comment: "",
  };
  render() {
    return (
      <textarea
        className="form-control article-form-control"
        name="comment"
        cols="30"
        rows="8"
        placeholder="Write a comment..."
      ></textarea>
    );
  }
}

export default Comment;

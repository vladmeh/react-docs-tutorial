import React from "react";

import Comment from "./commentList/Comment"

export default class CommentList extends React.Component  {
  render() {
    return (
      <div className="commentList">
        <Comment autor="Pete Hunt">This is one comment</Comment>
        <Comment autor="Jordan Wake">This is *another* comment</Comment>
      </div>
    );
  }
}

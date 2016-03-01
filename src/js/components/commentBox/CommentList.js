import React from "react";

import Comment from "./commentList/Comment"

export default class CommentList extends React.Component  {
  render() {
    var commentNodes = this.props.data.map((comment, i)=>{
      return (
        <Comment autor={comment.author} key={i}>
          {comment.text}
        </Comment>
      )
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

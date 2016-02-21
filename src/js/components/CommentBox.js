import React from "react";

import CommentList from "./commentBox/CommentList"
import CommentForm from "./commentBox/CommentForm"

export default class CommentBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    );
  }
}

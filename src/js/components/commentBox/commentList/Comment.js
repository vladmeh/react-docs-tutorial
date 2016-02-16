import React from "react";

export default class Comment extends React.Component  {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAutor">
          {this.props.autor}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

import React from "react";
import Marked from "marked";

export default class Comment extends React.Component  {
  rawMarkup() {
    var rawMarkup = Marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAutor">
          {this.props.autor}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

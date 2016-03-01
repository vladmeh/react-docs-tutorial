import React from "react";
import $ from "jquery";

import CommentList from "./commentBox/CommentList"
import CommentForm from "./commentBox/CommentForm"

export default class CommentBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        //console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
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

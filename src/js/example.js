import React from "react";
import ReactDOM from "react-dom";

import CommentBox from "./components/CommentBox"

const app = document.getElementById('app');

// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });

ReactDOM.render(<CommentBox />, app);

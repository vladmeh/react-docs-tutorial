import React from "react";
import ReactDOM from "react-dom";

import CommentBox from "./components/CommentBox"

const app = document.getElementById('app');


ReactDOM.render(<CommentBox url="/api/comments"/>, app);

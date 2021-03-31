import { Link } from "react-router-dom";
import React from "react";
function Comments(comment) {
  return `
           ${comment.userId} : 
            ${comment.text}
            
          `;
}
export default Comments;

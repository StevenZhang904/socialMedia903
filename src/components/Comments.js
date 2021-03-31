import React from "react";
import { Link } from "react-router-dom";


function Comments(props) {
  const userId = props.userId;
  const desc = props.desc;
  const comments = props.comments;

  const listItems = comments.map(comment => (
     <div>
      <Link key={comment.userId} to={`/profile/${comment.userId}`}>
        <strong>{comment.userId}</strong>:
      </Link>{comment.text}</div>
    
  ));

  return (
    <div>
        <Link key={userId} to={`/profile/${userId}`}>
          <strong>{userId}</strong>
  </Link>
      :<div>{props.desc}</div>
       {listItems}
    
    </div>
  );
}

export default Comments;

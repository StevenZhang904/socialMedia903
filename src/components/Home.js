import React from "react";
import Post from "./Post.js";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
 import useHistory from 'react-router-dom'
function Home(props) {
  let {
    posts,
    users,
    comments,
    likes,
    currentUserId,
    addComment,
    addLike,
    removeLike
  } = useContext(StoreContext);
  let { postId } = useParams(); // the variable name has to match the parameter name
  const { store } = props;
  console.log(posts);
  function fineUser(post, store) {
    return users.find(user => user.id === post.userId);
  }

  function findComments(post, store) {
    return comments.filter(comment => comment.postId === post.id);
  }

  function findLikes(post, store) {
    let postLikes = likes.filter(like => like.postId === post.id);
    return {
      self: postLikes.some(like => like.userId === currentUserId),
      count: postLikes.length
    };
  }
  return (
    <div>
      {posts
        .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        .filter(
          postId === undefined ? post => post : post => post.id === postId
        )
        .map(post => (
          <Post
            key={post.id}
            user={fineUser(post, store)}
            post={post}
            comments={findComments(post, store)}
            likes={findLikes(post, store)}
            onLike={addLike}
            onUnlike={removeLike}
            onComment={addComment}
          />
        ))}
    </div>
  );
}

export default Home;

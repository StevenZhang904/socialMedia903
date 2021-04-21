import React, { useState, useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import Comments from "./Comments.js";
import { Link } from "react-router-dom";

import css from "./Home.module.css";
import timespan from "./timespan.js";

function Post(props) {
  const [comment, setComment] = useState("");
  const [toggleComment, setToggleComment] = useState(false);
  function handleLike() {
    props.onLike(props.post.id);
  }
  function handleUnlike() {
    props.onUnlike(props.post.id);
  }
  function handleSubmitComment(event) {
    props.onComment(props.post.id, comment); // this calls addComment from App.js
    setComment(""); //reset
    setToggleComment(false); //close comment box
    event.preventDefault(); // prevent page refresh
  }
  return (
    <div>
      <div>
        <div className={css.Publisher}>
          <img className={css.image1} src={props.user.photo} alt="userPic" />
          <h3>
            <Link to={"/profile/" + props.user.id}>{props.user.id}</Link>
          </h3>
        </div>
        <div>
          <img src={props.post.photo} alt="postPic" />
        </div>
        <div>
          <button>
            {props.likes.self ? (
              <img
                src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Funlike.svg?v=1615537273752"
                onClick={handleUnlike}
                alt="Unlike Action"
              />
            ) : (
              <img
                src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Flike.svg?v=1615537271894"
                onClick={handleLike}
                alt="Like Action"
              />
            )}
          </button>
          <button onClick={e => setToggleComment(!toggleComment)}>
            <img
              src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fcomment.svg?v=1615537270698"
              alt="Comment"
            />
          </button>
          <p className={css.Likes}>{props.likes.count}likes</p>
        </div>
        <div className={css.container}>
          <Comments
            userId={props.post.userId}
            desc={props.post.desc}
            comments={props.comments}
          />
          <br></br>
          <div className={css.TimeStamp}>{timespan(props.post.datetime)}</div>
          {toggleComment && (
            <form className={css.addComment} onSubmit={handleSubmitComment}>
              <input
                type="text"
                placeholder="Add a comment…"
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <button type="submit">Post</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;

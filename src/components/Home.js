import React from "react";
import css from "./Home.module.css";
function Home() {
  const post = {
    user: {
      id: "judy",
      photo:
        "https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fuser1.png?v=1615537283783"
    },
    post: {
      id: "post-1",
      userId: "judy",
      photo:
        "https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fpost1.png?v=1615537275632",
      desc: "#zootopia #excited",
      datetime: "2020-02-09T22:45:28Z"
    },
    likes: {
      self: true,
      count: 1
    },
    comments: [
      {
        userId: "nick",
        text: "Welcome to Zootopia!"
      },
      {
        userId: "judy",
        text: "Thanks!😁Looking forward to meeting you!"
      }
    ]
  };

  return (
    <Post
      user={post.user}
      likes={post.likes}
      post={post.post}
      comments={post.comments}
    />
  );
}

function Post(props) {
  return (
    <div>
      <div>
        <div className={css.Publisher}>
          <img className={css.image1} src={props.user.photo} alt="userPic" />
          <h3>{props.user.id}</h3>
        </div>
        <div>
          <img src={props.post.photo} alt="postPic" />
        </div>
        <div>
          <img
            src={
              props.likes.self === true
                ? "https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Funlike.svg?v=1615537273752"
                : "https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Flike.svg?v=1615537271894"
            }
            alt="likePic"
          />
          <img
            src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fcomment.svg?v=1615537270698"
            alt="commentPic"
          />
          <p className={css.Likes}>{props.likes.count}likes</p>
        </div>  
        <div className={css.container}>
          {props.user.id}:{props.post.desc}<br></br>
          {props.comments
      .map(comment => renderComments(comment))}<br></br>
          <div className = {css.TimeStamp}>{timeSince(props.post.datetime)}</div>
        </div>
      </div>
    </div>
  );
}

function renderComments(comment) {

        return `
            ${comment.userId}:
            ${comment.text} 
          `
        ; 

  
}

function timeSince(date) {
  
  var date1 = new Date();
  date1.setTime( Date.parse(date));

  
  var seconds = Math.floor((new Date() - date1) / 1000);
  console.log(Date());
  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago ";
  }
  return Math.floor(seconds) + " seconds ago";
}

var aDay = 24 * 60 * 60 * 1000;

export default Home;

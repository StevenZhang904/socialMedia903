import React from "react";
import Header from "./Header.js";
import PostThumbnail from "./PostThumbnail.js";
import css from "./Profile.module.css";
import { useParams, Link } from "react-router-dom";

function Profile(props) {
  const { store } = props;
    let { userId } = useParams();
  const userA = store.users.find(user => (user.id != null ? user.id == userId : user.id === store.currentUserId));

  function getPosts() {
    return store.posts.filter(post => post.userId === userA.id);
  }

  function Posts() {
    let posts = getPosts();
    return posts.length;
  }

  function Followers() {
    let followers = store.followers.filter(
      follower => follower.userId === userA.id
    );
    return followers.length;
  }

  function Following() {
    let followers = store.followers.filter(
      follower => follower.followerId === userA.id
    );
    return followers.length;
  }

  function get() {
    return getPosts().map(post => (
      <Link   key = {post.id} to= {`/${post.id}`}>
        <PostThumbnail props={post} />
      </Link>
    ));
  }
  return (
    <div>
      <Header />
      <div className={css.upper}>
        <div className={css.pr}>
          <div className={css.head}>
            <img src={userA.photo} alt="face" />
            <h2>{userA.id}</h2>
          </div>
          <div className={css.intro}>
            <p>
              <strong>{userA.name}</strong>
            </p>
            <p>{userA.bio}</p>
          </div>
        </div>
        <div className={css.a}>
          <div>
            <p>
              <strong>{Posts()}</strong>
            </p>
            <p className={css.w}>posts</p>
          </div>
          <div>
            <p>
              <strong>{Followers()}</strong>
            </p>
            <p className={css.w}>followers</p>
          </div>
          <div>
            <p>
              <strong>{Following()}</strong>
            </p>
            <p className={css.w}>following</p>
          </div>
        </div>
      </div>
      <div className={css.lower}>
        <div className={css.posts}>{get()}</div>
      </div>
    </div>
  );
}

export default Profile;

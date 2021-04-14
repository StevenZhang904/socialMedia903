import React, { useContext }from "react";
import Header from "./Header.js";
import PostThumbnail from "./PostThumbnail.js";
import css from "./Profile.module.css";
import { useParams, Link } from "react-router-dom";
import { StoreContext } from "../contexts/StoreContext";

function Profile(props) {
  let {
    posts,
    users,
    comments,
    likes,
    currentUserId,
    addComment,
    addLike,
    removeLike,
    addFollower,
    removeFollower,
    followers
  } = useContext(StoreContext);
  
  let { userId } = useParams();
  //console.log(users, currentUserId)
  const userA = users.find((userId === undefined) ? user => user.id === currentUserId: user => user.id === userId
  );
  console.log(followers)
  const followed = followers.some(
    follower =>
      follower.userId === userA.id &&
      follower.followerId === currentUserId
  );

  function getPosts() {
    return posts.filter(post => post.userId === userA.id);
  }

  function Posts() {
    let posts = getPosts();
    return posts.length;
  }

  function Followers() {
    let followers1 = followers.filter(
      follower => follower.userId === userA.id
    );
    return followers1.length;
  }

  function Following() {
    let followers1 = followers.filter(
      follower => follower.followerId === userA.id
    );
    return followers1.length;
  }
  function handleFollow() {
    addFollower(userA.id, currentUserId);
  }
  function handleUnfollow() {
    removeFollower(userA.id, currentUserId);
  }
  function renderButton() {
    if (userA.id === currentUserId) {
      return;
    }
    let following = followers.some(
      follow =>
        follow.userId === userA.id && follow.followerId === currentUserId
    );
    let c = following ? css.unfollowBtn : css.followBtn;
    let tex = following ? "Unfollow" : "Follow";
    let judge = following ? handleUnfollow : handleFollow;
    return (
      <button className={c} onClick={judge}>
        {tex}
      </button>
    );
  }

  function get() {
    return getPosts().map(post => (
      <Link key={post.id} to={`/${post.id}`}>
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
            {renderButton()}
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

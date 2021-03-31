import React, { useState } from "react";
import css from "./App.module.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import Explore from "./Explore.js";
import NewPost from "./NewPost.js";
import Activity from "./Activity.js";
import Profile from "./Profile.js";
import initialStore from "./initialStore.js";
import uniqueId from "./uniqueId.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  const [page, setPage] = useState("home");
  const [store, setStore] = useState(initialStore);
  function addLike(postId) {
    const like = {
      userId: store.currentUserId,
      postId,
      datetime: new Date().toISOString()
    };

    setStore({
      ...store,
      likes: store.likes.concat(like)
    });
  }
  function removeLike(postId) {
    setStore({
      ...store,
      likes: store.likes.filter(
        like => !(like.userId === store.currentUserId && like.postId === postId)
      )
    });
  }
  function addComment(postId, text) {
    const comment = {
      userId: store.currentUserId,
      postId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
      comments: store.comments.concat(comment)
    });
  }
  function addPost(photo, desc) {
    // TODO:
    // 1. Create a new post object (use uniqueId('post') to create an id)
    const post = {
      id: uniqueId("post"),
      userId: store.currentUserId,
      photo,
      desc,
      datetime: new Date().toISOString()
    };
    // 2. Update the store
    setStore({
      ...store,
      posts: store.posts.concat(post)
    });
  }
  function addFollower(userId, followerId) {
    // use concat
  }
  function removeFollower(userId, followerId) {
    // use filter
  }

  return (
    <Router>
      <div className={css.container}>
        <Header />
        <main className={css.content}>
          <Switch>
            <Route path="/explore">
              <Explore store={store} />
            </Route>
            <Route path="/newPost">
              <NewPost
                store={store}
                addPost={addPost}
                //cancelPost={cancelPost}
              />
            </Route>
            <Route path="/activity">
              return <Activity />;
            </Route>
            <Route path="/profile/:userId?">
              //Switch will render the first Route
              <Profile store={store} />
            </Route>
            <Route path="/:postId?">
              <Home
                store={store}
                onLike={addLike}
                onUnlike={removeLike}
                onComment={addComment}
              />
            </Route>
          </Switch>
        </main>

        <Navbar onNavChange={setPage} />
      </div>
    </Router>
  );
}

export default App;

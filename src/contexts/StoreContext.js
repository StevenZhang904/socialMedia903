import React, { createContext, useState, useEffect } from "react";
import uniqueId from "../components/uniqueId.js";
import initialStore from "../components/initialStore.js";
import firebase from "firebase";
import "firebase/database";
import "firebase/auth";
import { useHistory } from "react-router-dom";
// export the context so that other components can import
export const StoreContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyC4o0LhySGoZpp7KSnvDNzMvrbwtaOkSfg",
  authDomain: "bcweb-90854.firebaseapp.com",
  projectId: "bcweb-90854",
  storageBucket: "bcweb-90854.appspot.com",
  messagingSenderId: "752231451548",
  appId: "1:752231451548:web:98a2aea2ee6cfbb4765659"
 
};
function StoreContextProvider(props) {
  let history = useHistory();

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const db = firebase.firestore();
  const auth = firebase.auth();
  const [currentUserId, setCurrentUserId] = useState(null); // or 'judy'
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // initialization
    db.collection("users")
      .get()
      .then(snapshot => {
        const users = snapshot.docs.map(d => d.data());
        setUsers(users);
      });
    db.collection("posts")
      .get()
      .then(snapshot => {
        const posts = snapshot.docs.map(d => d.data());
        setPosts(posts);
      });
    db.collection("likes")
      .get()
      .then(snapshot => {
        const likes = snapshot.docs.map(d => d.data());
        setLikes(likes);
      });
    db.collection("followers")
      .get()
      .then(snapshot => {
        const followers = snapshot.docs.map(d => d.data());
        setFollowers(followers);
      });
    db.collection("comments")
      .get()
      .then(snapshot => {
        const comments = snapshot.docs.map(d => d.data());
        setComments(comments);
      });
  }, []);
  function signup(email, password, bio, id, name, photo) {
    const user = {
      email,
      id,
      name,
      bio,
      photo
    };
    auth.createUserWithEmailAndPassword(email, password).then(() => {
      // add a user to the firestore database
      db.collection("users").add(user);
      // add a user to the app state
      setUsers(users.concat(user));
      // set the user as a current user
      setCurrentUserId(id);
      // route to home
      history.push("/");
    });
  }
  function login(email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        // success
        db.collection("users")
          .where("email", "==", response.user.email)
          .get()
          .then(snapshot => {
            setCurrentUserId(snapshot.docs[0].data().id); //first document's data = user info
            history.push("/");
          });
      })
      .catch(error => {
        setCurrentUserId(null);
      });
  }
  function addLike(postId) {
    const like = {
      userId: currentUserId,
      postId,
      datetime: new Date().toISOString()
    };

    setLikes(likes.concat(like));
    db.collection("likes").add(like);
  }
  function removeLike(postId) {
    setLikes(
      likes.filter(
        like => !(like.userId === currentUserId && like.postId === postId)
      )
    );
    db.collection("likes")
      .where("userId", "==", currentUserId)
      .where("postId", "==", postId)
      .get()
      .then(snapshot => snapshot.forEach(doc => doc.ref.delete()));
  }
  function addComment(postId, text) {
    const comment = {
      userId: currentUserId,
      postId,
      text,
      datetime: new Date().toISOString()
    };

    setComments(comments.concat(comment));
    db.collection("comments").add(comment);
  }
  function addPost(photo, desc) {
    // TODO:
    // 1. Create a new post object (use uniqueId('post') to create an id)
    const post = {
      id: uniqueId("post"),
      userId: currentUserId,
      photo,
      desc,
      datetime: new Date().toISOString()
    };
    // 2. Update the store

    setPosts(posts.concat(post));
    db.collection("posts").add(post);
    // 3. Call setPage to come back to the home page
  }
  function addFollower(userId, followerId) {
    const a = {
      userId: userId,
      followerId: followerId
    };
    setFollowers(followers.concat(a));
    db.collection("followers").add(a);
  }
  function removeFollower(userId, followerId) {
    setFollowers(
      followers.filter(
        a => !(a.userId === userId && a.followerId === followerId)
      )
    );
    db.collection("followers")
      .where("userId", "==", currentUserId)
      .where("postId", "==", followerId)
      .get()
      .then(snapshot => snapshot.forEach(doc => doc.ref.delete()));
  }
  return (
    <StoreContext.Provider
      value={{
        signup,
        login,
        currentUserId,
        setCurrentUserId,
        users,
        setUsers,
        posts,
        setPosts,
        likes,
        setLikes,
        followers,
        setFollowers,
        comments,
        setComments,
        addComment,
        addLike,
        removeLike,
        addPost,
        addFollower,
        removeFollower
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}
export default StoreContextProvider; // export this component as default

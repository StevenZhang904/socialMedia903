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
import StoreContextProvider from "../contexts/StoreContext";

function App(props) {
  const [page, setPage] = useState("home");

  return (
    <Router>
      <StoreContextProvider>
        <div className={css.container}>
          <Header />
          <main className={css.content}>
            <Switch>
              <Route path="/explore">
                <Explore/>
              </Route>
              <Route path="/newPost">
                <NewPost/>
              </Route>
              <Route path="/activity">
                return <Activity />;
              </Route>
              <Route path="/profile/:userId?">
                //Switch will render the first Route
                <Profile/>
              </Route>
              <Route path="/:postId?">
                <Home/>
              </Route>
            </Switch>
          </main>

          <Navbar onNavChange={setPage} />
        </div>
      </StoreContextProvider>
    </Router>
  );
}

export default App;

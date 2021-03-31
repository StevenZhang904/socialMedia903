import React from "react";
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={css.navbar}>
      <div className={css.navItem}>
        <Link to="/">
          <img
            src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fhome.svg?v=1615537271553"
            alt="Home"
          />
        </Link>
      </div>
      <div className={css.navItem}>
        <Link to="/explore">
          <img
            src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fexplore.svg?v=1615537270963"
            alt="Explore"
          />
        </Link>
      </div>
      <div className={css.navItem}>
        <Link to="/newPost">
          <img
            src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fnewpost.svg?v=1615537273927"
            alt="NewPost"
          />
        </Link>
      </div>
      <div className={css.navItem}>
        <Link to="/activity">
          <img
            src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Factivity.svg?v=1615537274049"
            alt="Activity"
          />
        </Link>
      </div>
      <div className={css.navItem}>
        <Link to="/profile">
          <img
            src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fprofile.svg?v=1615537273393"
            alt="Profile"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import css from './Header.module.css';

function Header() {
  return (
    <nav className = {css.headerBar}>
      <div className={css.headerItem}>
        <button>
          <img src = "https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fcamera.svg?v=1615537270561" alt = "Camera"/>
        </button>
      </div>
      <div className={css.headerItem}>
        <button>
          <img src = 'https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Flogo.png?v=1615537272187' alt = "Logo"/>
        </button>
      </div>
      <div className={css.headerItem}>
        <button>
          <img src = 'https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fmessage.svg?v=1615537272478' alt = "Message"/>
        </button>
      </div>
    </nav>
  );
}

export default Header;
import React from 'react';
import css from './Navbar.module.css';


function Navbar(props) {
  
    function handleNavChange(page){
        if (props.onNavChange){
            props.onNavChange(page);
        }
    }
  
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('home')}>
                    <img src="https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fhome.svg?v=1615537271553"
                      alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('explore')}>
                    <img src='https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fexplore.svg?v=1615537270963' 
                      alt="Explore"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('newPost')}>
                    <img src='https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fnewpost.svg?v=1615537273927' 
                      alt="NewPost"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('activity')}>
                    <img src='https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Factivity.svg?v=1615537274049' 
                      alt="Activity"/>
                </button>
            </div>	
            <div className={css.navItem}>
                <button  onClick={e=>handleNavChange('profile')}>
                    <img src='https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fprofile.svg?v=1615537273393' 
                      alt="Profile"/>
                </button>
            </div>	
        </nav>
    );
}

export default Navbar;
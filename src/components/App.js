import React from 'react';
import css from './App.module.css';
import Header from './Header.js';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Explore from './Explore.js';
import NewPost from './NewPost.js';
import Activity from './Activity.js';
import Profile from './Profile.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	  page: "home"
    }
    this.setPage=this.setPage.bind(this);
  }

  setPage(page){
    this.setState({page:page});  
  }
  
renderMain(page){
	switch(page){
	case "home": return <Home/>;
  case "explore": return <Explore/>;
  case "newPost": return <NewPost/>;
  case "activity": return <Activity/>;
  case "profile": return <Profile/>;
	default: return <Home/>;
	}
}

  
  render(){
    return (
      
    <div className={css.container}>
	    <Header/>
	    <main className={css.content}>
	    	{this.renderMain(this.state.page)}      
      </main>
      <Navbar/>
    </div>
  );
  }

}

export default App;

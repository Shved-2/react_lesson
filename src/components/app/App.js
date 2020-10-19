import React from 'react';
import './App.css';
import Header from '../header/Header';
import NavBar from '../navbar/Navbar';
import Profiles from '../profiles/Profiles';
import Dialog from '../dialogs/Dialog';
import News from './../news/News';
import Music from './../music/Music'
import Setting from './../setting/Setting';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    //const App =(props)=>{
    let messagesData = this.props.state.messagesPage.messagesData;
    let dialogData = this.props.state.messagesPage.dialogData;
    let posts = this.props.state.profilePage.posts;
    //let frends = this.props.state.frendPage;
    let addPost =this.props.addPost;
    
    return (

      <div className="App">
        <Header />
        <NavBar  /*frends={frends}*/ />
        <div className="App-content">
          <Route path="/profiles"
            render={() => <Profiles
              posts={posts}
              addPost={addPost} 
              />} />

          <Route path="/dialogs"
            render={() => <Dialog
              messagesData={messagesData} dialogData={dialogData} />} />

          <Route path="/news"
            render={() => <News />} />

          <Route path="/music"
            render={() => <Music />} />

          <Route path="/setting"
            render={() => <Setting />} />
        </div>

      </div>

    );
  }
}

export default App;

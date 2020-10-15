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
    let messagesData = this.props.messagesData;
    let dialogData= this.props.dialogData;
let posts = this.props.posts;

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar />
          <div className="App-content">
            <Route path="/profiles" component={() => <Profiles posts={posts}/>} />
            <Route path="/dialogs" component={() => <Dialog messagesData={messagesData} dialogData={dialogData}/>} />
            <Route path="/news" component={() => <News />} />
            <Route path="/music" component={() => <Music />} />
            <Route path="/setting" component={() => <Setting />} />
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

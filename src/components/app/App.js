import React from 'react';
import './App.css';
import Header from '../header/Header';
import NavBar from '../navbar/Navbar';
import Profiles from '../profiles/Profiles';
import Dialog from '../dialogs/Dialog';
import News from './../news/News';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className="App-content">
          <Route path="/profiles" component={Profiles}/>
          <Route path="/dialogs" component={Dialog}/>
          <Route path="/news" component={News}/>
        </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Header from '../header/Header';
import NavBar from '../navbar/Navbar';
import Profiles from '../profiles/Profiles';
import Dialog from '../dialogs/Dialog';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <div className="App-content">
        {/*<Profiles />*/}
        {/*<Dialog />*/}
        <Dialog />
        </div>
        
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Header from '../header/Header';
import NavBar from '../navbar/Navbar';
import Profiles from '../profiles/Profiles';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Profiles />
        
      </div>
    );
  }
}

export default App;
